"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, Wrench, Terminal } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="h-5 w-5" />,
    color: "from-blue-500 to-cyan-500",
    darkColor: "from-blue-600 to-cyan-600",
    skills: ["C++", "Python", "HTML", "CSS", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frameworks",
    icon: <Wrench className="h-5 w-5" />,
    color: "from-purple-500 to-violet-500",
    darkColor: "from-purple-600 to-violet-600",
    skills: ["React JS", "Next JS", "Node JS", "Express JS", "Firebase", "Kafka"],
  },
  {
    title: "Databases",
    icon: <Database className="h-5 w-5" />,
    color: "from-green-500 to-emerald-500",
    darkColor: "from-green-600 to-emerald-600",
    skills: ["MongoDB", "MySQL", "Drizzle ORM"],
  },
  {
    title: "Developer Tools",
    icon: <Terminal className="h-5 w-5" />,
    color: "from-orange-500 to-amber-500",
    darkColor: "from-orange-600 to-amber-600",
    skills: ["Git", "Postman", "VSCode", "Sublime Text"],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="skills" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-gray-50 to-transparent dark:from-gray-800 dark:to-transparent"></div>
      <div className="absolute -left-20 top-1/3 w-40 h-40 bg-purple-200/50 dark:bg-purple-900/20 rounded-full filter blur-3xl"></div>
      <div className="absolute -right-20 bottom-1/3 w-40 h-40 bg-blue-200/50 dark:bg-blue-900/20 rounded-full filter blur-3xl"></div>

      {/* Decorative elements */}
      <div className="absolute -left-20 top-1/3 w-40 h-40 bg-purple-200/50 dark:bg-purple-900/20 rounded-full filter blur-3xl"></div>
      <div className="absolute -right-20 bottom-1/3 w-40 h-40 bg-blue-200/50 dark:bg-blue-900/20 rounded-full filter blur-3xl"></div>

      {/* Geometric shapes */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 clip-diamond rotate-45 hidden lg:block"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 clip-hexagon hidden lg:block"></div>

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
                My Expertise
              </span>
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 gradient-text">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-4"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-3d"
                whileHover={{ y: -5 }}
              >
                <div className="card-3d-content bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl shadow-purple-500/5 dark:shadow-none border border-gray-100 dark:border-gray-700 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${category.color} dark:${category.darkColor}`}></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-br ${category.color} dark:${category.darkColor} text-white mr-3 shadow-lg`}
                      >
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white gradient-text">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          variants={skillVariants}
                          transition={{ duration: 0.3, delay: 0.2 + skillIndex * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1.5 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200/50 dark:border-gray-700/50 shadow-sm"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 italic">
              Continuously learning and expanding my technical skillset
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
