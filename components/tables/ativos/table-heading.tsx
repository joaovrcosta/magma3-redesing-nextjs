import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, Files, Plus, RefreshCcw, Trash } from "lucide-react";

export function TableHeading() {
  return (
    <div className="flex items-center gap-3">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Computador" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
      <div>
        <Button variant="outline" className="bg-white">
          <Plus />
          Adicionar
        </Button>
      </div>
      <div>
        <Button variant="outline" className="bg-white">
          <Trash />
          Remover
        </Button>
      </div>
      <div>
        <Button variant="outline" className="bg-white">
          <Check />
          Conformidades
        </Button>
      </div>
      <div>
        <Button variant="outline" className="bg-white">
          <Files />
          Arquivos
        </Button>
      </div>
      <div>
        <Button variant="outline" className="bg-white">
          <RefreshCcw />
          Atualizar
        </Button>
      </div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Outros" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
