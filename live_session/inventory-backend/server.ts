// server.ts
import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import mongoose, { Schema, model } from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/inventory";

// Middleware
app.use(cors());
app.use(express.json());

// ================== Mongoose Schemas ===================

// Item Schema
const itemSchema = new Schema(
  {
    name: { type: String, required: true },
    sku: { type: String, required: true },
    category: { type: String },
    description: { type: String },
    quantity: { type: Number, required: true },
    unit: { type: String, required: true },
    status: { type: String, default: "In Stock" },
  },
  { timestamps: true }
);

const Item = model("Item", itemSchema);

// Issue Schema
const issueSchema = new Schema(
  {
    item: { type: Schema.Types.ObjectId, ref: "Item", required: true },
    quantity: { type: Number, required: true },
    issueDate: { type: Date, required: true },
  },
  { timestamps: true }
);

const Issue = model("Issue", issueSchema);

// ================== Routes ===================

// ✅ GET all items
app.get("/items", async (_req: Request, res: Response) => {
  const items = await Item.find();
  res.json(items);
});

// ✅ GET single item by ID
app.get("/items/:id", async (req: Request, res: Response) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.json(item);
  } catch {
    res.status(400).json({ error: "Invalid ID format" });
  }
});

// ✅ POST create new item
app.post("/items", async (req: Request, res: Response) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res
      .status(201)
      .json({ message: "Item created successfully", item: savedItem });
  } catch (error) {
    res.status(400).json({ error: "Failed to create item", details: error });
  }
});

// ✅ PUT update item
app.put("/items/:id", async (req: Request, res: Response) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedItem) return res.status(404).json({ error: "Item not found" });

    if (updatedItem.quantity === 0) {
      updatedItem.status = "Out of Stock";
      await updatedItem.save();
    }

    res.json({ message: "Item updated successfully", item: updatedItem });
  } catch {
    res.status(400).json({ error: "Update failed" });
  }
});

// ✅ DELETE item
app.delete("/items/:id", async (req: Request, res: Response) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem)  res.status(404).json({ error: "Item not found" });
    res.json({ message: "Item deleted successfully" });
  } catch {
    res.status(400).json({ error: "Delete failed" });
  }
});

// ✅ POST issue item
app.post("/issue/:itemId", async (req: Request, res: Response) => {
  const { quantity, issueDate } = req.body;
  const itemId = req.params.itemId;

  try {
    const item = await Item.findById(itemId);
    if (!item)  return res.status(404).json({ error: "Item not found" });

    if (quantity > item.quantity) {
       res.status(400).json({ error: "Issue quantity exceeds stock" });
    }

    item.quantity -= quantity;
    if (item.quantity === 0) item.status = "Out of Stock";
    await item.save();

    const newIssue = new Issue({
      item: item._id,
      quantity,
      issueDate: issueDate ? new Date(issueDate) : new Date(),
    });

    const savedIssue = await newIssue.save();

    res.json({ message: "Item issued successfully", issued: savedIssue });
  } catch (error) {
    res.status(400).json({ error: "Issue failed", details: error });
  }
});

// ✅ GET issue summary
app.get("/issue-summary", async (_req: Request, res: Response) => {
  try {
    const summary = await Issue.aggregate([
      {
        $group: {
          _id: "$item",
          totalIssued: { $sum: "$quantity" },
        },
      },
      {
        $lookup: {
          from: "items",
          localField: "_id",
          foreignField: "_id",
          as: "itemDetails",
        },
      },
      { $unwind: "$itemDetails" },
      {
        $project: {
          itemName: "$itemDetails.name",
          sku: "$itemDetails.sku",
          totalIssued: 1,
        },
      },
    ]);

    res.json(summary);
  } catch {
    res.status(500).json({ error: "Summary fetch failed" });
  }
});

// ================== Server ===================
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
  });

  app.get("/", (req, res)=>{
    res.send({success: true, message: "⚡ Welcome to Inventory server.."});
})

// 