import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "./_components/Button";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] bg-[#fefefe] flex flex-col justify-center items-center text-center space-y-10">
        <h1 className="text-6xl font-bold">Lost Your Way?</h1>

        <Button variant="primary" size="large" href="/">
          <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" /> Go back
          home
        </Button>
      </main>
      <Footer />
    </>
  );
}

export default NotFound;
