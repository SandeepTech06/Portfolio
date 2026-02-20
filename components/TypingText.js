"use client";

import { useEffect, useState } from "react";

export default function TypingText({ text = "", speed = 60 }) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*@";
    let i = 0;

    const interval = setInterval(() => {
      const revealed = text.slice(0, i + 1);
      const scrambleLength = Math.max(0, Math.min(3, text.length - i - 1));
      const scramble = Array.from({ length: scrambleLength }, () => chars[Math.floor(Math.random() * chars.length)]).join("");

      setDisplayed(revealed + scramble);
      i++;

      if (i === text.length) {
        clearInterval(interval);
        setDisplayed(text);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 520);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="font-semibold text-accent">
      {displayed}
      <span className={`ml-1 transition-opacity duration-150 ${showCursor ? "opacity-100" : "opacity-0"}`}>|</span>
    </span>
  );
}
