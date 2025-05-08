"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface AnimateInViewProps {
  children: React.ReactNode
  animation?: "fade" | "slide-up" | "slide-right" | "scale" | "none"
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

export function AnimateInView({
  children,
  animation = "fade",
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
}: AnimateInViewProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsInView(false)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [once])

  const getAnimationVariants = () => {
    switch (animation) {
      case "fade":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }
      case "slide-up":
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }
      case "slide-right":
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }
      default:
        return {
          hidden: {},
          visible: {},
        }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getAnimationVariants()}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
