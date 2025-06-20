"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, MapPin, User, Code, Briefcase, ExternalLink, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" ref={ref} className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent dark:from-gray-800 dark:to-transparent z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-800 dark:to-transparent z-0"></div>
      <div className="absolute -left-32 top-1/4 w-64 h-64 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30 z-0"></div>
      <div className="absolute -right-32 bottom-1/4 w-64 h-64 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-30 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
              className="inline-block mb-2"
            >
              <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium">
                About Me
              </span>
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Who I Am</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-4"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Profile Card */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-1 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl shadow-purple-500/5 dark:shadow-none border border-gray-100 dark:border-gray-700 overflow-hidden hover-lift"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl mr-4">
                    <User className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Nayan Jindal</h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                  Computer Science student at NSUT with a passion for software development and problem-solving.
                </p>

                {/* Contact Info */}
                <div className="mt-auto space-y-3">
                  <div className="flex items-center p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700">
                    <div className="mr-3 p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                      <Mail className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">nayan11404@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700">
                    <div className="mr-3 p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                      <MapPin className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">Delhi, India</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center mt-6 space-x-4">
                  <Link
                    href="https://github.com/NASA12345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 hover:text-purple-600 dark:hover:bg-purple-900/30 dark:hover:text-purple-400 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/nayan-jindal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 hover:text-purple-600 dark:hover:bg-purple-900/30 dark:hover:text-purple-400 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Skills & Experience Summary */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl shadow-purple-500/5 dark:shadow-none border border-gray-100 dark:border-gray-700 overflow-hidden hover-lift"
            >
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Technical Skills */}
                  <div>
                    <div className="flex items-start mb-4">
                      <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-xl mr-4">
                        <Code className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technical Skills</h3>
                        <div className="flex flex-wrap gap-2">
                          {["C++", "Python", "JavaScript", "React", "Next.js", "Express.js", "MySQL"].map(
                            (skill, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                              >
                                {skill}
                              </span>
                            ),
                          )}
                          <Link
                            href="#skills"
                            className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-xs font-medium flex items-center"
                          >
                            More <ExternalLink className="h-3 w-3 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <div className="flex items-start mb-4">
                      <div className="bg-violet-100 dark:bg-violet-900/30 p-3 rounded-xl mr-4">
                        <Briefcase className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Experience</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Currently working as Software Developer Intern at Mahindra Logistics, developing real-time GPS
                          tracking systems and scalable data pipelines.
                        </p>
                        <Link
                          href="#experience"
                          className="mt-2 inline-flex items-center text-sm text-purple-600 dark:text-purple-400 hover:underline"
                        >
                          View details <ExternalLink className="h-3 w-3 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education Summary */}
                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl mr-4">
                      <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">About Me</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                        Computer Science student at NSUT with a passion for web development, competitive programming,
                        and open-source contributions. Currently working on real-time systems and scalable backend
                        architectures.
                      </p>

                      <div className="mt-4 p-4 rounded-xl bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/20">
                        <p className="text-purple-700 dark:text-purple-400 text-sm italic">
                          "I believe in creating technology that makes a positive impact on people's lives."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
