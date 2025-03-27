"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, Search, Filter, Book, Code, Brain, Cpu, BarChart, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getPosts } from "@/lib/blog-data"
import Image from "next/image"

// Collection of blog images for placeholder
const blogImages = [
  {
    alt: "AI data visualization",
    src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1920&auto=format&fit=crop",
  },
  {
    alt: "Data science concept",
    src: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1920&auto=format&fit=crop",
  },
  {
    alt: "Machine learning algorithms",
    src: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1920&auto=format&fit=crop",
  },
  {
    alt: "Programming code",
    src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1920&auto=format&fit=crop",
  },
  {
    alt: "Network connections",
    src: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1920&auto=format&fit=crop",
  },
  {
    alt: "AI concept",
    src: "https://images.unsplash.com/photo-1677442135796-ff760635bd8f?q=80&w=1920&auto=format&fit=crop",
  }
]

const categoryIcons = {
  "AI": Brain,
  "Data Engineering": Cpu,
  "Technology": Code,
  "Machine Learning": Brain,
  "Analytics": BarChart,
  "Programming": Code,
  "default": Layers
}

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

  // Function to get a deterministic but seemingly random image for each post
  const getImageForPost = (post) => {
    // Use the post ID as a seed to select an image deterministically
    const index = post.id.charCodeAt(0) % blogImages.length
    return blogImages[index]
  }

  // Function to get an icon for a post category
  const getIconForCategory = (category) => {
    const defaultCategory = "default"
    return categoryIcons[category] || categoryIcons[defaultCategory]
  }

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto py-24 px-4">
        <div className="animate-pulse">
          <div className="h-12 w-48 bg-primary/5 rounded mb-12"></div>
          <div className="h-6 w-3/4 bg-primary/5 rounded mb-4"></div>
          <div className="h-6 w-1/2 bg-primary/5 rounded mb-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-primary/5 rounded-lg h-64 w-full"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto py-24 px-4">
      <div className="mb-20">
        <h1 className="text-6xl font-bold text-foreground tracking-tight mb-6">
          Journal
        </h1>
        <div className="w-16 h-1 bg-primary mb-12"></div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <p className="text-lg text-foreground/90 max-w-2xl">
            Thoughts and insights on AI, machine learning, and data engineering — exploring ideas that shape technology's future.
          </p>
          
          <div className="relative w-full md:w-80">
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-border/20 focus-visible:ring-primary"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => {
            const postImage = getImageForPost(post)
            const CategoryIcon = getIconForCategory(post.category)
            
            return (
              <article
                key={post.id}
                className="group"
              >
                <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  <Link href={`/blog/${post.slug}`} className="relative block overflow-hidden h-48">
                    <div className="h-48 w-full relative overflow-hidden">
                      <Image 
                        src={postImage.src}
                        alt={postImage.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      
                      <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-full p-2">
                        <CategoryIcon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </Link>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-xs font-medium px-2 py-1 bg-primary/5 text-primary rounded-full">
                        {post.category || "Technology"}
                      </span>
                      
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <Link href={`/blog/${post.slug}`} className="group-hover:text-primary transition-colors">
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{post.title}</h3>
                    </Link>

                    <p className="text-foreground/80 text-sm mb-4 flex-grow">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/10">
                      <div className="text-xs text-muted-foreground">
                        <time dateTime={post.created_at}>
                          {new Date(post.created_at).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                      
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm font-medium text-primary group-hover:text-primary/80 transition-colors flex items-center gap-1"
                      >
                        Read
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      ) : (
        <div className="bg-card rounded-lg p-10 border border-border/10 text-center">
          <h3 className="text-lg font-medium mb-2">No results found</h3>
          <p className="text-muted-foreground mb-6">No posts matched your search for "{searchQuery}".</p>
          <Button variant="outline" onClick={() => setSearchQuery("")}>
            Clear search
          </Button>
        </div>
      )}
    </div>
  )
}

