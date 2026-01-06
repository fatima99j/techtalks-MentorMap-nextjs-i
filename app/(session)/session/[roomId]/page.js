"use client";

import Spinner from "@/components/ui/Spinner";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function randomID(len) {
  let result = "";
  const chars =
    "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP";
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export default function Page() {
  const params = useParams();
  const roomID = params.roomId;

  const element = useRef(null);
  const zpRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const initZego = async () => {
      try {
        const { ZegoUIKitPrebuilt } = await import(
          "@zegocloud/zego-uikit-prebuilt"
        );

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
          parseInt(process.env.NEXT_PUBLIC_ZEGO_APP_ID),
          process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET,
          roomID,
          randomID(5),
          randomID(5)
        );

        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zpRef.current = zp;

        zp.joinRoom({
          container: element.current,
          sharedLinks: [
            {
              name: "Copy link",
              url: `${window.location.protocol}//${window.location.host}${window.location.pathname}`,
            },
          ],
          scenario: { mode: ZegoUIKitPrebuilt.OneONoneCall },
        });

        if (mounted) setLoading(false);
      } catch (err) {
        if (mounted) {
          setError(err.message || "Failed to initialize Zego");
          setLoading(false);
        }
      }
    };

    if (roomID) {
      initZego();
    }

    return () => {
      mounted = false;
      if (zpRef.current) zpRef.current.destroy();
      const leftover = document.querySelectorAll('[id^="zegocloud-"]');
      leftover.forEach((el) => el.remove());
    };
  }, [roomID]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4 bg-gray-100">
        <h2 className="text-2xl font-bold text-gray-900">
          Error loading session
        </h2>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <Spinner />
        <p className="text-gray-600 text-base md:text-lg font-medium text-center">
          Connecting to session...
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-screen">
      <div ref={element} className="w-full h-full" />
    </div>
  );
}
