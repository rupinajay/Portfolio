"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getPosts } from "@/lib/blog-data"

export default function BlogPage() {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading to make it feel like data is being fetched
    const timer = setTimeout(() => {
      const allPosts = getPosts()
      setPosts(allPosts)
      setFilteredPosts(allPosts)
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredPosts(posts)
    } else {
      const filtered = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setFilteredPosts(filtered)
    }
  }, [searchQuery, posts])

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-12">Blog</h1>
        <p>Loading posts...</p>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Blog
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Thoughts, insights, and perspectives on AI, data engineering, and technology.
        </p>
        <div className="max-w-md mx-auto relative">
          <Input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="group flex flex-col h-full bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 p-6"
          >
            <Link href={`/blog/${post.slug}`}>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
            </Link>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>
                  {new Date(post.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-primary font-medium hover:underline group/link"
            >
              Read more
              <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg mb-4">No posts found matching "{searchQuery}"</p>
          <Button variant="outline" onClick={() => setSearchQuery("")}>
            Clear search
          </Button>
        </div>
      )}
    </div>
  )
}

