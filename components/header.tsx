import {
  Book,
  Download,
  Flame,
  Headset,
  Palette,
  WandSparkles,
} from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="bg-white w-full flex justify-center items-center px-6 py-[10px] border-b border-gray-200">
      <div className="flex gap-2">
        <Button
          variant="gradient"
          className=" flex items-center justify-center border border-[#E5E7EB] px-4 rounded-full h-[44px]"
        >
          <WandSparkles size={24} />
          IA
        </Button>
        <Button
          variant="ghost"
          className="border border-[#E5E7EB] px-4 rounded-full h-[44px] flex items-center"
        >
          <Book size={16} className="text-[#68569E]" />
          Doc
        </Button>
        <Button
          variant="ghost"
          className="border border-[#E5E7EB] px-4 rounded-full h-[44px]"
        >
          <Headset className="text-[#68569E]" />
          Suporte
        </Button>
        <Button
          variant="ghost"
          className="border border-[#E5E7EB] px-4 rounded-full h-[44px]"
        >
          <Download className="text-[#68569E]" />
          Downloads
        </Button>
        <Button
          variant="ghost"
          className="border border-[#E5E7EB] px-4 rounded-full h-[44px]"
        >
          <Palette className="text-[#68569E]" />
          Temas
        </Button>
        <Button
          variant="ghost"
          className="border border-[#E5E7EB] px-4 rounded-full h-[44px]"
        >
          <Flame className="text-[#68569E]" />
          Atualizações
        </Button>
      </div>
    </header>
  );
};
export default Header;
