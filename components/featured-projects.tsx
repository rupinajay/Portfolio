"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { BackgroundBeams } from "@/components/ui/background-beams"

const projects = [
  {
    id: "sustain",
    title: "Sustain",
    description: "Revolutionizing ESG Analytics with AI-Driven Insights for data-driven sustainability decisions.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sustain-FonabAUcMUgzBDQBrxT3jOBgS8uU1B.png",
    technologies: ["Python", "Streamlit", "RAG", "LLM", "GDELT"],
    links: {
      github: "https://github.com/rupinajay/Sustain-2.0",
    },
  },
  {
    id: "statiq",
    title: "StatIQ",
    description: "AI-driven business intelligence automation platform that streamlines data analysis workflows.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/StatIQ%20Image-uW9JUvFHWMqi4porTRXObFXqlwMUHU.png",
    technologies: ["Python", "Llama 3.1", "Streamlit", "Plotly Express"],
    links: {
      github: "https://github.com/rupinajay/Stat-IQ",
    },
  },
  {
    id: "text-to-sql",
    title: "Text to SQL",
    description:
      "Natural language to SQL query converter that simplifies database interactions for non-technical users.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Text%20to%20Sql%20Image-De6ZlitsYM9Ix69BzwaztFTu252kAY.png",
    technologies: ["Python", "NLP", "React", "Docker"],
    links: {
      github: "https://github.com/rupinajay/text_2_sql",
    },
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-20 relative">
      <BackgroundBeams className="opacity-20" />
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work in AI and data engineering. These projects showcase my skills in developing
            innovative solutions to real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} showImage={true} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

