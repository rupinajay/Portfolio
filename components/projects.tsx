import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "StatIQ",
    description: "Business Intelligence Automation",
    details: [
      "Automates data cleaning, preprocessing, and exploratory analysis",
      "Evaluates potential machine learning algorithms for refined datasets",
      "Uses Llama 3.1 for dynamic Python code generation and error correction",
      "Interactive dashboard using Streamlit, Plotly Express, and Groq API",
    ],
    technologies: ["Python", "Llama 3.1", "Streamlit", "Plotly Express", "Groq API"],
  },
  {
    title: "Real Time Network Intrusion Detection",
    description: "Network Security System",
    details: [
      "Predicts normal or attack network packets using RandomForestClassifier",
      "Web interface for real-time packet analysis",
      "Implemented PCA for dimension reduction",
      "Used GridSearchCV for hyperparameter optimization",
    ],
    technologies: ["Python", "RandomForestClassifier", "PCA", "GridSearchCV"],
  },
  {
    title: "Text to SQL",
    description: "Natural Language to SQL Query Converter",
    details: [
      "Translates natural language queries into SQL statements",
      "Interactive UI for inputting queries and viewing results",
      "Containerized database for easy deployment and testing",
      "Supports complex queries and schema visualization",
    ],
    technologies: ["Python", "React", "TypeScript", "Docker", "NLP", "PostgreSQL"],
  },
  {
    title: "DermAI",
    description: "Dermatology Diagnosis Tool",
    details: [
      "AI-powered dermatology diagnostic tool for skin disease prediction",
      "Uses ResNet50 CNN for accurate image classification",
      "Generates comprehensive diagnostic reports using LLM",
      "Email integration for report delivery via SMTP",
    ],
    technologies: ["Python", "ResNet50", "CNN", "SMTP", "LLM"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="mb-8 text-3xl font-bold tracking-tight">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc space-y-2 mb-4">
                {project.details.map((detail, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

