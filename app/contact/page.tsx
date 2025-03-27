"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto py-24 px-4 relative">
      
      <div className="mb-20">
        <h1 className="text-6xl font-bold text-foreground tracking-tight mb-6">
          Contact Me
        </h1>
        <div className="w-16 h-1 bg-primary mb-12"></div>
        <p className="text-lg text-foreground/90 max-w-2xl">
          Have a project in mind or just want to chat? Feel free to reach out and I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-border/10">
            <h2 className="text-xl font-semibold mb-6 text-foreground flex items-center">
              <MessageSquare className="h-5 w-5 text-primary mr-2" />
              Contact Information
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/5 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a href="mailto:rupinajay@gmail.com" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                    rupinajay@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary/5 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a href="tel:+918248863436" className="text-sm text-foreground/80 hover:text-primary transition-colors">
                    +91 824 886 3436
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary/5 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-sm text-foreground/80">Chennai, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-border/10">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Response Time</h2>
            <p className="text-foreground/80">I typically respond to all inquiries within 24-48 hours during business days.</p>
          </div>
        </div>

        <div>
          <Card className="border border-border/10 shadow-sm bg-white rounded-lg overflow-hidden">
            <div className="p-6 border-b border-border/10">
              <h2 className="text-xl font-semibold text-foreground">Send a Message</h2>
              <p className="text-sm text-foreground/80 mt-1">Fill out the form below to get in touch.</p>
            </div>
            <CardContent className="p-6">
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground block mb-2">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="border-border/20 focus-visible:ring-primary" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground block mb-2">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="border-border/20 focus-visible:ring-primary" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground block mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message" 
                    rows={5} 
                    className="border-border/20 focus-visible:ring-primary"
                  />
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

