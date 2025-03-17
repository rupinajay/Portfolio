"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, Cpu, Brain, Zap, Code, BarChart, Users, Briefcase, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BackgroundBeams } from "@/components/ui/background-beams"

const projects = [
  {
    id: "sustain",
    title: "Sustain",
    description: "Revolutionizing ESG Analytics with AI-Driven Insights",
    details: [
      "Real-time ESG performance dashboard with sentiment analysis from global news using GDELT database",
      "SustainAI - Analyzes sustainability reports using Retrieval-Augmented Generation (RAG)",
      "Interactive AI chatbot for precise, context-aware queries about sustainability approaches",
      "Provides unbiased ESG insights by separating external sentiment from internal metrics",
    ],
    technologies: ["Python", "Streamlit", "FastAPI", "RAG", "LLM", "Word2Vec", "GDELT"],
    icon: Leaf,
    links: {
      github: "https://github.com/rupinajay/Sustain-2.0",
    },
  },
  {
    id: "statiq",
    title: "StatIQ",
    description: "Business Intelligence Automation",
    details: [
      "Automates data cleaning, preprocessing, and exploratory analysis",
      "Evaluates potential machine learning algorithms for refined datasets",
      "Uses Llama 3.1 for dynamic Python code generation and error correction",
      "Interactive dashboard using Streamlit, Plotly Express, and Groq API",
    ],
    technologies: ["Python", "Llama 3.1", "Streamlit", "Plotly Express", "Groq API"],
    icon: Brain,
    links: {
      github: "https://github.com/rupinajay/Stat-IQ",
    },
  },
  {
    id: "linkedin-autoapplier",
    title: "LinkedIn Autoapplier",
    description: "AI-Powered Job Application Automation",
    details: [
      "Scrapes job listings from LinkedIn based on user preferences and qualifications",
      "Filters opportunities using AI to match user profile and requirements",
      "Automatically applies to suitable positions with customized cover letters",
      "Streamlines the job application process, saving time and increasing efficiency",
    ],
    technologies: ["Python", "Selenium", "NLP", "Web Scraping", "AI"],
    icon: Briefcase,
    links: {
      github: "https://github.com/rupinajay/Job-scraper-autoapplier",
    },
  },
  {
    id: "network-ids",
    title: "Real Time Network Intrusion Detection",
    description: "Network Security System",
    details: [
      "Predicts normal or attack network packets using RandomForestClassifier",
      "Web interface for real-time packet analysis",
      "Implemented PCA for dimension reduction",
      "Used GridSearchCV for hyperparameter optimization",
    ],
    technologies: ["Python", "RandomForestClassifier", "PCA", "GridSearchCV"],
    icon: Cpu,
    links: {
      github: "https://github.com/rupinajay/Network-Attack-Prediction--RandomForestClassifier",
    },
  },
  {
    id: "text-to-sql",
    title: "Text to SQL",
    description: "Natural Language to SQL Query Converter",
    details: [
      "Translates natural language queries into SQL statements",
      "Interactive UI for inputting queries and viewing results",
      "Containerized database for easy deployment and testing",
      "Supports complex queries and schema visualization",
    ],
    technologies: ["Python", "React", "TypeScript", "Docker", "NLP", "PostgreSQL"],
    icon: Code,
    links: {
      github: "https://github.com/rupinajay/text_2_sql",
    },
  },
  {
    id: "employee-attrition",
    title: "Employee Attrition Analysis",
    description: "Predictive HR Analytics",
    details: [
      "Analyzed employee data to understand and predict factors leading to attrition",
      "Prepared and cleaned data by transforming categorical variables for machine learning",
      "Addressed class imbalance to ensure effective model training",
      "Created a foundation for predictive modeling to identify at-risk employees",
    ],
    technologies: ["Python", "Pandas", "Scikit-learn", "Data Visualization", "Statistical Analysis"],
    icon: Users,
    links: {
      github: "https://github.com/rupinajay/HR-Attrition-Analysis",
    },
  },
  {
    id: "dermai",
    title: "DermAI",
    description: "Dermatology Diagnosis Tool",
    details: [
      "AI-powered dermatology diagnostic tool for skin disease prediction",
      "Uses ResNet50 CNN for accurate image classification",
      "Generates comprehensive diagnostic reports using LLM",
      "Email integration for report delivery via SMTP",
    ],
    technologies: ["Python", "ResNet50", "CNN", "SMTP", "LLM"],
    icon: Zap,
    links: {
      github: "https://github.com/rupinajay/DERM-AI",
    },
  },
  {
    id: "ai-financial-assistant",
    title: "AI Financial Assistant",
    description: "Finance Management Tool",
    details: [
      "Intelligent financial assistant for personal finance management",
      "Analyzes spending patterns and provides budget recommendations",
      "Extracts data from receipts and financial documents using OCR",
      "Visualizes financial data with interactive charts and reports",
    ],
    technologies: ["Python", "OCR", "LLM", "Plotly-Express"],
    icon: BarChart,
    links: {
      github: "https://github.com/rupinajay/FinHelp-Financial-Assistant--GEN-AI",
    },
  },
]

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 relative">
      <BackgroundBeams className="opacity-20" />
      <div className="relative z-10">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of AI and data engineering projects. Each project showcases my skills in developing
            innovative solutions to real-world problems.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => {
            const Icon = project.icon

            return (
              <div key={project.id} id={project.id} className="relative">
                <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    {Icon && <Icon className="h-6 w-6 text-primary" />}
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  <ul className="space-y-2 mb-6">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>

                {index < projects.length - 1 && (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-[-4rem]">
                    <div className="h-16 w-px bg-border"></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-24 text-center">
          <p className="text-lg mb-6">Interested in working together?</p>
          <Button size="lg" asChild>
            <a href="/contact" className="inline-flex items-center text-lg font-semibold">
              Get in touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

