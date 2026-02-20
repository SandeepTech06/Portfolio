'use client'

import { useEffect, useRef, useState } from 'react'
import { getGsap } from '@/lib/gsap'

const CYBER_CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`0123456789ABCDEF'

export function GlitchText({
    text,
    as: Tag = 'span',
    className = '',
    triggerOnScroll = false,
    duration = 1.2,
    ...props
}) {
    const ref = useRef(null)
    const [displayText, setDisplayText] = useState(text)
    const hasAnimated = useRef(false)

    useEffect(() => {
        if (!ref.current || hasAnimated.current) return

        const { gsap, ScrollTrigger } = getGsap()

        const animate = () => {
            if (hasAnimated.current) return
            hasAnimated.current = true

            const finalText = text
            const length = finalText.length
            let progress = { value: 0 }

            gsap.to(progress, {
                value: 1,
                duration,
                ease: 'power2.inOut',
                onUpdate: () => {
                    const p = progress.value
                    const resolved = Math.floor(p * length)
                    let result = ''

                    for (let i = 0; i < length; i++) {
                        if (i < resolved) {
                            result += finalText[i]
                        } else if (finalText[i] === ' ') {
                            result += ' '
                        } else {
                            result += CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)]
                        }
                    }

                    setDisplayText(result)
                },
                onComplete: () => {
                    setDisplayText(finalText)
                },
            })
        }

        if (triggerOnScroll) {
            ScrollTrigger.create({
                trigger: ref.current,
                start: 'top 85%',
                once: true,
                onEnter: animate,
            })
        } else {
            animate()
        }

        return () => {
            ScrollTrigger.getAll().forEach(t => {
                if (t.trigger === ref.current) t.kill()
            })
        }
    }, [text, triggerOnScroll, duration])

    return (
        <Tag ref={ref} className={className} {...props}>
            {displayText}
        </Tag>
    )
}
