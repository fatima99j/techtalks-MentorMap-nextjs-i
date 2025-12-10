import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Button from "./_components/Button";

function NotFound() {
  return (
    <main className="min-h-[75vh] bg-[#fefefe] flex flex-col justify-center items-center text-center space-y-10">
      <h1 className="text-6xl font-bold">Lost Your Way?</h1>
      <Link href="/" className="inline-block">
        <Button variation="primary" size="large">
          <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" /> Go back
          home
        </Button>
      </Link>
    </main>
  );
}

export default NotFound;
