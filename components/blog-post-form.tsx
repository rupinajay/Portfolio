"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function BlogPostForm({ onSubmit, initialData = {} }) {
  const [title, setTitle] = useState(initialData.title || "")
  const [content, setContent] = useState(initialData.content || "")
  const [excerpt, setExcerpt] = useState(initialData.excerpt || "")

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ title, content, excerpt })
    setTitle("")
    setContent("")
    setExcerpt("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
      <Input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <Textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required />
      <Textarea placeholder="Excerpt" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} required />
      <Button type="submit">{initialData.id ? "Update Post" : "Create Post"}</Button>
    </form>
  )
}

