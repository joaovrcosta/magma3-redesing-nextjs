export default async function AtivoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="h-full bg-[#ebedf4]">{children}</div>
        </div>
      </main>
    </div>
  );
}
