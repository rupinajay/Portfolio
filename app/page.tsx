import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { FeaturedProjects } from "@/components/featured-projects"
import { LatestBlogPosts } from "@/components/latest-blog-posts"

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <Experience />
      <FeaturedProjects />
      <LatestBlogPosts />
    </div>
  )
}

