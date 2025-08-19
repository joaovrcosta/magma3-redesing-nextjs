"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const tabs = [
  { name: "Estatisticas", path: "/dashboard" },
  { name: "Alaska", path: "/dashboard/alaska" },
  { name: "Bluesky", path: "/dashboard/bluesky" },
];

const Tabs = () => {
  const pathName = usePathname();

  return (
    <div className="bg-[#6650D4] shadow-2xl text-white rounded-tl-3xl rounded-tr-3xl w-full flex justify-start items-start px-12 pt-4 border-b border-gray-200">
      <div className="flex gap-8">
        {tabs.map((tab) => {
          const isActive = pathName === tab.path;
          return (
            <Link
              key={tab.path}
              href={tab.path}
              className={`relative pb-[20px] font-medium transition-colors ${
                isActive ? "text-white" : "text-purple-200 hover:text-white"
              }`}
            >
              {tab.name}
              {isActive && (
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-white rounded-full"></span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
