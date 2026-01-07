"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "./ui/button"
import { MousePointer2, MousePointerClick } from "lucide-react"

type Particle = {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  alpha: number
  color: string
}

const STORAGE_KEY = "cursor-trail-enabled"
const MAX_PARTICLES = 220

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const particlesRef = useRef<Particle[]>([])
  const animRef = useRef<number | null>(null)
  const [enabled, setEnabled] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  // read preference on mount
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === "true") setEnabled(true)

    const mq = window.matchMedia("(pointer: coarse)")
    const touchDetected = mq.matches || "ontouchstart" in window
    setIsTouch(touchDetected)

    const handler = (event: MediaQueryListEvent) => setIsTouch(event.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  useEffect(() => {
    if (!enabled || isTouch) {
      // clear particles if turning off
      particlesRef.current = []
      const ctx = canvasRef.current?.getContext("2d")
      if (ctx && canvasRef.current) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
      }
      if (animRef.current) cancelAnimationFrame(animRef.current)
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const getPrimaryColor = () => {
      const primary = getComputedStyle(document.documentElement).getPropertyValue("--primary")?.trim()
      return primary || "#3b82f6"
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const handleMove = (e: MouseEvent) => {
      const color = getPrimaryColor()
      particlesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 8 + 4,
        speedX: (Math.random() - 0.5) * 2.5,
        speedY: (Math.random() - 0.5) * 2.5,
        alpha: 1,
        color,
      })
      if (particlesRef.current.length > MAX_PARTICLES) {
        particlesRef.current.splice(0, particlesRef.current.length - MAX_PARTICLES)
      }
    }
    window.addEventListener("mousemove", handleMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particlesRef.current.forEach((p, i) => {
        p.x += p.speedX
        p.y += p.speedY
        p.alpha -= 0.015

        if (p.alpha <= 0) {
          particlesRef.current.splice(i, 1)
          return
        }

        ctx.globalAlpha = p.alpha
        ctx.fillStyle = p.color
        ctx.fillRect(p.x, p.y, p.size, p.size)
        ctx.globalAlpha = 1
      })
      animRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMove)
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [enabled])

  const toggle = () => {
    setEnabled((prev) => {
      const next = !prev
      window.localStorage.setItem(STORAGE_KEY, next ? "true" : "false")
      return next
    })
  }

  if (isTouch) return null

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-50"
        style={{ width: "100vw", height: "100vh" }}
      />
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        <Button
          size="sm"
          variant={enabled ? "default" : "outline"}
          onClick={toggle}
          className="shadow-md"
        >
          {enabled ? (
            <>
              <MousePointerClick className="mr-2 h-4 w-4" />
              Cursor Trail On
            </>
          ) : (
            <>
              <MousePointer2 className="mr-2 h-4 w-4" />
              Cursor Trail Off
            </>
          )}
        </Button>
      </div>
    </>
  )
}

