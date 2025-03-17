"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Save, Plus, X } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function AboutPage() {
  const [bio, setBio] = useState(
    "As a Computer Science student at Shiv Nadar University Chennai, I've embarked on an exciting journey into the world of AI and Data Engineering. My passion lies in solving complex problems and creating impactful solutions that push the boundaries of technology.",
  )
  const [skills, setSkills] = useState({
    Languages: ["Python", "Java", "SQL"],
    Databases: ["MySQL", "MongoDB", "PostgreSQL", "PineconeDB", "Qdrant", "MilvusDB"],
    "Tools & Technologies": ["PowerBI", "Git", "GitHub", "JIRA", "Docker", "HuggingFace", "Unix Scripting"],
    "AI & ML": ["Generative AI", "RAGs", "LLM", "Classification & Regression Models", "Deep Learning", "NLP"],
    "Soft Skills": [
      "Leadership",
      "Communication",
      "Collaboration",
      "Problem-solving",
      "Adaptability",
      "Project Management",
    ],
  })
  const [education, setEducation] = useState([
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
  ])
  const [saving, setSaving] = useState(false)
  const [editingCategory, setEditingCategory] = useState("")
  const [newCategory, setNewCategory] = useState("")
  const [newSkill, setNewSkill] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  const handleSave = async () => {
    setSaving(true)

    try {
      // In a real implementation, you would save to Supabase
      // await supabase.from("about").update({
      //   bio,
      //   skills,
      //   education
      // }).eq("id", "1")

      toast({
        title: "Success",
        description: "About information saved successfully",
      })
    } catch (error) {
      console.error("Error saving about info:", error)
      toast({
        title: "Error",
        description: "Failed to save about information",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  const addCategory = () => {
    if (newCategory.trim() === "") return

    setSkills((prev) => ({
      ...prev,
      [newCategory]: [],
    }))

    setNewCategory("")
  }

  const removeCategory = (category) => {
    setSkills((prev) => {
      const newSkills = { ...prev }
      delete newSkills[category]
      return newSkills
    })
  }

  const addSkill = () => {
    if (newSkill.trim() === "" || selectedCategory === "") return

    setSkills((prev) => ({
      ...prev,
      [selectedCategory]: [...prev[selectedCategory], newSkill],
    }))

    setNewSkill("")
  }

  const removeSkill = (category, index) => {
    setSkills((prev) => ({
      ...prev,
      [category]: prev[category].filter((_, i) => i !== index),
    }))
  }

  const addEducation = () => {
    setEducation((prev) => [
      ...prev,
      {
        school: "",
        degree: "",
        period: "",
        grade: "",
      },
    ])
  }

  const updateEducation = (index, field, value) => {
    setEducation((prev) => {
      const newEducation = [...prev]
      newEducation[index] = {
        ...newEducation[index],
        [field]: value,
      }
      return newEducation
    })
  }

  const removeEducation = (index) => {
    setEducation((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground">Update your personal information</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Bio</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={5}
              placeholder="Write a short bio about yourself"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input placeholder="New category" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
              <Button onClick={addCategory}>Add Category</Button>
            </div>

            <div className="grid gap-4">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="border rounded-md p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{category}</h3>
                    <Button variant="ghost" size="icon" onClick={() => removeCategory(category)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {skillList.map((skill, index) => (
                      <div key={index} className="bg-primary/10 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                        {skill}
                        <button
                          onClick={() => removeSkill(category, index)}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Input
                      placeholder={`Add skill to ${category}`}
                      value={selectedCategory === category ? newSkill : ""}
                      onChange={(e) => {
                        setSelectedCategory(category)
                        setNewSkill(e.target.value)
                      }}
                      onFocus={() => setSelectedCategory(category)}
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedCategory(category)
                        addSkill()
                      }}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Education</CardTitle>
            <Button onClick={addEducation}>
              <Plus className="h-4 w-4 mr-2" />
              Add Education
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="border rounded-md p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Education #{index + 1}</h3>
                  <Button variant="ghost" size="icon" onClick={() => removeEducation(index)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor={`school-${index}`}>School/University</Label>
                    <Input
                      id={`school-${index}`}
                      value={edu.school}
                      onChange={(e) => updateEducation(index, "school", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`degree-${index}`}>Degree</Label>
                    <Input
                      id={`degree-${index}`}
                      value={edu.degree}
                      onChange={(e) => updateEducation(index, "degree", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`period-${index}`}>Period</Label>
                    <Input
                      id={`period-${index}`}
                      value={edu.period}
                      onChange={(e) => updateEducation(index, "period", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`grade-${index}`}>Grade</Label>
                    <Input
                      id={`grade-${index}`}
                      value={edu.grade}
                      onChange={(e) => updateEducation(index, "grade", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
        <Button onClick={handleSave} disabled={saving}>
          <Save className="h-4 w-4 mr-2" />
          {saving ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      <Toaster />
    </div>
  )
}

