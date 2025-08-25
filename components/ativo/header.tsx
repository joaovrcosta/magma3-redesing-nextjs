import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

interface AtivoHeaderProps {
  name: string;
}

export function AtivoHeader({ name }: AtivoHeaderProps) {
  return (
    <div className="p-4 border-b flex items-center gap-3">
      <Link href="/dashboard/force1/ativos">
        <Button variant="ghost" size="icon" className="!px-2 rounded-xl">
          <ArrowLeft />
        </Button>
      </Link>

      <h3>Detalhes do Ativo: {name}</h3>
    </div>
  );
}
