"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableHeading } from "./table-heading";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full h-full flex flex-col rounded-[24px] border bg-white overflow-hidden">
      {/* Heading com filtros / controles */}
      <div className="p-4 border-b">
        <TableHeading />
      </div>

      {/* Cabeçalho fixo */}
      <Table className="w-full border-collapse">
        <TableHeader className="sticky top-0 bg-white z-10 shadow-sm">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
      </Table>

      {/* Corpo rolável */}
      <div className="flex-1 overflow-auto">
        <Table className="w-full border-collapse">
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Rodapé fixo */}
      <Table className="w-full border-collapse">
        <TableFooter className="sticky bottom-0 bg-white z-10 border-t shadow-sm">
          <TableRow>
            <TableCell colSpan={columns.length} className="text-left px-4">
              Ativos: {data.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
