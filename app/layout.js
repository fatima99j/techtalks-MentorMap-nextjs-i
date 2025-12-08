import { Inter } from "next/font/google";

import "@/app/_styles/globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const inter = Inter({
  subset: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s - MentorMap",
    default: "Welcome - MentorMap - Confidence you need to succeed",
  },
  description:
    "MentorMap connects students and early-career professionals with verified industry mentors for focused mentorship sessions. Gain career clarity, get actionable feedback, and build confidence to achieve your goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased scroll-smooth min-h-screen overflow-x-hidden flex flex-col bg-primary-100 text-gray-900`}
      >
        <Navbar />
        <main className="flex-1 py-12">
          <div className="max-w-400 mx-auto px-8">{children} </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
