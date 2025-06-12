"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Frontend Developer",
    company: "Deliverables IT Services",
    period: "April 2024 - Jan 2025",
    responsibilities: [
      "Collaborated on multiple client projects, contributing to user-focused frontend development.",
      "Utilized the Auto Snapp dashboard for lead tracking, team collaboration, and performance insights.",
      "Built responsive, mobile-optimized user interfaces using React.js, Next.js, and TailwindCSS.",
    ],
    skills: ["ReactJs","Next.js", "JavaScript", "TailwindCSS"],
  },
  {
    title: "Software Developer",
    company: "Instaastro",
    period: "March 2025 – Present",
    responsibilities: [
      "Developed an interactive 'Story' feature to enhance user engagement and daily content consumption.",
      "Implemented in-app notification permission handling to prompt users and improve communication opt-in rates.",
      "Built a referral feature enabling astrologers to refer others, helping drive platform growth and user acquisition.",
      "Collaborated closely with UI/UX designers to ensure seamless and intuitive user experiences.",
      "Focused on responsive design to ensure smooth performance across a wide range of mobile devices."
    ],
    skills: ["React Native", "JavaScript", "UI/UX", "Responsive Design"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Experience</h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>

              <ul className="list-disc pl-5 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm">
                    {resp}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <Badge key={idx} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}