"use client";

import { useEffect, useState } from "react";

export default function TypingText({ text = "", speed = 60 }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;

      if (i === text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className="font-semibold text-accent">
      {displayed}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
}
