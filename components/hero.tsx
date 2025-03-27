"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BackgroundBeamsFast } from "@/components/ui/background-beams-fast"

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center py-12 sm:py-20 text-center overflow-hidden px-4">
      <BackgroundBeamsFast />
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-32 h-32 sm:w-40 sm:h-40 mb-6 sm:mb-8 relative z-10"
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rupin-41Fe7CrY6XyWLxmLJjaecXn7Ct7xoL.png"
          alt="Rupin Ajay"
          className="w-full h-full object-contain"
        />
      </motion.div>
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-3 sm:mb-4 relative z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Rupin Ajay
      </motion.h1>
      <motion.p
        className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4 relative z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Software Engineer & AI Developer
      </motion.p>
      <motion.p
        className="max-w-[900px] text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 relative z-10 px-2"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Third-year B.Tech CSE student at Shiv Nadar University. My jam? AI/ML, automation, and building software that's
        both powerful and pretty. Always hunting for real-world problems ripe for smart solutions. Hackathons are my
        happy place – coding playgrounds where I learn, experiment, and unleash my inner geek. Creative, driven, and
        maybe a little obsessed with making the world a more efficient place through code? That's me. Let's connect!
      </motion.p>
      <motion.div
        className="flex flex-wrap justify-center gap-3 relative z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Button className="min-w-[120px]" asChild>
          <a href="mailto:rupinajay@gmail.com">
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </a>
        </Button>
        <Button className="min-w-[120px]" variant="outline" asChild>
          <a href="https://github.com/rupinajay" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>
        <Button className="min-w-[120px]" variant="outline" asChild>
          <a href="https://linkedin.com/rupinajay" target="_blank" rel="noopener noreferrer">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </a>
        </Button>
      </motion.div>
    </section>
  )
}
