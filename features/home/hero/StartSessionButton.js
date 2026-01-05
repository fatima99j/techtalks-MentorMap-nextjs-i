"use client";

import { useRouter } from "next/navigation";

import Button from "@/components/ui/Button";

// generate random room id
function randomID(len) {
  let result = "";
  const chars =
    "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP";
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export default function StartSessionButton() {
  const router = useRouter();

  const handleStartSession = () => {
    const newRoomID = randomID(8);
    router.push(`/session/${newRoomID}`);
  };

  return (
    <Button variant="secondary" size="large" onClick={handleStartSession}>
      Start a Session
    </Button>
  );
}
