"use client"

import { useEffect } from "react"

export function BodyBackgroundActivator() {
  useEffect(() => {
    const body = document.body
    body.classList.add("wood-ready")

    return () => {
      body.classList.remove("wood-ready")
    }
  }, [])

  return null
}

