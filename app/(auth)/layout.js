import React from "react";

import "@/app/_styles/globals.css";

export default function AuthLayout({ children }) {
  return (
    <html>
      <body className="min-h-screen overflow-x-hidden bg-red-[#fefefe] flex flex-col">
        <main className="grid lg:grid-cols-2 flex-1">{children}</main>
      </body>
    </html>
  );
}
