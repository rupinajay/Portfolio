"use client"

import { ArrowRight, Code, Database, Cpu, Brain, Users, Cog, GraduationCap, Calendar } from "lucide-react"
import { BentoGrid, BentoGridItem } from "@/components/bento-grid"

export default function AboutPage() {
  const skills = [
    {
      title: "Programming Languages",
      description: "Python, Java, SQL",
      icon: Code,
    },
    {
      title: "AI & ML",
      description: "Generative AI, RAGs, LLM, Classification & Regression Models, Deep Learning, NLP",
      icon: Brain,
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
      icon: GraduationCap,
      highlights: [
        "Focused on AI and Data Engineering coursework",
        "Active member of the university's tech club",
        "Working on multiple research projects"
      ]
    },
    {
      school: "Sri Chaitanya Techno School",
      degree: "Senior Secondary School Education",
      period: "July 2020 – March 2022",
      grade: "Grade: 88.2% | 441/500",
      icon: Calendar,
      highlights: [
        "Class representative",
        "Participated in national-level coding competitions",
        "Received academic excellence award"
      ]
    },
  ]

  return (
    <div className="max-w-6xl mx-auto py-24 px-4 relative">
      
      {/* Header Section */}
      <section className="mb-24">
        <h1 className="text-6xl font-bold text-foreground tracking-tight mb-6">
          About Me
        </h1>
        <div className="w-16 h-1 bg-primary mb-12"></div>

        <div className="max-w-3xl">
          <div className="prose prose-lg">
            <p className="text-foreground/90 text-lg mb-6">
              As a Computer Science student at Shiv Nadar University Chennai, I've embarked on an exciting journey into
              the world of AI and Data Engineering. My passion lies in solving complex problems and creating impactful
              solutions that push the boundaries of technology.
            </p>
            <p className="text-foreground/90 text-lg mb-6">
              Currently, I'm focused on developing AI-driven applications that make data more accessible and actionable.
              From building intelligent automation systems to creating sophisticated data pipelines, I'm constantly
              seeking new challenges and opportunities to grow.
            </p>
            <p className="text-foreground/90 text-lg mb-6">
              When I'm not coding, you'll find me exploring the latest developments in AI, contributing to open-source
              projects, or brainstorming innovative ideas that could shape the future of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Education Timeline Section */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-foreground mb-12">Education Journey</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-1 bg-border/30 hidden md:block"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <div key={edu.school} className="md:flex gap-8 group">
                  {/* Timeline dot and line */}
                  <div className="hidden md:block relative">
                    <div className="w-10 h-10 rounded-full bg-background border-4 border-primary/30 group-hover:border-primary transition-colors duration-300 z-10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  
                  <div className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-border/10 md:ml-6 flex-1">
                    <div className="md:flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold mb-1 text-foreground">{edu.school}</h3>
                        <p className="text-primary font-medium">{edu.degree}</p>
                      </div>
                      <div className="mt-2 md:mt-0 px-3 py-1 bg-primary/5 text-primary/80 rounded-full text-sm inline-block">
                        {edu.period}
                      </div>
                    </div>
                    
                    <div className="w-full h-px bg-border/30 my-4"></div>
                    
                    <div className="md:flex justify-between">
                      <ul className="space-y-2 mb-4 md:mb-0">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span className="text-foreground/80 text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="font-medium text-sm px-4 py-2 bg-primary/5 rounded-lg text-foreground/80 h-fit">
                        {edu.grade}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-foreground mb-12">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index} 
                className="bg-card rounded-xl shadow-sm border border-border/10 overflow-hidden group hover:shadow-md transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{skill.title}</h3>
                  </div>
                  <p className="text-foreground/80">{skill.description}</p>
                </div>
                <div className="h-1 w-full bg-border/30"></div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  )
}

