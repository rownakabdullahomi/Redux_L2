import { useGetItemsQuery } from "@/redux/api/itemCreateApi";
import { DataTable } from "./DataTable";
import { Columns } from "./Columns";

const ItemPage = () => {
  const { data, isLoading } = useGetItemsQuery(undefined);
  if (isLoading) return <p>Loading....</p>;

  console.log(data);

  return (
    <div>
        <p className="text-3xl font-semibold text-center mb-10">Item Page</p>
      <DataTable columns={Columns} data={data} />
    </div>
  );
};

export default ItemPage;
