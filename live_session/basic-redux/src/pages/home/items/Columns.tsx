import { type ColumnDef } from "@tanstack/react-table";

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

export const Columns: ColumnDef<Item>[] = [
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
  // {
  //   id: "actions",
  //   header: "Actions",
  //   cell: ({ row }) => (
  //     <div className="flex gap-2">
  //       <button onClick={() => handleEdit(row.original)}>Edit</button>
  //       <button onClick={() => handleDelete(row.original._id)}>Delete</button>
  //     </div>
  //   ),
  // },
];
