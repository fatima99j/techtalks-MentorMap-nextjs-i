import React from "react";

export default function SectionTag({ icon, label, color }) {
  const bgColor = `${color}-100`;
  const textColor = `${color}-700`;

  return (
    <div
      className={`inline-flex items-center space-x-2 bg-${bgColor} text-${textColor} px-4 py-2 rounded-full mb-6`}
    >
      <span className="w-4 h-4">{icon}</span>
      <span className="text-sm font-semibold">{label}</span>
    </div>
  );
}
