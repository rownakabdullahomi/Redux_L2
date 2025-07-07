import { Button } from "@/components/ui/button";
import { type ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";

export interface Item {
  _id: string;
  name: string;
  sku: string;
  category: string;
  description?: string;
  quantity: number;
  unit: string;
  status: "In Stock" | "Out of Stock" | "Low Stock";
  createdAt: string;
  updatedAt: string;
}

export const getColumns = (setEditingItem: (item: Item) => void): ColumnDef<Item>[] => [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "sku",
    header: "SKU",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ getValue }) => getValue() || "N/A",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "unit",
    header: "Unit",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;

      return (
        <span
          className={
            status === "In Stock"
              ? "text-green-600"
              : status === "Low Stock"
              ? "text-yellow-600"
              : "text-red-600"
          }
        >
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ getValue }) => new Date(getValue() as string).toLocaleString(),
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ getValue }) => {
      const date = new Date(getValue() as string);
      return date.toLocaleString();
    },
  },
  // Optional: Action column (Edit/Delete)
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <Button
        size={"icon"}
        variant={"ghost"}
        onClick={() => setEditingItem(row.original)}
      >
        <Pencil className="w-4 h-4 text-blue-500" />
      </Button>
    ),
  },
];
