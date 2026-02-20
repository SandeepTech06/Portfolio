"use client"

import { getGsap } from "@/lib/gsap"

export function attachCardTilt(container, selector = "[data-tilt-card]") {
  if (!container || typeof window === "undefined") return () => {}

  const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches
  if (!supportsHover) return () => {}

  const { gsap } = getGsap()
  const cards = Array.from(container.querySelectorAll(selector))
  const cleanups = []

  cards.forEach((card) => {
    const rotateYTo = gsap.quickTo(card, "rotateY", { duration: 0.28, ease: "power2.out" })
    const rotateXTo = gsap.quickTo(card, "rotateX", { duration: 0.28, ease: "power2.out" })
    const yTo = gsap.quickTo(card, "y", { duration: 0.28, ease: "power2.out" })

    gsap.set(card, { transformPerspective: 900, transformStyle: "preserve-3d" })

    const onMove = (event) => {
      const rect = card.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width
      const y = (event.clientY - rect.top) / rect.height
      const rotateY = (x - 0.5) * 10
      const rotateX = (0.5 - y) * 10

      rotateYTo(rotateY)
      rotateXTo(rotateX)
      yTo(-4)
    }

    const onLeave = () => {
      rotateYTo(0)
      rotateXTo(0)
      yTo(0)
    }

    card.addEventListener("pointermove", onMove)
    card.addEventListener("pointerleave", onLeave)

    cleanups.push(() => {
      card.removeEventListener("pointermove", onMove)
      card.removeEventListener("pointerleave", onLeave)
      gsap.set(card, { rotateX: 0, rotateY: 0, y: 0 })
    })
  })

  return () => cleanups.forEach((cleanup) => cleanup())
}

