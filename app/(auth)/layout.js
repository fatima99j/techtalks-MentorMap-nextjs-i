import "@/app/_styles/globals.css";

export default function AuthLayout({ children }) {
  return (
    <main className="grid lg:grid-cols-2 min-h-screen overflow-x-hidden bg-red-[#fefefe]">
      {children}
    </main>
  );
}
