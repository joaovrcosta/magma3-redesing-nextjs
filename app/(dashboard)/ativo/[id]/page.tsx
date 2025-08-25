"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { BemPatrimonial, ativos } from "@/mocks/ativos";
import { AtivoHeader } from "@/components/ativo/header";
import { AtivoSidebar } from "@/components/ativo/sidebar";
import { Info, Save, Tally4 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
    <div className="h-full">
      <AtivoHeader name={ativo.bemPatrimonial} />
      <div className="flex lg:flex-row flex-col gap-3 p-4 h-full">
        <div className="w-full lg:max-w-[410px] w-full rounded-tr-3xl rounded-tl-3xl border-[1px] bg-white">
          <AtivoSidebar />
        </div>

        <div className="w-full border rounded-tr-3xl rounded-tl-3xl bg-white">
          <div className="p-4 flex items-center gap-2 bg-[#6650d4] rounded-tr-3xl rounded-tl-3xl text-white font-semibold">
            <h3>Geral</h3>
          </div>
          <div className="p-4 border-b">
            <Button
              className="flex border bg-white !p-6 rounded-full"
              variant="outline"
            >
              <Save />
              Salvar
            </Button>
          </div>
          <div className="py-8 px-12">
            <div className="mb-3">Variados</div>
            <div className="p-6 space-y-3 border rounded-[24px]">
              <div className="flex gap-3">
                <div className="flex-1">
                  <Label htmlFor="email">Bem patrimonial</Label>
                  <Input defaultValue={ativo.bemPatrimonial} />
                </div>
                <div className="flex-1">
                  <Label htmlFor="email">Número de série</Label>
                  <Input defaultValue={ativo.numeroDeSerie} />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-1">
                  <Label htmlFor="email">Fabricante</Label>
                  <Input />
                </div>
                <div className="flex-1">
                  <Label htmlFor="email">Modelo</Label>
                  <Input />
                </div>
              </div>
              <div>
                <div className="flex-1">
                  <Label htmlFor="email">Observações</Label>
                  <Input />
                </div>
              </div>
            </div>

            <div className="mb-3 mt-3">Valor</div>
            <div className="p-6 space-y-3 border rounded-[24px]">
              <div className="flex gap-3">
                <div className="flex-1">
                  <Label htmlFor="email">Bem patrimonial</Label>
                  <Input />
                </div>
                <div className="flex-1">
                  <Label htmlFor="email">Número de série</Label>
                  <Input />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-1">
                  <Label htmlFor="email">Fabricante</Label>
                  <Input />
                </div>
                <div className="flex-1">
                  <Label htmlFor="email">Modelo</Label>
                  <Input />
                </div>
              </div>
              <div>
                <div className="flex-1">
                  <Label htmlFor="email">Observações</Label>
                  <Input />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
