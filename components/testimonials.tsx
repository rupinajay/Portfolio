"use client"
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const reviews = [
  {
    name: "John Doe",
    username: "@johndoe",
    body: "Rupin's AI solutions have transformed our business processes. Highly recommended!",
    img: "https://avatar.vercel.sh/johndoe",
  },
  {
    name: "Jane Smith",
    username: "@janesmith",
    body: "Exceptional problem-solving skills and a deep understanding of AI technologies.",
    img: "https://avatar.vercel.sh/janesmith",
  },
  {
    name: "Alex Johnson",
    username: "@alexj",
    body: "Rupin's contributions to our projects have been invaluable. A true AI expert!",
    img: "https://avatar.vercel.sh/alexj",
  },
  {
    name: "Emily Brown",
    username: "@emilybrown",
    body: "Impressive ability to translate complex AI concepts into practical applications.",
    img: "https://avatar.vercel.sh/emilybrown",
  },
  {
    name: "Michael Lee",
    username: "@michaellee",
    body: "Rupin's innovative approach to AI development has greatly improved our product.",
    img: "https://avatar.vercel.sh/michaellee",
  },
  {
    name: "Sarah Wilson",
    username: "@sarahw",
    body: "Working with Rupin was a game-changer for our AI initiatives. Highly skilled and professional.",
    img: "https://avatar.vercel.sh/sarahw",
  },
]

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl p-6 mx-4",
        "bg-card shadow-lg hover:shadow-xl transition-shadow duration-300",
        "border border-primary/10",
      )}
    >
      <div className="flex flex-row items-center gap-4 mb-4">
        <img className="rounded-full w-12 h-12" alt="" src={img || "/placeholder.svg"} />
        <div className="flex flex-col">
          <figcaption className="text-base font-semibold text-primary">{name}</figcaption>
          <p className="text-sm text-muted-foreground">{username}</p>
        </div>
      </div>
      <blockquote className="text-sm leading-relaxed">{body}</blockquote>
    </figure>
  )
}

export function Testimonials() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
        What People Say
      </h2>
      <div className="relative w-full overflow-hidden">
        <Marquee className="py-4" pauseOnHover repeat={2}>
          {reviews.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  )
}

