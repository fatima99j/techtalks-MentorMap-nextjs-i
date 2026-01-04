import { Inter } from "next/font/google";

import "@/app/_styles/globals.css";

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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased min-h-screen overflow-x-hidden flex flex-col bg-white text-gray-900`}
      >
        {children}

        <div id="drawer-hook" />
        <div id="modal-hook" />
      </body>
    </html>
  );
}
