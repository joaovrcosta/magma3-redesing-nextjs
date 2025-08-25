import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

interface AtivoHeaderProps {
  name: string;
}

export function AtivoHeader({ name }: AtivoHeaderProps) {
  return (
    <div className="p-4 border-b flex items-center gap-3 bg-white">
      <Link href="/dashboard/force1/ativos">
        <Button
          variant="ghost"
          size="icon"
          className="!px-2 rounded-xl w-[45px]"
        >
          <ArrowLeft />
        </Button>
      </Link>

      <h3 className="text-lg">
        Detalhes do Ativo: <strong>{name}</strong>
      </h3>
    </div>
  );
}
