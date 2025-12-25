import Footer from "@/components/ui/Footer";
import Navbar from "@/features/navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
