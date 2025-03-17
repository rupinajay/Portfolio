import { createClient } from "@supabase/supabase-js"
import { redirect } from "next/navigation"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL and key must be defined")
}

export const supabase = createClient(supabaseUrl, supabaseKey)

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    console.error("Sign-in error:", error) // Log the error
    return { data: null, error } // Return null data if there's an error
  }

  console.log("Sign-in successful:", data) // Log successful sign-in
  return { data, error: null } // Return data and null error on success
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
  console.log("Session:", session) // Log the session for debugging

  if (!session) {
    console.log("No session found, redirecting to login") // Log redirect action
    redirect("/admin/login")
  }

  return session
}
