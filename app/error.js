"use client";

import React from "react";

export default function Error({ error, reset }) {
  return (
    <main className="min-h-[80vh] flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <button
        className="inline-block bg-primary-600 hover:bg-primary-800 transition-colors duration-300 font-semibold rounded-lg text-primary-100 px-4 lg:px-8 py-2 lg:py-4 text-lg cursor-pointer"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}
