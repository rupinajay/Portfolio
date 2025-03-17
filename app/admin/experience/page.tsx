"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
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
import { Plus, Pencil, Trash, ArrowUp, ArrowDown } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

// Sample experience data
const experienceData = [
  {
    id: "1",
    title: "AI Engineer at Zyngate",
    date: "Jan 2025 – Feb 2025",
    content:
      "Designed and implemented an AI that scrapes jobs based on user preference and profile and then applies to jobs along with auto filling of forms on LinkedIn portal itself. Scaled the architecture to support multiple users and for reduced costs when deployed on cloud (AWS) by 40%.",
    order: 1,
  },
  {
    id: "2",
    title: "AI Developer at IPR Law Firm",
    date: "Sep 2024 – Present",
    content:
      "Developing a Retrieval-Augmented Generation (RAG) system, in consultation with CIO - CTO of an IPR Law Firm, to help lawyers quickly access relevant legal information, enhancing efficiency. Enabled Vector & SQL based search.",
    order: 2,
  },
  {
    id: "3",
    title: "Data Engineer Intern at Glencore International AG",
    date: "May 2024 – July 2024",
    content:
      "Replaced an inefficient VBA-based system with an automated pipeline to update daily pricing for over 1,000 oil products globally, ensuring accurate and timely financial data for real-time reporting. Reduced processing time from 30 minutes to seconds using advanced algorithms, increasing efficiency by 92%.",
    order: 3,
  },
]

export default function ExperiencePage() {
  const [experiences, setExperiences] = useState([])
  const [loading, setLoading] = useState(true)
  const [deleteExperienceId, setDeleteExperienceId] = useState(null)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  useEffect(() => {
    fetchExperiences()
  }, [])

  async function fetchExperiences() {
    setLoading(true)
    try {
      // For now, we'll use the static data
      setExperiences(experienceData)
    } catch (error) {
      console.error("Error fetching experiences:", error)
      toast({
        title: "Error",
        description: "Failed to fetch experiences",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteClick = (id) => {
    setDeleteExperienceId(id)
    setShowDeleteDialog(true)
  }

  const confirmDelete = async () => {
    try {
      // In a real implementation, you would delete from Supabase
      // await supabase.from("experiences").delete().eq("id", deleteExperienceId)

      // For now, we'll just filter out the deleted experience
      setExperiences(experiences.filter((exp) => exp.id !== deleteExperienceId))

      toast({
        title: "Success",
        description: "Experience deleted successfully",
      })
    } catch (error) {
      console.error("Error deleting experience:", error)
      toast({
        title: "Error",
        description: "Failed to delete experience",
        variant: "destructive",
      })
    } finally {
      setShowDeleteDialog(false)
      setDeleteExperienceId(null)
    }
  }

  const moveExperience = (id, direction) => {
    const index = experiences.findIndex((exp) => exp.id === id)
    if ((direction === "up" && index === 0) || (direction === "down" && index === experiences.length - 1)) {
      return
    }

    const newExperiences = [...experiences]
    const targetIndex = direction === "up" ? index - 1 : index + 1

    // Swap the experiences
    const temp = newExperiences[index]
    newExperiences[index] = newExperiences[targetIndex]
    newExperiences[targetIndex] = temp

    // Update the order
    newExperiences.forEach((exp, i) => {
      exp.order = i + 1
    })

    setExperiences(newExperiences)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Experience</h1>
          <p className="text-muted-foreground">Manage your work experience</p>
        </div>
        <Button asChild>
          <Link href="/admin/experience/new">
            <Plus className="h-4 w-4 mr-2" />
            Add Experience
          </Link>
        </Button>
      </div>

      {loading ? (
        <div className="text-center py-10">Loading experiences...</div>
      ) : (
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="w-[200px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {experiences.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-10">
                    No experiences found
                  </TableCell>
                </TableRow>
              ) : (
                experiences.map((experience, index) => (
                  <TableRow key={experience.id}>
                    <TableCell>{experience.order}</TableCell>
                    <TableCell className="font-medium">{experience.title}</TableCell>
                    <TableCell>{experience.date}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => moveExperience(experience.id, "up")}
                          disabled={index === 0}
                        >
                          <ArrowUp className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => moveExperience(experience.id, "down")}
                          disabled={index === experiences.length - 1}
                        >
                          <ArrowDown className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                          <Link href={`/admin/experience/${experience.id}`}>
                            <Pencil className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleDeleteClick(experience.id)}
                          className="text-red-600"
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
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
              This action cannot be undone. This will permanently delete the experience entry.
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
