"use client"

import { useEffect, useState } from "react"

const lines = [
  "Initializing security protocols...",
  "Scanning network...",
  "Loading threat intelligence...",
  "Welcome to Sandeep Kumar's Portfolio",
]

export default function TerminalIntro() {
  const [displayedLines, setDisplayedLines] = useState([])

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayedLines((prev) => [...prev, lines[i]])
      i++
      if (i === lines.length) clearInterval(interval)
    }, 800)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="glass-card p-6 font-mono text-sm text-accent">
      {displayedLines.map((line, index) => (
        <p key={index}>{`>`} {line}</p>
      ))}
      <span className="animate-pulse">█</span>
    </div>
  )
}
