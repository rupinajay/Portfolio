"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BlogPostForm } from "@/components/blog-post-form"

export function BlogPostList({ posts, isLoading, onUpdate, onDelete }) {
  const [editingId, setEditingId] = useState(null)

  if (isLoading) return <div>Loading posts...</div>

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <div key={post.id} className="border p-4 rounded-md">
          {editingId === post.id ? (
            <BlogPostForm
              initialData={post}
              onSubmit={(data) => {
                onUpdate(post.id, data)
                setEditingId(null)
              }}
            />
          ) : (
            <>
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p className="text-muted-foreground">{post.excerpt}</p>
              <div className="mt-4 space-x-2">
                <Button onClick={() => setEditingId(post.id)}>Edit</Button>
                <Button variant="destructive" onClick={() => onDelete(post.id)}>
                  Delete
                </Button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

