import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <div className="p-4 border border-[#E5E7EB] bg-white rounded-2xl w-full">
      {children}
    </div>
  );
}
