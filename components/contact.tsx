import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {
  return (
    <section id="contact" className="py-16">
      <h2 className="mb-8 text-3xl font-bold tracking-tight">Contact</h2>
      <div className="grid gap-6 md:grid-cols-3">
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
      <div className="mt-8 text-center">
        <Button asChild size="lg">
          <a href="mailto:rupinajay@gmail.com">Get In Touch</a>
        </Button>
      </div>
    </section>
  )
}

