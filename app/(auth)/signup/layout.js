import React from "react";

import "@/app/_styles/globals.css";

export default function AuthLayout({ children }) {
  return (
    <html>
      <body className="min-h-screen overflow-x-hidden">
        <main className="grid lg:grid-cols-2">{children}</main>
      </body>
    </html>
  );
}
