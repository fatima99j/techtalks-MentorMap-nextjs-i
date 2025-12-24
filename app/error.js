"use client";

import Button from "./_components/Button";

export default function Error({ error, reset }) {
  return (
    <main className="min-h-[80vh] flex justify-center items-center flex-col gap-4">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <Button onClick={reset} size="large">
        Try again
      </Button>
    </main>
  );
}
