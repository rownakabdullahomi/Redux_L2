import { useGetItemsQuery } from "@/redux/api/itemCreateApi";
import { DataTable } from "./DataTable";
import { getColumns, type Item } from "./Columns";
import { useState } from "react";
import UpdateItem from "../itemUpdate/UpdateItem";

const ItemPage = () => {
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const { data, isLoading } = useGetItemsQuery(undefined);


    const handleCloseModal = () => setEditingItem(null);




  if (isLoading) return <p>Loading....</p>;


  return (
    <div>
      <p className="text-3xl font-semibold text-center mb-10">Item Page</p>
      <DataTable columns={getColumns(setEditingItem)} data={data || []} />
      {editingItem && (
        <UpdateItem
          item={editingItem}
          onClose = {handleCloseModal}
        />
      )}
    </div>
  );
};

export default ItemPage;
