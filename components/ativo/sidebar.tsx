import { File, Info } from "lucide-react";

export function AtivoSidebar() {
  return (
    <div className="">
      <div className="p-4 flex items-center gap-2 bg-[#6650d4] rounded-tr-3xl rounded-tl-3xl text-white font-semibold">
        <Info />
        <h3>Informações</h3>
      </div>
      <div>
        <button className="flex items-center px-4 py-2 gap-2 hover:bg-gray-200 cursor-pointer w-full">
          <File size={18} />
          Geral
        </button>
        <button className="flex items-center px-4 py-2  gap-2 hover:bg-gray-200 cursor-pointer w-full">
          <File size={18} />
          Ativos Associados
        </button>
        <button className="flex items-center px-4 py-2 gap-2 hover:bg-gray-200 cursor-pointer w-full">
          <File size={18} />
          Manutenções
        </button>
        <button className="flex items-center px-4 py-2  gap-2 hover:bg-gray-200 cursor-pointer w-full">
          <File size={18} />
          Geral
        </button>
      </div>
    </div>
  );
}
