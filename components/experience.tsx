"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    position: "Contributor",
    company: "Google Code-in 2019",
    duration: "Nov 2019 – Jan 2020",
    location: "Remote",
    description:
      "Completed 33 tasks during GCI 2019 across multiple open-source organizations including OpenMRS, OSGeo, and TensorFlow. Tackled diverse challenges including bug fixing, feature implementation, UI/UX improvements, and writing technical documentation.",
    link: "https://codein.withgoogle.com/archive/",
    skills: ["Open Source", "Bug Fixing", "Feature Implementation", "Documentation"],
  },
]

export default function Experience() {
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
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="experience" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent dark:from-gray-900 dark:to-transparent"></div>
      <div className="absolute -left-20 top-1/3 w-40 h-40 bg-purple-200/50 dark:bg-purple-900/20 rounded-full filter blur-3xl"></div>
      <div className="absolute -right-20 bottom-1/3 w-40 h-40 bg-blue-200/50 dark:bg-blue-900/20 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
              className="inline-block mb-2"
            >
              <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium">
                Professional Path
              </span>
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Work Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-4"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Left side vertical line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-indigo-500 hidden md:block"></div>

                {/* Experience card */}
                <div className="md:ml-16">
                  <motion.div
                    className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl shadow-purple-500/5 dark:shadow-none border border-gray-100 dark:border-gray-700 overflow-hidden"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    {/* Top colored bar */}
                    <div className="h-2 bg-gradient-to-r from-purple-600 to-indigo-600"></div>

                    <div className="p-6">
                      {/* Position and timeline dot */}
                      <div className="flex items-start">
                        <div className="hidden md:block absolute -ml-16 mt-1">
                          <motion.div
                            className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg"
                            whileHover={{ scale: 1.1 }}
                          >
                            <span className="text-white text-xs font-bold">
                              {exp.duration.split(" – ")[0].split(" ")[1]}
                            </span>
                          </motion.div>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.position}</h3>
                          <div className="flex items-center mt-1">
                            <span className="text-purple-600 dark:text-purple-400 font-medium">{exp.company}</span>
                            {exp.link && (
                              <Link
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="mt-4 space-y-4">
                        <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <div className="flex items-center mr-4">
                            <Calendar className="h-4 w-4 mr-1 text-purple-600 dark:text-purple-400" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1 text-indigo-600 dark:text-indigo-400" />
                            {exp.location}
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
