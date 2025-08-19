import { columns } from "@/components/tables/ativos/columns";
import { DataTable } from "@/components/tables/ativos/data-table";
import { BemPatrimonial, ativos } from "@/mocks/ativos"; // importe os dados mockados

async function getData(): Promise<BemPatrimonial[]> {
  // Simulando um fetch com dados mockados
  return ativos;
}

export default async function AtivosPage() {
  const data = await getData();

  return (
    <div className="h-full">
      {" "}
      {/* importante ter altura para a tabela preencher */}
      <DataTable columns={columns} data={data} />
    </div>
  );
}
