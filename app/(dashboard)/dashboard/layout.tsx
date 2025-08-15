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

      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header />
        <Tabs />

        <div className="flex-1 overflow-auto p-10">{children}</div>
      </main>
    </div>
  );
}
