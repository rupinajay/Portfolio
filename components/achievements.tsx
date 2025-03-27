"use client"

import { motion } from "framer-motion"
import { Trophy, Brain, Award } from "lucide-react"

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      value: "10+",
      label: "Hackathon Awards",
      description: "Including First Place Wins"
    },
    {
      icon: Brain,
      value: "12+",
      label: "AI Applications",
      description: "Real-world Solutions"
    },
    {
      icon: Award,
      value: "8.3",
      label: "CGPA",
      description: "Academic Excellence"
    }
  ]

  return (
    <section className="py-16 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 sm:mb-4">Impact & Achievements</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            A snapshot of my journey in technology and academics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.label}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-center text-center p-5 sm:p-6 rounded-lg bg-card border border-border/10 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-primary/10 p-3 rounded-lg mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 text-foreground">{achievement.value}</div>
                <div className="font-medium mb-1 text-foreground">{achievement.label}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{achievement.description}</div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-block rounded-lg bg-primary/5 px-4 sm:px-6 py-2 sm:py-3">
            <p className="text-base sm:text-lg font-medium text-primary">
              Continuously learning and building impactful solutions
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 