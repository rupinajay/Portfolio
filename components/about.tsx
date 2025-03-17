import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function About() {
  const skills = {
    Languages: ["Python", "Java", "SQL"],
    Databases: ["MySQL", "MongoDB", "PostgreSQL", "PineconeDB", "Qdrant", "MilvusDB"],
    "Tools & Technologies": ["PowerBI", "Git", "GitHub", "JIRA", "Docker", "HuggingFace", "Unix Scripting"],
    "AI & ML": ["Generative AI", "RAGs", "LLM", "Classification & Regression Models", "Deep Learning", "NLP"],
    "Soft Skills": [
      "Leadership",
      "Communication",
      "Collaboration",
      "Problem-solving",
      "Adaptability",
      "Project Management",
    ],
  }

  const education = [
    {
      school: "Shiv Nadar University Chennai",
      degree: "B.Tech Computer Science and Engineering",
      period: "Aug 2022 – April 2026",
      grade: "GPA: 8.3/10",
    },
    {
      school: "Sri Chaitanya Techno School",
      degree: "Senior Secondary School Education",
      period: "July 2020 – March 2022",
      grade: "Grade: 88.2% | 441/500",
    },
  ]

  return (
    <section id="about" className="py-16">
      <h2 className="mb-8 text-3xl font-bold tracking-tight">About Me</h2>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Education</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu) => (
            <Card key={edu.school}>
              <CardHeader>
                <CardTitle>{edu.school}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">{edu.degree}</p>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
                <p className="text-sm text-muted-foreground">{edu.grade}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, skillList]) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle className="text-lg">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span key={skill} className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

