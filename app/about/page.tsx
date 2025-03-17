"use client"

import { ArrowRight, Code, Database, Cpu, Brain, Users, Cog, GraduationCap } from "lucide-react"
import { BentoGrid, BentoGridItem } from "@/components/bento-grid"

export default function AboutPage() {
  const skills = [
    {
      title: "Programming Languages",
      description: "Python, Java, SQL",
      icon: Code,
    },
    {
      title: "Databases",
      description: "MySQL, MongoDB, PostgreSQL, PineconeDB, Qdrant, MilvusDB",
      icon: Database,
    },
    {
      title: "Tools & Technologies",
      description: "PowerBI, Git, GitHub, JIRA, Docker, HuggingFace, Unix Scripting",
      icon: Cog,
    },
    {
      title: "AI & ML",
      description: "Generative AI, RAGs, LLM, Classification & Regression Models, Deep Learning, NLP",
      icon: Brain,
    },
    {
      title: "Data Engineering",
      description: "Data pipelines, ETL processes, Big Data technologies",
      icon: Cpu,
    },
    {
      title: "Soft Skills",
      description: "Leadership, Communication, Collaboration, Problem-solving, Adaptability, Project Management",
      icon: Users,
    },
  ]

  const education = [
    {
      school: "Shiv Nadar University Chennai",
      degree: "B.Tech Computer Science and Engineering",
      period: "Aug 2022 – April 2026",
      grade: "GPA: 8.3/10",
    },
    {
      school: "Sri Chaitanya Techno School",
      degree: "Senior Secondary School Education",
      period: "July 2020 – March 2022",
      grade: "Grade: 88.2% | 441/500",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
        About Me
      </h1>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-primary">My Journey</h2>
        <div className="prose dark:prose-invert max-w-none text-lg">
          <p>
            As a Computer Science student at Shiv Nadar University Chennai, I've embarked on an exciting journey into
            the world of AI and Data Engineering. My passion lies in solving complex problems and creating impactful
            solutions that push the boundaries of technology.
          </p>
          <p>
            Currently, I'm focused on developing AI-driven applications that make data more accessible and actionable.
            From building intelligent automation systems to creating sophisticated data pipelines, I'm constantly
            seeking new challenges and opportunities to grow.
          </p>
          <p>
            When I'm not coding, you'll find me exploring the latest developments in AI, contributing to open-source
            projects, or brainstorming innovative ideas that could shape the future of technology.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-primary">Education</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <GraduationCap className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{edu.school}</h3>
              <p className="text-primary font-medium">{edu.degree}</p>
              <p className="text-sm text-muted-foreground">{edu.period}</p>
              <p className="text-sm font-medium mt-2">{edu.grade}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-primary">Skills & Expertise</h2>
        <BentoGrid>
          {skills.map((skill, index) => (
            <BentoGridItem key={index} title={skill.title} description={skill.description} icon={skill.icon} />
          ))}
        </BentoGrid>
      </div>

      <div className="text-center">
        <a href="/projects" className="inline-flex items-center text-lg font-semibold text-primary hover:underline">
          Check out my projects
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  )
}

