import { Card } from "@/components/card";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full gap-4">
        <Card>
          <p>Conformidade por tipo de ativo</p>
        </Card>
        <Card>
          <p>Conformidade por tipo de ativo</p>
        </Card>
      </div>
      <div className="flex w-full gap-4">
        <Card>
          <p>Conformidade por tipo de ativo</p>
        </Card>
        <Card>
          <p>Conformidade por tipo de ativo</p>
        </Card>
      </div>
    </div>
  );
}
