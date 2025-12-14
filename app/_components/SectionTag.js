import React from "react";

const sectionTagColors = {
  primary: {
    bg: "bg-primary-100",
    text: "text-primary-700",
  },
  indigo: {
    bg: "bg-indigo-100",
    text: "text-indigo-700",
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-700",
  },
  amber: {
    bg: "bg-amber-100",
    text: "text-amber-700",
  },
  green: {
    bg: "bg-green-100",
    text: "text-green-700",
  },
  red: {
    bg: "bg-red-100",
    text: "text-red-700",
  },
};

export default function SectionTag({ icon, label, color = "primary" }) {
  return (
    <div
      className={`inline-flex items-center space-x-2 ${sectionTagColors[color].bg} ${sectionTagColors[color].text} px-4 py-2 rounded-full mb-6`}
    >
      <span className="w-4 h-4">{icon}</span>
      <span className="text-sm font-semibold">{label}</span>
    </div>
  );
}
