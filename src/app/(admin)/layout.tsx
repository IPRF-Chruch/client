import "../globals.css";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full flex flex-col items-center">
        <header className="text-2xl font-bold p-4 w-full border-b border-gray-300">
          Admin Panel
        </header>
        {children}
      </body>
    </html>
  );
}
