import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { FeaturedProjects } from "@/components/featured-projects"
import { LatestBlogPosts } from "@/components/latest-blog-posts"
import { Achievements } from "@/components/achievements"

export default function Home() {
  return (
    <div className="space-y-16 sm:space-y-24">
      <Hero />
      <FeaturedProjects />
      <Experience />
      <LatestBlogPosts />
      <Achievements />
    </div>
  )
}

