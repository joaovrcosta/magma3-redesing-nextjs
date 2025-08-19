import Header from "@/components/header";
import AppSidebar from "@/components/sidebar";
import Tabs from "@/components/tabs";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <AppSidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />

        {/* Wrapper flexível abaixo do header */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <Tabs />

          {/* Área de conteúdo com scroll */}
          <div className="flex-1 overflow-auto p-5">{children}</div>
        </div>
      </main>
    </div>
  );
}
