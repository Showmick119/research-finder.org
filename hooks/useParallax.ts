"use client"

import { useEffect, useState } from "react"

export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setOffset(window.pageYOffset * speed)
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return offset
}

