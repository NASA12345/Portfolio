"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, MapPin, Award } from "lucide-react"

const education = [
  {
    institution: "Netaji Subhash University of Technology",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    duration: "Aug 2023 – July 2027",
    location: "Delhi, India",
    grade: "8.88 GPA",
    year: "2027",
  },
  {
    institution: "Sant Gyaneshwar Model School",
    degree: "Class XII (CBSE)",
    duration: "April 2020 – April 2022",
    location: "Delhi, India",
    grade: "94.8%",
    year: "2022",
  },
  {
    institution: "Shri Baba Mast Nath Public School",
    degree: "Class X (CBSE)",
    duration: "April 2008 – April 2020",
    location: "Rohtak, Haryana, India",
    grade: "95.7%",
    year: "2020",
  },
]

export default function Education() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="education" ref={ref} className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-gray-50 to-transparent dark:from-gray-800 dark:to-transparent"></div>
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
                My Journey
              </span>
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-4"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Year indicator */}
                  <div className="flex md:flex-col items-center md:items-start">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 border-2 border-purple-500 dark:border-purple-700 shadow-md">
                      <span className="text-lg font-bold text-purple-700 dark:text-purple-400">{edu.year}</span>
                    </div>
                    {index !== education.length - 1 && (
                      <div className="hidden md:block w-0.5 h-16 bg-gradient-to-b from-purple-500 to-indigo-500 mx-auto mt-2"></div>
                    )}
                  </div>

                  {/* Content */}
                  <motion.div
                    className="flex-1 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-6 rounded-2xl shadow-xl shadow-purple-500/5 dark:shadow-none border border-gray-100 dark:border-gray-700"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    <div className="mb-1 inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium">
                      {edu.degree}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-3">{edu.institution}</h3>

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                        <Calendar className="h-4 w-4 mr-2 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                        <span>{edu.duration}</span>
                      </div>

                      <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                        <span>{edu.location}</span>
                      </div>

                      <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                        <Award className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                        <span>
                          Grade: <strong>{edu.grade}</strong>
                        </span>
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
