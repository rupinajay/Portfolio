import type { ReactNode } from "react"
import { requireAuth } from "@/lib/auth"
import { AdminNav } from "@/components/admin/admin-nav"

export default async function AdminLayout({
  children,
}: {
  children: ReactNode
}) {
  // This will redirect to login if not authenticated
  await requireAuth()

  return (
    <div className="flex min-h-screen">
      <AdminNav />
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  )
}

