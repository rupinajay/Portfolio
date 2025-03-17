"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type Card = {
  id: number
  content: React.ReactNode
  className: string
  thumbnail: string
}

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null)
  const [lastSelected, setLastSelected] = useState<Card | null>(null)

  const handleClick = (card: Card) => {
    setLastSelected(selected)
    setSelected(card)
  }

  const handleOutsideClick = () => {
    setLastSelected(selected)
    setSelected(null)
  }

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              "relative overflow-hidden",
              "h-full w-full",
              "rounded-xl transition-all duration-200 ease-in-out",
              selected?.id === card.id
                ? "rounded-none cursor-pointer absolute inset-0 h-full w-full z-50"
                : lastSelected?.id === card.id
                  ? "z-40 scale-[0.95]"
                  : "scale-100 z-0",
            )}
            layout
          >
            <div className="absolute inset-0 z-10 transition-all duration-500 ease-in-out bg-background/80 backdrop-blur-sm"></div>
            <motion.div className="relative z-20 h-full w-full p-4 flex flex-col">
              <div className="flex-1">{card.content}</div>
              <div className="mt-4">
                <img
                  className="w-full h-48 object-cover rounded-lg"
                  src={card.thumbnail || "/placeholder.svg"}
                  alt="Project thumbnail"
                />
              </div>
              {selected?.id === card.id && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute top-4 right-4 z-30">
                  <button
                    onClick={handleOutsideClick}
                    className="text-xs font-medium px-3 py-1 bg-background/50 backdrop-blur-sm rounded-full"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      ))}
    </div>
  )
}

