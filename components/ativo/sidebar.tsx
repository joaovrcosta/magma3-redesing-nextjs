import { File } from "@phosphor-icons/react/dist/ssr";
import { Info } from "lucide-react";

export function AtivoSidebar() {
  return (
    <div className="bg-white rounded-tr-3xl rounded-tl-3xl">
      <div className="p-4 flex items-center gap-2 bg-[#6650d4] rounded-tr-3xl rounded-tl-3xl text-white font-semibold">
        <Info />
        <h3>Informações</h3>
      </div>
      <div className="">
        <button className="flex items-center px-4 py-3 gap-2 hover:bg-gray-200 cursor-pointer w-full">
          <File size={18} weight="fill" className="text-[#6650d4]" />
          Geral
        </button>
        <button className="flex items-center px-4 py-3  gap-2 hover:bg-gray-200 cursor-pointer w-full">
          <File size={18} weight="fill" className="text-[#6650d4]" />
          Ativos Associados
        </button>
        <button className="flex items-center px-4 py-3 gap-2 hover:bg-gray-200 cursor-pointer w-full">
          <File size={18} weight="fill" className="text-[#6650d4]" />
          Manutenções
        </button>
        <button className="flex items-center px-4 py-3  gap-2 hover:bg-gray-200 cursor-pointer w-full">
          <File size={18} weight="fill" className="text-[#6650d4]" />
          Logs agente
        </button>
      </div>
    </div>
  );
}
