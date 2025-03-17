"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <nav className="flex gap-6">
          <a href="#" className="text-lg font-bold">
            Rupin Ajay
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground">
            About
          </a>
          <a href="#experience" className="text-muted-foreground hover:text-foreground">
            Experience
          </a>
          <a href="#projects" className="text-muted-foreground hover:text-foreground">
            Projects
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground">
            Contact
          </a>
        </nav>
        {mounted && (
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        )}
      </div>
    </header>
  )
}

