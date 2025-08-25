import { columns } from "@/components/tables/ativos/columns";
import { DataTable } from "@/components/tables/ativos/data-table";
import { BemPatrimonial, ativos } from "@/mocks/ativos";

async function getData(): Promise<BemPatrimonial[]> {
  return ativos;
}

export default async function AtivosPage() {
  const data = await getData();

  return (
    <div className="h-full">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
