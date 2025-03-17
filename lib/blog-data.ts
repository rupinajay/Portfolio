// Static blog data to use instead of Supabase
export const blogPosts = [
  {
    id: "1",
    title: "The Future of AI in Business Intelligence",
    slug: "future-of-ai-in-business-intelligence",
    content:
      "Exploring how AI is revolutionizing the way businesses analyze and interpret data. Artificial Intelligence has become an integral part of modern business intelligence tools, enabling companies to extract deeper insights from their data and make more informed decisions. From predictive analytics to natural language processing, AI technologies are transforming how organizations understand and leverage their information assets.\n\nIn this article, we explore the various ways AI is being integrated into business intelligence platforms and the benefits it brings to organizations of all sizes. We also discuss the challenges and considerations when implementing AI-powered BI solutions.",
    excerpt: "Exploring how AI is revolutionizing the way businesses analyze and interpret data.",
    published: true,
    created_at: "2024-01-15",
    updated_at: "2024-01-15",
    readTime: "5 min read",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "2",
    title: "Building Scalable Data Pipelines",
    slug: "building-scalable-data-pipelines",
    content:
      "Best practices and techniques for creating efficient and scalable data engineering solutions. Data pipelines are the backbone of modern data-driven organizations, enabling the smooth flow of information from various sources to storage and analysis systems. As data volumes grow and requirements become more complex, building scalable pipelines becomes increasingly important.\n\nThis article covers key principles for designing data pipelines that can handle growing workloads, including modular architecture, fault tolerance, monitoring, and optimization techniques. We also explore various tools and technologies that can help you build robust data pipelines for your organization.",
    excerpt: "Best practices and techniques for creating efficient and scalable data engineering solutions.",
    published: true,
    created_at: "2024-01-10",
    updated_at: "2024-01-10",
    readTime: "7 min read",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "3",
    title: "The Role of Machine Learning in Healthcare",
    slug: "role-of-machine-learning-in-healthcare",
    content:
      "How machine learning models are improving diagnostics and patient care in the medical field. Machine learning is transforming healthcare by enabling more accurate diagnoses, personalized treatment plans, and improved patient outcomes. From image recognition for radiology to predictive analytics for patient risk assessment, ML technologies are becoming essential tools for healthcare providers.\n\nIn this comprehensive overview, we examine the various applications of machine learning in healthcare, including disease detection, drug discovery, and patient monitoring. We also discuss the ethical considerations and challenges of implementing AI in healthcare settings, as well as the future potential of these technologies.",
    excerpt: "How machine learning models are improving diagnostics and patient care in the medical field.",
    published: true,
    created_at: "2024-01-05",
    updated_at: "2024-01-05",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function getPosts() {
  return blogPosts
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug) || null
}

