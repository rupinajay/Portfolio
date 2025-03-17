"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { getPostBySlug } from "@/lib/blog-data"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading to make it feel like data is being fetched
    const timer = setTimeout(() => {
      setPost(getPostBySlug(params.slug))
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [params.slug])

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-12">Loading...</h1>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-12">Post not found</h1>
        <Link href="/blog" className="text-primary hover:underline">
          <ArrowLeft className="inline mr-2 h-4 w-4" />
          Back to blog
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <Link href="/blog" className="text-primary hover:underline mb-8 inline-flex items-center">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to blog
      </Link>

      <div>
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
        </div>

        <div className="prose dark:prose-invert max-w-none">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

