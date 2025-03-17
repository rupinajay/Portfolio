"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Save } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { getPosts } from "@/lib/blog-data"

export default function EditBlogPost({ params }) {
  const router = useRouter()
  const [post, setPost] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    published: false,
    image: "",
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (params.id === "new") {
      setLoading(false)
      return
    }

    fetchPost(params.id)
  }, [params.id])

  async function fetchPost(id) {
    setLoading(true)
    try {
      // For now, we'll use the static data
      const posts = getPosts()
      const foundPost = posts.find((p) => p.id === id)

      if (foundPost) {
        setPost(foundPost)
      }
    } catch (error) {
      console.error("Error fetching post:", error)
      toast({
        title: "Error",
        description: "Failed to fetch blog post",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setPost((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (checked) => {
    setPost((prev) => ({ ...prev, published: checked }))
  }

  const generateSlug = () => {
    const slug = post.title
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-")

    setPost((prev) => ({ ...prev, slug }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)

    try {
      // In a real implementation, you would save to Supabase
      // if (params.id === "new") {
      //   await supabase.from("posts").insert([post])
      // } else {
      //   await supabase.from("posts").update(post).eq("id", params.id)
      // }

      toast({
        title: "Success",
        description: `Blog post ${params.id === "new" ? "created" : "updated"} successfully`,
      })

      if (params.id === "new") {
        router.push("/admin/blog")
      }
    } catch (error) {
      console.error("Error saving post:", error)
      toast({
        title: "Error",
        description: `Failed to ${params.id === "new" ? "create" : "update"} blog post`,
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return <div className="text-center py-10">Loading post...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.push("/admin/blog")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {params.id === "new" ? "Create Blog Post" : "Edit Blog Post"}
          </h1>
          <p className="text-muted-foreground">
            {params.id === "new" ? "Create a new blog post" : "Edit an existing blog post"}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" value={post.title} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="slug">Slug</Label>
                <Button type="button" variant="outline" size="sm" onClick={generateSlug} disabled={!post.title}>
                  Generate
                </Button>
              </div>
              <Input id="slug" name="slug" value={post.slug} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Featured Image URL</Label>
              <Input
                id="image"
                name="image"
                value={post.image}
                onChange={handleChange}
                placeholder="/placeholder.svg?height=400&width=600"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea id="excerpt" name="excerpt" value={post.excerpt} onChange={handleChange} rows={3} required />
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="published" checked={post.published} onCheckedChange={handleSwitchChange} />
              <Label htmlFor="published">Published</Label>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                value={post.content}
                onChange={handleChange}
                className="min-h-[300px]"
                required
              />
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

