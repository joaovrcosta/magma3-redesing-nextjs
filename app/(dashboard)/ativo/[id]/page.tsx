"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { BemPatrimonial, ativos } from "@/mocks/ativos";
import { AtivoHeader } from "@/components/ativo/header";
import { AtivoSidebar } from "@/components/ativo/sidebar";

export default function AtivoPage() {
  const params = useParams();
  const id = Number(params.id);

  const [ativo, setAtivo] = useState<BemPatrimonial | null>(null);

  useEffect(() => {
    const founded = ativos.find((item) => item.id === id);
    setAtivo(founded || null);
  }, [id]);

  if (!ativo) {
    return (
      <div className="p-4">
        <h1>Ativo não encontrado</h1>
        <p>ID: {id}</p>
      </div>
    );
  }

  return (
    <div className="">
      <AtivoHeader name={ativo.bemPatrimonial} />
      <div className="flex">
        <div className="w-full max-w-[410px]">
          <AtivoSidebar />
        </div>

        <div className="p-4">
          <h1 className="text-2xl font-bold">Informações</h1>
          <p>
            <strong>ID:</strong> {ativo.id}
          </p>
          <p>
            <strong>Nome:</strong> {ativo.nome}
          </p>
          <p>
            <strong>Bem Patrimonial:</strong> {ativo.bemPatrimonial}
          </p>
          <p>
            <strong>Número de Série:</strong> {ativo.numeroDeSerie}
          </p>
        </div>
      </div>
    </div>
  );
}
