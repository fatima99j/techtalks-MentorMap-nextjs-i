import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
