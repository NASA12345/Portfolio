"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Trophy, Medal, Star, TrendingUp, Target, Code, Award } from "lucide-react"

const achievements = [

  {
  title: "Amazon HackOn Season 5",
  description: "Finalist Amazon HackOn Season 5",
  icon: <Code className="h-6 w-6" />,
  color: "from-orange-500 to-orange-600",
  link: "",
  },
  {
  title: "Mahindra Techathon 2.0",
  description: "Advanced to the final round of Mahindra Techathon 2.0",
  icon: <Award className="h-6 w-6" />,
  color: "from-blue-500 to-blue-600",
  link: "",
  },
  {
    title: "Smart India Hackathon",
    description: "Successfully shortlisted through two internal selection rounds of SIH 2024",
    icon: <Trophy className="h-6 w-6" />,
    color: "from-green-500 to-green-600",
    link: "",
  },
  {
    title: "BRICSMATH 2021",
    description: "Secured 1st Rank in the competition",
    icon: <Medal className="h-6 w-6" />,
    color: "from-purple-500 to-purple-600",
    link: "",
  },
  {
    title: "SOF-IMO 2021-22",
    description: "Secured 2nd Rank in the International Mathematics Olympiad",
    icon: <Target className="h-6 w-6" />,
    color: "from-red-500 to-red-600",
    link: "",
  },
]

export default function Achievements() {
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

  return (
    <section id="achievements" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
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
                Recognition
              </span>
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Achievements</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-4"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.a
                key={index}
                href={achievement.link || "#"}
                target={achievement.link ? "_blank" : undefined}
                rel={achievement.link ? "noopener noreferrer" : undefined}
                variants={itemVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group overflow-hidden rounded-2xl ${!achievement.link ? "pointer-events-none" : ""}`}
              >
                <motion.div
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl shadow-purple-500/5 dark:shadow-none border border-gray-100 dark:border-gray-700 overflow-hidden h-full"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {/* Top colored bar */}
                  <div className={`h-2 bg-gradient-to-r ${achievement.color}`}></div>

                  <div className="p-6">
                    <div className="flex items-start">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${achievement.color} text-white mr-4`}>
                        {achievement.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{achievement.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">{achievement.description}</p>
                      </div>
                    </div>

                    {/* Shine effect on hover */}
                    <div className="absolute -inset-x-1 -inset-y-1 z-0 hidden group-hover:block">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    </div>
                  </div>
                </motion.div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-full shadow-md">
              <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Continuously striving for excellence and new challenges
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
