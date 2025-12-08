import React from "react";

export default function HeroCurveBackground() {
  return (
    <svg
      className="absolute top-0 md:-top-40 lg:top-0 left-0 w-full h-full opacity-[0.014] md:opacity-[0.03] lg:opacity-[0.06] z-0 pointer-events-none"
      viewBox="0 0 1200 600"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <circle cx="200" cy="150" r="4" fill="#2b00ff" />
      <circle cx="1000" cy="250" r="4" fill="#2b00ff" />
      <path
        d="M200,150 Q600,50 1000,250"
        stroke="#2b00ff"
        strokeWidth="2"
        fill="none"
      />

      <circle cx="400" cy="350" r="3" fill="#1a0099" />
      <circle cx="800" cy="100" r="3" fill="#1a0099" />
      <path
        d="M400,350 C550,400 650,80 800,100"
        stroke="#1a0099"
        strokeWidth="1.5"
        fill="none"
      />

      <circle cx="150" cy="450" r="3" fill="#f7f7f7" />
      <circle cx="1050" cy="450" r="3" fill="#f7f7f7" />
      <circle cx="300" cy="80" r="2.5" fill="#2b00ff" opacity="0.5" />
      <circle cx="900" cy="400" r="2.5" fill="#2b00ff" opacity="0.5" />
      <circle cx="600" cy="500" r="2.5" fill="#1a0099" opacity="0.6" />

      <path
        d="M150,450 Q600,550 1050,450"
        stroke="#ececec"
        strokeWidth="1"
        fill="none"
        opacity="0.7"
      />

      <circle cx="500" cy="200" r="2" fill="#2b00ff" opacity="0.4" />
      <circle cx="700" cy="300" r="2" fill="#1a0099" opacity="0.4" />
      <circle cx="350" cy="500" r="2" fill="#f7f7f7" opacity="0.8" />
      <circle cx="950" cy="150" r="2" fill="#ececec" opacity="0.8" />

      <path
        d="M500,200 Q550,250 700,300"
        stroke="#2b00ff"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M350,500 Q475,450 600,500"
        stroke="#ececec"
        strokeWidth="0.8"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}
