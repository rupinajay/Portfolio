"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ProjectCardProps {
  project: {
    id: string
    title: string
    description: string
    image?: string
    technologies: string[]
    links?: {
      github?: string
    }
  }
  index: number
  showImage?: boolean
}

export function ProjectCard({ project, index, showImage = true }: ProjectCardProps) {
  return (
    <div>
      <Card className="h-full flex flex-col overflow-hidden group">
        {showImage && project.image && (
          <div className="relative overflow-hidden aspect-video">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
            />
          </div>
        )}
        <CardContent className="flex-grow p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-primary/10">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && <Badge variant="outline">+{project.technologies.length - 3}</Badge>}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <div className="flex gap-4 w-full">
            <Button asChild variant="default" className="flex-1">
              <Link href={`/projects#${project.id}`}>
                Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            {project.links?.github && (
              <Button variant="outline" size="icon" asChild>
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
