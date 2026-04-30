"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Github, Calendar, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useMemo, useState } from "react"

// Helper function to extract YouTube video ID
function getYouTubeVideoId(url: string): string {
  if (!url) return ""

  // Handle different YouTube URL formats
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)

  return match && match[2].length === 11 ? match[2] : ""
}

// Helper function to get YouTube thumbnail URL
function getYouTubeThumbnailUrl(url: string): string {
  const videoId = getYouTubeVideoId(url)
  if (!videoId) return "/placeholder.svg?height=400&width=600"

  // Try to get the high-quality thumbnail, with fallback to medium quality
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
}

const projects = [
  {
    category: "hackathon",
    title: "FireTV",
    description:
      "A scalable Amazon HackOn Season 5 project for synchronized video playback, real-time chat, mood-based recommendations, video summarization, and gamified engagement built on a cloud-native distributed architecture.",
    technologies: ["React", "Socket.io", "Redis", "AWS", "DynamoDB", "Cognito"],
    demoVideo: "https://www.youtube.com/watch?v=5vkd3C3EMcg",
    //githubLink: "https://github.com/JaiBansal007/Hackon",
    date: "Amazon HackOn Season 5",
  },
  {
    category: "hackathon",
    title: "LegalEase AI",
    description:
      "AI-powered legal document platform with Google Gemini 2.0, real-time Meet transcription, WebSocket streaming and multilingual STT/TTS for multilingual legal analysis.",
    technologies: ["Next.js", "Firebase", "Socket.io", "Google Gemini"],
    demoVideo: "https://www.youtube.com/watch?v=t88iDX4M7sQ",
    githubLink: "https://github.com/NASA12345/LegalEase-AI",
    date: "Sept 2025 – Oct 2025",
  },
  {
    category: "self",
    title: "Black Box : IoT Smart Cargo Tracker",
    description:
      "BlackBox is a real-time shipment monitoring platform that combines ESP32 BLE sensor data, driver GPS tracking, and Firestore live sync to generate instant risk alerts and tamper-evident trip records for insurance operations.",
    technologies: ["React.js", "Firebase", "ESP32 Microcontroller"],
    demoVideo: "https://www.youtube.com/watch?v=NZF8RdI5t04",
    githubLink: "https://github.com/NASA12345/BlackBox-IoT/tree/main",
    date: "Mar 2026 - Apr 2026",
  },
  {
    category: "self",
    title: "UDAAN-AI",
    description:
      "UDAAN-AI is an AI-driven unified intelligence platform that seamlessly integrates GPS, drone, and air traffic data into a single ecosystem. It provides real-time tracking, predictive analytics, and smart alerting for fleets and UAVs, helping agencies monitor, predict, and optimize aerial and ground operations.",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Docker", "Apache Kafka"],
    demoVideo: "https://www.youtube.com/watch?v=Wvbfp_NW3Bc",
    githubLink: "https://github.com/NASA12345/Udaan-AI",
    date: "Sept 2025 - Oct 2025",
  },
  {
    category: "self",
    title: "Sudhaar Web App",
    description:
      "A garbage complaint management and scrap selling platform using Firebase and Teachable Machine for AI image validation. Integrated Google Auth, LocationIQ for geolocation, and a reward system to promote sustainability. Enabled real-time notifications via Email.js and optimized user interaction using Next.js and Tailwind CSS.",
    technologies: ["Next.js", "Node.js", "Firebase", "ML"],
    demoVideo: "https://www.youtube.com/watch?v=BV8J19NB6cw",
    githubLink: "https://github.com/NASA12345/Sudhaar-Web-App",
    date: "Sept 2024 – Oct 2024",
  },
  {
    category: "self",
    title: "SocialCalc",
    description:
      "Built a real-time collaborative spreadsheet web app with live formula support and seamless multi-user editing using React.js, Tailwind CSS, and Firebase. Designed a responsive UI and integrated Firebase for real-time sync and authentication to ensure a smooth and scalable user experience.",
    technologies: ["React.js", "Node.js", "Firebase", "Tailwind CSS"],
    demoVideo: "https://www.youtube.com/watch?v=1pj0eVCGufM",
    githubLink: "https://github.com/NASA12345/SocialCalc",
    date: "Aug 2024 – Sept 2024",
  },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"self" | "hackathon">("self")
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const visibleProjects = useMemo(
    () => projects.filter((project) => project.category === activeTab),
    [activeTab],
  )

  return (
    <section id="projects" ref={ref} className="section-shell relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background via-background/90 to-transparent" />
      <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-24 bottom-1/3 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-6xl"
        >
          <motion.div className="mb-12 text-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
              className="inline-block mb-3"
            >
              <span className="section-kicker">My Work</span>
            </motion.div>
            <h2 className="section-title text-foreground">Projects</h2>
            <p className="section-lead mx-auto mt-4 max-w-2xl">
              A curated selection of product work, systems projects, and experiments with real-world constraints.
            </p>

            <div className="mt-6 inline-flex rounded-full border border-neutral-800 p-1 shadow-sm">
              {[
                { key: "self", label: "Self" },
                { key: "hackathon", label: "Hackathon" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as "self" | "hackathon")}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === tab.key
                      ? "text-white"
                      : "text-black hover:text-foreground/80"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.key && (
                    <motion.span
                      layoutId="projectTabActive"
                      className="absolute inset-0 -z-10 rounded-full bg-neutral-800 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-16"
          >
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="panel-soft overflow-hidden rounded-[1.5rem] hover-lift"
              >
                <div className="md:grid md:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden group">
                    <Link href={project.demoVideo} target="_blank" rel="noopener noreferrer">
                      <div className="relative aspect-video w-full">
                        <img
                          src={getYouTubeThumbnailUrl(project.demoVideo) || "/placeholder.svg"}
                          alt={`${project.title} video thumbnail`}
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = "/placeholder.svg?height=400&width=600"
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 opacity-0 transition-opacity group-hover:opacity-100">
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90">
                            <Play className="ml-1 h-7 w-7 text-foreground" />
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-slate-950/70 to-transparent p-6">
                      <div>
                        <div className="mb-2 flex items-center text-sm text-white/80">
                          <Calendar className="mr-2 h-4 w-4" />
                          {project.date}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 + techIndex * 0.05 }}
                          className="rounded-full border border-border bg-muted px-3 py-1 text-sm font-medium text-foreground"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <p className="mb-6 text-muted-foreground">{project.description}</p>

                    <div className="flex flex-wrap gap-4">
                      {project.demoVideo && (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button asChild variant="outline">
                            <Link href={project.demoVideo} target="_blank" rel="noopener noreferrer">
                              Demo Video
                            </Link>
                          </Button>
                        </motion.div>
                      )}

                      {project.githubLink && (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button asChild variant="outline">
                            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" /> Code
                            </Link>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <Button asChild variant="ghost" className="group text-primary">
              <Link href="https://github.com/NASA12345" target="_blank" rel="noopener noreferrer">
                View More Projects on GitHub
                <Github className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
