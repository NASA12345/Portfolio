"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Github, Calendar, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

// Helper function to extract YouTube video ID
function getYouTubeVideoId(url: string): string {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : ""
}

// Helper function to get YouTube thumbnail URL
function getYouTubeThumbnailUrl(url: string): string {
  const videoId = getYouTubeVideoId(url)
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "/placeholder.svg?height=400&width=600"
}

const projects = [
  {
    title: "Sudhaar Web App",
    description:
      "A garbage complaint management and scrap selling platform using Firebase, TypeScript, and Teachable Machine for AI image validation. Integrated Google Auth, LocationIQ for geolocation, and a reward system to promote sustainability. Enabled real-time notifications via Email.js and optimized user interaction using Next.js and Tailwind CSS.",
    technologies: ["Next.js", "Node.js", "Firebase", "ML", "TypeScript"],
    demoVideo: "https://www.youtube.com/watch?v=BV8J19NB6cw",
    githubLink: "https://github.com/JaiBansal007/Sudhar-App",
    date: "Sept 2024 – Oct 2024",
  },
  {
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
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [activeProject, setActiveProject] = useState(0)

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

  return (
    <section id="projects" ref={ref} className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-gray-50 to-transparent dark:from-gray-800 dark:to-transparent"></div>
      <div className="absolute -left-20 top-1/3 w-40 h-40 bg-purple-200/50 dark:bg-purple-900/20 rounded-full filter blur-3xl"></div>
      <div className="absolute -right-20 bottom-1/3 w-40 h-40 bg-blue-200/50 dark:bg-blue-900/20 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
              className="inline-block mb-2"
            >
              <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium">
                My Work
              </span>
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-4"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-16"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl shadow-purple-500/5 dark:shadow-none border border-gray-100 dark:border-gray-700 overflow-hidden"
                whileHover={{ y: -5 }}
                onMouseEnter={() => setActiveProject(index)}
              >
                <div className="md:grid md:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden group">
                    <motion.div
                      initial={{ scale: 1.1, opacity: 0.8 }}
                      animate={activeProject === index ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.5 }}
                      className="h-full"
                    >
                      {/* YouTube Thumbnail */}
                      <Link href={project.demoVideo} target="_blank" rel="noopener noreferrer">
                        <div className="relative aspect-video w-full">
                          <img
                            src={getYouTubeThumbnailUrl(project.demoVideo) || "/placeholder.svg"}
                            alt={`${project.title} video thumbnail`}
                            className="w-full h-full object-cover"
                          />
                          {/* Play button overlay */}
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                              <Play className="h-8 w-8 text-purple-600 ml-1" />
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                        <div>
                          <div className="flex items-center text-white/80 text-sm mb-2">
                            <Calendar className="h-4 w-4 mr-2" />
                            {project.date}
                          </div>
                          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={activeProject === index ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.1 + techIndex * 0.05 }}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>

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
            <Button asChild variant="ghost" className="text-purple-600 dark:text-purple-400 group">
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
