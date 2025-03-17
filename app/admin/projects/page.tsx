"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Plus, MoreHorizontal, Pencil, Trash, Eye } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

// Sample projects data
const projectsData = [
  {
    id: "sustain",
    title: "Sustain",
    description: "ESG Analytics with AI-Driven Insights",
    technologies: ["Python", "Streamlit", "RAG", "LLM", "GDELT"],
  },
  {
    id: "statiq",
    title: "StatIQ",
    description: "Business Intelligence Automation",
    technologies: ["Python", "Llama 3.1", "Streamlit", "Plotly Express", "Groq API"],
  },
  {
    id: "linkedin-autoapplier",
    title: "LinkedIn Autoapplier",
    description: "AI-Powered Job Application Automation",
    technologies: ["Python", "Selenium", "NLP", "Web Scraping", "AI"],
  },
  {
    id: "network-ids",
    title: "Real Time Network Intrusion Detection",
    description: "Network Security System",
    technologies: ["Python", "RandomForestClassifier", "PCA", "GridSearchCV"],
  },
  {
    id: "text-to-sql",
    title: "Text to SQL",
    description: "Natural Language to SQL Query Converter",
    technologies: ["Python", "React", "TypeScript", "Docker", "NLP", "PostgreSQL"],
  },
  {
    id: "employee-attrition",
    title: "Employee Attrition Analysis",
    description: "Predictive HR Analytics",
    technologies: ["Python", "Pandas", "Scikit-learn", "Data Visualization"],
  },
  {
    id: "dermai",
    title: "DermAI",
    description: "Dermatology Diagnosis Tool",
    technologies: ["Python", "ResNet50", "CNN", "SMTP", "LLM"],
  },
  {
    id: "ai-financial-assistant",
    title: "AI Financial Assistant",
    description: "Finance Management Tool",
    technologies: ["Python", "OCR", "LLM", "Plotly-Express"],
  },
]

export default function ProjectsPage() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [deleteProjectId, setDeleteProjectId] = useState(null)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  useEffect(() => {
    fetchProjects()
  }, [])

  async function fetchProjects() {
    setLoading(true)
    try {
      // For now, we'll use the static data
      setProjects(projectsData)
    } catch (error) {
      console.error("Error fetching projects:", error)
      toast({
        title: "Error",
        description: "Failed to fetch projects",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const handleDeleteClick = (id) => {
    setDeleteProjectId(id)
    setShowDeleteDialog(true)
  }

  const confirmDelete = async () => {
    try {
      // In a real implementation, you would delete from Supabase
      // await supabase.from("projects").delete().eq("id", deleteProjectId)

      // For now, we'll just filter out the deleted project
      setProjects(projects.filter((project) => project.id !== deleteProjectId))

      toast({
        title: "Success",
        description: "Project deleted successfully",
      })
    } catch (error) {
      console.error("Error deleting project:", error)
      toast({
        title: "Error",
        description: "Failed to delete project",
        variant: "destructive",
      })
    } finally {
      setShowDeleteDialog(false)
      setDeleteProjectId(null)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">Manage your portfolio projects</p>
        </div>
        <Button asChild>
          <Link href="/admin/projects/new">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Link>
        </Button>
      </div>

      <div className="flex items-center">
        <Input
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
      </div>

      {loading ? (
        <div className="text-center py-10">Loading projects...</div>
      ) : (
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Technologies</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProjects.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-10">
                    No projects found
                  </TableCell>
                </TableRow>
              ) : (
                filteredProjects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell className="font-medium">{project.title}</TableCell>
                    <TableCell>{project.description}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-primary/10 rounded-full text-xs">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-muted rounded-full text-xs">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/projects#${project.id}`} target="_blank">
                              <Eye className="h-4 w-4 mr-2" />
                              View
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/admin/projects/${project.id}`}>
                              <Pencil className="h-4 w-4 mr-2" />
                              Edit
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDeleteClick(project.id)} className="text-red-600">
                            <Trash className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      )}

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the project.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-red-600">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Toaster />
    </div>
  )
}

