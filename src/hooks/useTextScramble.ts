import { useEffect, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const DURATION = 1200 // ms total

export function useTextScramble(text: string, start = true) {
  const [display, setDisplay] = useState(text)

  useEffect(() => {
    if (!start) { setDisplay(text); return }

    let frame: number
    const startTime = performance.now()
    const len = text.length

    function tick(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / DURATION, 1)

      // Number of characters revealed so far (left-to-right stagger)
      const revealed = Math.floor(progress * len)

      let result = ''
      for (let i = 0; i < len; i++) {
        if (text[i] === ' ' || text[i] === '\n') {
          result += text[i]
        } else if (i < revealed) {
          result += text[i]
        } else {
          result += CHARS[Math.floor(Math.random() * CHARS.length)]
        }
      }

      setDisplay(result)

      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        setDisplay(text)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [text, start])

  return display
}
