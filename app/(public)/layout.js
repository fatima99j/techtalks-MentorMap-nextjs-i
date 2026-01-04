import Footer from "@/components/ui/Footer";
import { BookingModalProvider } from "@/features/mentors/mentor/context/BookingModalContext";
import Navbar from "@/features/navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <BookingModalProvider>{children}</BookingModalProvider>
      </main>
      <Footer />
    </>
  );
}
