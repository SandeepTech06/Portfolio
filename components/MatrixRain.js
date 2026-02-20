'use client'

import { useEffect, useRef } from 'react'

export function MatrixRain({ className = '' }) {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        let animationId

        const resize = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }
        resize()
        window.addEventListener('resize', resize)

        const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF{}[]<>/\\|!@#$%^&*'
        const fontSize = 14
        const columns = Math.floor(canvas.width / fontSize)
        const drops = Array(columns).fill(1)

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.06)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            const style = getComputedStyle(document.documentElement)
            const isDark = document.documentElement.classList.contains('dark')

            ctx.fillStyle = isDark
                ? 'hsla(142, 90%, 48%, 0.35)'
                : 'hsla(142, 72%, 36%, 0.18)'
            ctx.font = `${fontSize}px monospace`

            for (let i = 0; i < drops.length; i++) {
                const char = chars[Math.floor(Math.random() * chars.length)]
                ctx.fillText(char, i * fontSize, drops[i] * fontSize)

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0
                }
                drops[i]++
            }

            animationId = requestAnimationFrame(draw)
        }

        draw()

        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
            style={{ opacity: 0.4 }}
        />
    )
}
