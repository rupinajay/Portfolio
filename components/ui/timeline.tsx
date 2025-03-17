"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface TimelineEntry {
  title: string
  date: string
  content: React.ReactNode
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.scrollHeight)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], [0, height])

  return (
    <div ref={containerRef} className="relative">
      {data.map((item, index) => (
        <div
          key={index}
          className={`mb-16 flex justify-between items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
        >
          <div className={`w-5/12 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
            <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{item.date}</p>
          </div>
          <div className="z-20 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-xl">
            <span className="text-lg font-semibold">{index + 1}</span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`w-5/12 bg-card rounded-lg shadow-lg p-6 ${index % 2 === 0 ? "" : ""}`}
          >
            {item.content}
          </motion.div>
        </div>
      ))}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-muted">
        <motion.div className="absolute top-0 left-0 right-0 bg-primary" style={{ height: lineHeight }} />
      </div>
    </div>
  )
}

