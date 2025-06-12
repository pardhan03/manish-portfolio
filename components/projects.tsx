"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Property Pulse",
    description:
      "A full-stack real estate application built with React Native, Appwrite backend, and Google OAuth — delivering seamless property listings and secure user access.",
    image: "/PropertyPulse.jpg",
    tags: ["React Native", "Appwrite", "Google Auth", "Dynamic Routing", "NativeWind"],
    demoUrl: "",
    githubUrl: "https://github.com/pardhan03/PropertyPulse",
    features: [
      "Google Authentication with Appwrite integration",
      "Dynamic route navigation using React Navigation",
      "Beautiful UI built using NativeWind and custom fonts",
      "Real-time property listing from seeded Appwrite database",
      "Tabs-based navigation and user profile screen",
      "Explore and property detail pages with smooth UX",
    ],
  },
  {
    title: "Tweet-X",
    description:
      "A full-featured Twitter Clone built using the MERN stack, perfect for improving full-stack development skills and portfolio impact.",
    image: "/TweetX.png",
    tags: ["ReactJS", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "MERN Stack"],
    demoUrl: "", 
    githubUrl: "https://github.com/pardhan03/Tweet-X", 
    features: [
      "User authentication and registration system",
      "Tweet creation, deletion, and real-time feed updates",
      "Follow/unfollow functionality and profile management",
      "Responsive UI styled with Tailwind CSS",
      "Built using MERN stack with clean architecture",
      "Designed for hands-on learning and scalability",
    ],
  },
  {
    title: "NewsNest",
    description:
      "NewsNest is a modern news application that fetches real-time news from external APIs, allowing users to discover trending stories and save articles for later reading.",
    image: "/News_Nest.jpg",
    tags: ["React Native", "AsyncStorage"],
    demoUrl: "",
    githubUrl: "https://github.com/pardhan03/NewsNest",
    features: [
      "Real-time news fetching from APIs with category-wise filtering",
      "Discover screen showcasing trending news and topics",
      "Bookmark functionality to save news for later",
      "Real-time news fetching from NewsData.io with category-wise filtering",
      "Dynamic news categories with quick-access buttons",
    ],
  },
  {
    title: "Talk-to-connect",
    description:
      "Talk-to-connect is a real-time chat application enabling seamless communication using WebSocket and powerful backend services.",
    image: "/chat_mobile.png",
    tags: ["React.js", "Node.js", "Express.js", "WebSocket", "Tailwind CSS"],
    demoUrl: "",
    githubUrl: "https://github.com/pardhan03/Talk-to-Connect",
    features: [
      "GReal-time messaging with WebSocket",
      "User authentication and chat history persistence",
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid gap-10">
          {projects.filter((_, index) => index === 0 || index === 2).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-6 border rounded-xl overflow-hidden group"
            >
              <div className="overflow-hidden relative h-[300px] md:h-full border-b md:border-b-0 md:border-r">
                <div className="absolute inset-0 overflow-y-auto scrollbar-hide">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={1200}
                    className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-2">
                  {/* <Button size="sm">
                    <Link
                      href={project.demoUrl}
                      className="flex items-center"
                      target="_blank"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live
                    </Link>
                  </Button> */}
                  {
                    project.githubUrl && (
                      <Button size="sm" variant="outline">
                        <Link
                          href={project.githubUrl}
                          className="flex items-center"
                          target="_blank"
                        >
                          <Github className="mr-2 h-4 w-4" /> Code
                        </Link>
                      </Button>
                    )
                  }
                </div>
              </div>
            </motion.div>
          ))}
          {projects.filter((_, index) => index === 1 || index === 3).map((project, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-6 border rounded-xl overflow-hidden group"
            >
              <div className="overflow-hidden relative h-full md:h-full border-b md:border-b-0 md:border-r">
                <div className="w-full h-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={1200}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-2">
                  {/* <Button size="sm">
                    <Link
                      href={project.demoUrl}
                      className="flex items-center"
                      target="_blank"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live
                    </Link>
                  </Button> */}
                  {
                    project.githubUrl && (
                      <Button size="sm" variant="outline">
                        <Link
                          href={project.githubUrl}
                          className="flex items-center"
                          target="_blank"
                        >
                          <Github className="mr-2 h-4 w-4" /> Code
                        </Link>
                      </Button>
                    )
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}