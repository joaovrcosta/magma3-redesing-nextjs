"use client";

import { usePathname } from "next/navigation";
import useSidebarStore from "@/stores/sidebarStore";
import Link from "next/link";
import { AlignBottomIcon } from "@phosphor-icons/react";
import { Menu } from "lucide-react";
import Image from "next/image";
import magmaLogo from "@/public/logo-extended.png";
import tinyLogo from "@/public/tiny-logo.png";

const links = [
  { name: "Estatisticas", path: "/dashboard", icon: AlignBottomIcon },
  { name: "Force1", path: "/dashboard/force1", icon: AlignBottomIcon },
  { name: "Alaska", path: "/dashboard/bluesky", icon: AlignBottomIcon },
  { name: "Crystal", path: "/dashboard/crystal", icon: AlignBottomIcon },
  { name: "Bluesky", path: "/dashboard/alaska", icon: AlignBottomIcon },
];

const AppSidebar = () => {
  const pathName = usePathname();
  const { isOpen, toggleSidebar } = useSidebarStore();

  return (
    <section
      className={`flex h-screen flex-col gap-2 bg-[#fff] text-[#0A2540] py-4 transition-all duration-300 ease-in-out border-r ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <div className="flex-1">
        <div
          className={`flex ${
            isOpen
              ? "items-start justify-start pl-[24px]"
              : "items-center justify-center"
          }  mb-6 flex-col gap-4`}
        >
          <Image
            src={magmaLogo}
            alt="Magma Logo"
            className={`transition-all duration-300 w-[132px] h-[32px] ${
              isOpen ? "block" : "hidden"
            }`}
          />

          <Image
            src={tinyLogo}
            alt="Tiny Logo"
            className={`transition-all duration-300 h-[32px] ${
              isOpen ? "hidden" : "block"
            }`}
          />

          <button onClick={toggleSidebar} className="cursor-pointer mt-6">
            <Menu />
          </button>
        </div>

        <nav className="w-full max-h-[308px] bg-transparent py-4 px-0 rounded-lg border-none">
          <ul className={`space-y-2 ${isOpen ? "px-0 pr-4" : "px-[10px]"}`}>
            {links.map((link) => {
              const isActive = pathName === link.path;
              return (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`relative flex items-center justify-center h-[44px] transition-colors ${
                      isOpen ? "px-6" : "px-0"
                    } overflow-hidden
                      ${
                        isActive
                          ? isOpen
                            ? "bg-gradient-to-r from-purple-600 to-[#F0553D] text-white rounded-r-full "
                            : "bg-gradient-to-r from-purple-600 to-[#F0553D] text-white rounded-full"
                          : "text-[#0A2540] hover:bg-[#f1f1f1] rounded-r-full"
                      }`}
                  >
                    <div
                      className={`flex items-center justify-between ${
                        isOpen ? "w-full" : ""
                      }`}
                    >
                      <div className="flex items-center justify-center">
                        <link.icon
                          size={28}
                          className={`${
                            isActive ? "text-white" : "text-[#68569E]"
                          }`}
                          weight={isActive ? "fill" : "regular"}
                        />
                        {isOpen && (
                          <span className="ml-3 whitespace-nowrap">
                            {link.name}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default AppSidebar;
