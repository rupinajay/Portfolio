import { createClient } from "@supabase/supabase-js"
import { redirect } from "next/navigation"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  return { data, error }
}

export async function signOut() {
  await supabase.auth.signOut()
  redirect("/admin/login")
}

export async function getSession() {
  const {
    data: { session },
  } = await supabase.auth.getSession()
  return session
}

export async function requireAuth() {
  const session = await getSession()

  if (!session) {
    redirect("/admin/login")
  }

  return session
}

