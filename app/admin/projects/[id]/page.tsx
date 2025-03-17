"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Save, Plus, X } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

// Sample projects data
const projectsData = [
  {
    id: "sustain",
    title: "Sustain",
    description: "ESG Analytics with AI-Driven Insights",
    details: [
      "Real-time ESG performance dashboard with sentiment analysis from global news using GDELT database",
      "SustainAI - Analyzes sustainability reports using Retrieval-Augmented Generation (RAG)",
      "Interactive AI chatbot for precise, context-aware queries about sustainability approaches",
      "Provides unbiased ESG insights by separating external sentiment from internal metrics",
    ],
    technologies: ["Python", "Streamlit", "FastAPI", "RAG", "LLM", "Word2Vec", "GDELT"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sustain-FonabAUcMUgzBDQBrxT3jOBgS8uU1B.png",
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
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/StatIQ%20Image-uW9JUvFHWMqi4porTRXObFXqlwMUHU.png",
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
    image: "/placeholder.svg?height=400&width=600",
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
    image: "/placeholder.svg?height=400&width=600",
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
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Text%20to%20Sql%20Image-De6ZlitsYM9Ix69BzwaztFTu252kAY.png",
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
    image: "/placeholder.svg?height=400&width=600",
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
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DermAI%20Image-26M4b98TIlwjYpGW3gU4685RFjzOqB.png",
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
    image: "/placeholder.svg?height=400&width=600",
    links: {
      github: "https://github.com/rupinajay/FinHelp-Financial-Assistant--GEN-AI",
    },
  },
]

export default function EditProject({ params }) {
  const router = useRouter()
  const [project, setProject] = useState({
    id: "",
    title: "",
    description: "",
    details: [""],
    technologies: [""],
    image: "/placeholder.svg?height=400&width=600",
    links: {
      github: "",
    },
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (params.id === "new") {
      setLoading(false)
      return
    }

    fetchProject(params.id)
  }, [params.id])

  async function fetchProject(id) {
    setLoading(true)
    try {
      // For now, we'll use the static data
      const foundProject = projectsData.find((p) => p.id === id)

      if (foundProject) {
        setProject(foundProject)
      }
    } catch (error) {
      console.error("Error fetching project:", error)
      toast({
        title: "Error",
        description: "Failed to fetch project",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setProject((prev) => ({ ...prev, [name]: value }))
  }

  const handleLinkChange = (e) => {
    const { name, value } = e.target
    setProject((prev) => ({
      ...prev,
      links: {
        ...prev.links,
        [name]: value,
      },
    }))
  }

  const handleDetailChange = (index, value) => {
    const newDetails = [...project.details]
    newDetails[index] = value
    setProject((prev) => ({ ...prev, details: newDetails }))
  }

  const addDetail = () => {
    setProject((prev) => ({
      ...prev,
      details: [...prev.details, ""],
    }))
  }

  const removeDetail = (index) => {
    const newDetails = [...project.details]
    newDetails.splice(index, 1)
    setProject((prev) => ({ ...prev, details: newDetails }))
  }

  const handleTechChange = (index, value) => {
    const newTech = [...project.technologies]
    newTech[index] = value
    setProject((prev) => ({ ...prev, technologies: newTech }))
  }

  const addTech = () => {
    setProject((prev) => ({
      ...prev,
      technologies: [...prev.technologies, ""],
    }))
  }

  const removeTech = (index) => {
    const newTech = [...project.technologies]
    newTech.splice(index, 1)
    setProject((prev) => ({ ...prev, technologies: newTech }))
  }

  const generateId = () => {
    const id = project.title
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-")

    setProject((prev) => ({ ...prev, id }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)

    try {
      // In a real implementation, you would save to Supabase
      // if (params.id === "new") {
      //   await supabase.from("projects").insert([project])
      // } else {
      //   await supabase.from("projects").update(project).eq("id", params.id)
      // }

      toast({
        title: "Success",
        description: `Project ${params.id === "new" ? "created" : "updated"} successfully`,
      })

      if (params.id === "new") {
        router.push("/admin/projects")
      }
    } catch (error) {
      console.error("Error saving project:", error)
      toast({
        title: "Error",
        description: `Failed to ${params.id === "new" ? "create" : "update"} project`,
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return <div className="text-center py-10">Loading project...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.push("/admin/projects")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {params.id === "new" ? "Create Project" : "Edit Project"}
          </h1>
          <p className="text-muted-foreground">
            {params.id === "new" ? "Create a new project" : "Edit an existing project"}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" value={project.title} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="id">Project ID</Label>
                <Button type="button" variant="outline" size="sm" onClick={generateId} disabled={!project.title}>
                  Generate
                </Button>
              </div>
              <Input id="id" name="id" value={project.id} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={project.description}
                onChange={handleChange}
                rows={2}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <Input id="image" name="image" value={project.image} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="github">GitHub URL</Label>
              <Input id="github" name="github" value={project.links.github} onChange={handleLinkChange} />
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label>Project Details</Label>
                <Button type="button" variant="outline" size="sm" onClick={addDetail}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Detail
                </Button>
              </div>

              {project.details.map((detail, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={detail}
                    onChange={(e) => handleDetailChange(index, e.target.value)}
                    placeholder={`Detail ${index + 1}`}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeDetail(index)}
                    disabled={project.details.length <= 1}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label>Technologies</Label>
                <Button type="button" variant="outline" size="sm" onClick={addTech}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Technology
                </Button>
              </div>

              {project.technologies.map((tech, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={tech}
                    onChange={(e) => handleTechChange(index, e.target.value)}
                    placeholder={`Technology ${index + 1}`}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeTech(index)}
                    disabled={project.technologies.length <= 1}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit" disabled={saving}>
            <Save className="h-4 w-4 mr-2" />
            {saving ? "Saving..." : "Save"}
          </Button>
        </div>
      </form>

      <Toaster />
    </div>
  )
}

