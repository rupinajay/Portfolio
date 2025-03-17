"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Save, Key } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function SettingsPage() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "Rupin Ajay",
    email: "rupinajay@gmail.com",
    phone: "+91 824 886 3436",
    location: "Chennai, India",
  })
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  })
  const [saving, setSaving] = useState(false)

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target
    setPersonalInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handlePasswordChange = (e) => {
    const { name, value } = e.target
    setPasswords((prev) => ({ ...prev, [name]: value }))
  }

  const savePersonalInfo = async () => {
    setSaving(true)

    try {
      // In a real implementation, you would save to Supabase
      // await supabase.from("settings").update(personalInfo).eq("id", "1")

      toast({
        title: "Success",
        description: "Personal information updated successfully",
      })
    } catch (error) {
      console.error("Error saving personal info:", error)
      toast({
        title: "Error",
        description: "Failed to update personal information",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  const changePassword = async () => {
    if (passwords.new !== passwords.confirm) {
      toast({
        title: "Error",
        description: "New passwords do not match",
        variant: "destructive",
      })
      return
    }

    setSaving(true)

    try {
      // In a real implementation, you would update the password
      // await supabase.auth.updateUser({
      //   password: passwords.new
      // })

      toast({
        title: "Success",
        description: "Password changed successfully",
      })

      setPasswords({
        current: "",
        new: "",
        confirm: "",
      })
    } catch (error) {
      console.error("Error changing password:", error)
      toast({
        title: "Error",
        description: "Failed to change password",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings</p>
      </div>

      <Tabs defaultValue="personal">
        <TabsList>
          <TabsTrigger value="personal">Personal Information</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" value={personalInfo.name} onChange={handlePersonalInfoChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={personalInfo.email}
                  onChange={handlePersonalInfoChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" value={personalInfo.phone} onChange={handlePersonalInfoChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  value={personalInfo.location}
                  onChange={handlePersonalInfoChange}
                />
              </div>

              <div className="flex justify-end">
                <Button onClick={savePersonalInfo} disabled={saving}>
                  <Save className="h-4 w-4 mr-2" />
                  {saving ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>Update your password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current">Current Password</Label>
                <Input
                  id="current"
                  name="current"
                  type="password"
                  value={passwords.current}
                  onChange={handlePasswordChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="new">New Password</Label>
                <Input id="new" name="new" type="password" value={passwords.new} onChange={handlePasswordChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm">Confirm New Password</Label>
                <Input
                  id="confirm"
                  name="confirm"
                  type="password"
                  value={passwords.confirm}
                  onChange={handlePasswordChange}
                />
              </div>

              <div className="flex justify-end">
                <Button onClick={changePassword} disabled={saving}>
                  <Key className="h-4 w-4 mr-2" />
                  {saving ? "Changing..." : "Change Password"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Toaster />
    </div>
  )
}

