"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { BemPatrimonial } from "@/mocks/ativos";
import { ColumnDef } from "@tanstack/react-table";
import { CheckCircle, XCircle } from "lucide-react";

export const columns: ColumnDef<BemPatrimonial>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="min-w-[40px] max-w-[40px]">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="max-w-[40px]">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as boolean;

      return status ? (
        <CheckCircle className="text-green-500 w-5 h-5" />
      ) : (
        <XCircle className="text-red-500 w-5 h-5" />
      );
    },
  },
  {
    accessorKey: "bemPatrimonial",
    header: "Bem Patrimonial",
  },
  {
    accessorKey: "numeroDeSerie",
    header: "Número de série",
  },
  {
    accessorKey: "tags",
    header: "Tags",
  },
  {
    accessorKey: "subtipo",
    header: "Subtipo",
  },
  {
    accessorKey: "ativos-associados",
    header: "Ativos Associados",
  },
  {
    accessorKey: "last-user-logged",
    header: "Último usúario logado",
  },
  {
    accessorKey: "last-manutencion",
    header: "Última manutenção",
  },
  {
    accessorKey: "instalado",
    header: "Instalado",
  },
  {
    accessorKey: "version",
    header: "Versão",
  },
  {
    accessorKey: "last-communication",
    header: "Ultima comunicação",
  },
  {
    accessorKey: "unidade-administrativa",
    header: "Unidade administrativa",
  },
  {
    accessorKey: "nome",
    header: "Logradouro",
  },
];
