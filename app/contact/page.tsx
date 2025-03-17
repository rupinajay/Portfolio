"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-12">Contact</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-8">
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <Mail className="h-6 w-6" />
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:rupinajay@gmail.com" className="text-sm text-muted-foreground hover:text-primary">
                  rupinajay@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <Phone className="h-6 w-6" />
              <div>
                <p className="font-medium">Phone</p>
                <a href="tel:+918248863436" className="text-sm text-muted-foreground hover:text-primary">
                  +91 824 886 3436
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <MapPin className="h-6 w-6" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-sm text-muted-foreground">Chennai, India</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={5} />
                </div>
                <Button className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

