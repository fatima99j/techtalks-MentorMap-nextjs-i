"use client";

import Button from "@/components/ui/Button";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ShareProfileButton({ url }) {
  const handleShare = async () => {
    const shareUrl = url ?? window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: "Mentor Profile",
          url: shareUrl,
        });
      } else {
        await navigator.clipboard.writeText(shareUrl);
        alert("Link copied to clipboard!");
      }
    } catch (err) {
      if (err.name === "AbortError") {
        return;
      }
    }
  };

  return (
    <Button type="button" variant="secondary" onClick={handleShare}>
      <FontAwesomeIcon
        icon={faShare}
        className="h-3! w-3! sm:h-3.5! sm:w-3.5!"
      />
      Share
    </Button>
  );
}
