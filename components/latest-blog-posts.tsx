"use client"

import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getPosts } from "@/lib/blog-data"

export function LatestBlogPosts() {
  const posts = getPosts().slice(0, 3) // Get only the 3 most recent posts

  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Latest Blog Posts
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Thoughts, insights, and perspectives on AI, data engineering, and technology.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-4">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group flex flex-col h-full bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="p-6 flex-grow flex flex-col">
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
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
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button asChild size="lg" className="mt-8">
          <Link href="/blog" className="inline-flex items-center">
            View All Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

