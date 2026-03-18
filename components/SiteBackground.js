'use client'

import { useEffect, useRef } from "react"
import { MatrixRain } from "@/components/MatrixRain"
import { getGsap } from "@/lib/gsap"

export function SiteBackground() {
  const rootRef = useRef(null)
  const blobLeftRef = useRef(null)
  const blobRightRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const { gsap } = getGsap()
    const ctx = gsap.context(() => {
      gsap.to(blobLeftRef.current, {
        y: -24,
        x: 18,
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })

      gsap.to(blobRightRef.current, {
        y: 22,
        x: -22,
        duration: 7.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })

      gsap.to(ringRef.current, {
        rotate: 360,
        duration: 36,
        ease: "none",
        repeat: -1,
      })
    }, rootRef)

    const onMove = (event) => {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      const dx = (event.clientX - centerX) / centerX
      const dy = (event.clientY - centerY) / centerY
      const { gsap } = getGsap()

      gsap.to(blobLeftRef.current, {
        xPercent: dx * 5,
        yPercent: dy * 5,
        duration: 0.45,
        ease: "power2.out",
      })

      gsap.to(blobRightRef.current, {
        xPercent: dx * -5,
        yPercent: dy * -5,
        duration: 0.45,
        ease: "power2.out",
      })
    }

    window.addEventListener("pointermove", onMove)

    return () => {
      window.removeEventListener("pointermove", onMove)
      ctx.revert()
    }
  }, [])

  return (
    <div ref={rootRef} className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <MatrixRain className="z-0" speed={0.75} />

      <div className="absolute inset-0">
        <div ref={blobLeftRef} className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div ref={blobRightRef} className="absolute right-[-100px] top-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div
          ref={ringRef}
          className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15 opacity-30"
        />
      </div>

      <div className="absolute inset-0 cyber-scanline z-[1] opacity-80" />
    </div>
  )
}
