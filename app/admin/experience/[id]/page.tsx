"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Save } from "lucide-react"
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

export default function EditExperience({ params }) {
  const router = useRouter()
  const [experience, setExperience] = useState({
    id: "",
    title: "",
    date: "",
    content: "",
    order: 0,
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (params.id === "new") {
      // For a new experience, set the order to the next available number
      setExperience((prev) => ({
        ...prev,
        order: experienceData.length + 1,
      }))
      setLoading(false)
      return
    }

    fetchExperience(params.id)
  }, [params.id])

  async function fetchExperience(id) {
    setLoading(true)
    try {
      // For now, we'll use the static data
      const foundExperience = experienceData.find((exp) => exp.id === id)

      if (foundExperience) {
        setExperience(foundExperience)
      }
    } catch (error) {
      console.error("Error fetching experience:", error)
      toast({
        title: "Error",
        description: "Failed to fetch experience",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setExperience((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)

    try {
      // In a real implementation, you would save to Supabase
      // if (params.id === "new") {
      //   await supabase.from("experiences").insert([experience])
      // } else {
      //   await supabase.from("experiences").update(experience).eq("id", params.id)
      // }

      toast({
        title: "Success",
        description: `Experience ${params.id === "new" ? "created" : "updated"} successfully`,
      })

      if (params.id === "new") {
        router.push("/admin/experience")
      }
    } catch (error) {
      console.error("Error saving experience:", error)
      toast({
        title: "Error",
        description: `Failed to ${params.id === "new" ? "create" : "update"} experience`,
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return <div className="text-center py-10">Loading experience...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.push("/admin/experience")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {params.id === "new" ? "Add Experience" : "Edit Experience"}
          </h1>
          <p className="text-muted-foreground">
            {params.id === "new" ? "Add a new experience entry" : "Edit an existing experience entry"}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={experience.title}
              onChange={handleChange}
              placeholder="e.g. Software Engineer at Company"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Date Range</Label>
            <Input
              id="date"
              name="date"
              value={experience.date}
              onChange={handleChange}
              placeholder="e.g. Jan 2023 - Present"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Description</Label>
            <Textarea
              id="content"
              name="content"
              value={experience.content}
              onChange={handleChange}
              rows={5}
              placeholder="Describe your responsibilities and achievements"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="order">Order</Label>
            <Input id="order" name="order" type="number" value={experience.order} onChange={handleChange} required />
            <p className="text-xs text-muted-foreground">Lower numbers appear first in the timeline</p>
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

