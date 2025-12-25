import React from "react";

import FooterLinks from "./FooterLinks";
import FooterBranding from "./FooterBranding";

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-900 text-gray-300">
      <div className="container--common">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-8">
          <div className="lg:col-span-2">
            <FooterBranding />
          </div>

          <FooterLinks />
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 MentorMap. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
