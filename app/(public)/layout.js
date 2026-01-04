import Footer from "@/components/ui/Footer";
import { ModalProvider } from "@/features/mentors/mentor/context/ModalContext";
import Navbar from "@/features/navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ModalProvider>{children}</ModalProvider>
      </main>
      <Footer />
    </>
  );
}
