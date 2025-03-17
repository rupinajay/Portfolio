import { Timeline } from "@/components/ui/timeline"

export function Experience() {
  const data = [
    {
      title: "AI Engineer at Zyngate",
      date: "Jan 2025 – Feb 2025",
      content: (
        <div>
          <p className="text-sm text-muted-foreground">
            Designed and implemented an AI that scrapes jobs based on user preference and profile and then applies to
            jobs along with auto filling of forms on LinkedIn portal itself. Scaled the architecture to support multiple
            users and for reduced costs when deployed on cloud (AWS) by 40%.
          </p>
        </div>
      ),
    },
    {
      title: "AI Developer at IPR Law Firm",
      date: "Sep 2024 – Present",
      content: (
        <div>
          <p className="text-sm text-muted-foreground">
            Developing a Retrieval-Augmented Generation (RAG) system, in consultation with CIO - CTO of an IPR Law Firm,
            to help lawyers quickly access relevant legal information, enhancing efficiency. Enabled Vector & SQL based
            search.
          </p>
        </div>
      ),
    },
    {
      title: "Data Engineer Intern at Glencore International AG",
      date: "May 2024 – July 2024",
      content: (
        <div>
          <p className="text-sm text-muted-foreground">
            Replaced an inefficient VBA-based system with an automated pipeline to update daily pricing for over 1,000
            oil products globally, ensuring accurate and timely financial data for real-time reporting. Reduced
            processing time from 30 minutes to seconds using advanced algorithms, increasing efficiency by 92%.
          </p>
        </div>
      ),
    },
  ]

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
      <div className="w-full max-w-5xl mx-auto px-4">
        <Timeline data={data} />
      </div>
    </section>
  )
}

