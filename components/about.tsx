"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Phone, Mail, MapPin, User, Code, Briefcase } from "lucide-react"

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
          <motion.div variants={itemVariants} className="text-center mb-16">
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

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl shadow-xl shadow-purple-500/5 dark:shadow-none border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-start mb-6">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl mr-4">
                  <User className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Personal Profile</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    I&apos;m Nayan Jindal, a Computer Science and Engineering student at Netaji Subhash University of
                    Technology with a passion for software development and problem-solving.
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-xl mr-4">
                  <Code className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Technical Journey</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    With experience in web development, open-source contributions, and competitive programming, I&apos;m
                    constantly expanding my knowledge and skills in the tech industry.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-violet-100 dark:bg-violet-900/30 p-3 rounded-xl mr-4">
                  <Briefcase className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Experience</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    I&apos;ve contributed to open-source projects during Google Code-in 2019 and volunteered with NSS to
                    promote social welfare and environmental awareness.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl shadow-xl shadow-purple-500/5 dark:shadow-none border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Contact Information
                </span>
              </h3>

              <ul className="space-y-6">
                {[
                  {
                    icon: <Phone className="h-5 w-5 text-purple-600 dark:text-purple-400" />,
                    text: "+91-8950558070",
                    label: "Phone",
                  },
                  {
                    icon: <Mail className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />,
                    text: "nayan11404@gmail.com",
                    label: "Email",
                  },
                  {
                    icon: <MapPin className="h-5 w-5 text-violet-600 dark:text-violet-400" />,
                    text: "Delhi, India",
                    label: "Location",
                  },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md hover:bg-white dark:hover:bg-gray-800"
                    whileHover={{ x: 5 }}
                  >
                    <div className="mr-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-700">{item.icon}</div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{item.label}</p>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">{item.text}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mt-8 p-4 rounded-xl bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/20"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <p className="text-purple-700 dark:text-purple-400 text-sm italic">
                  "I believe in creating technology that makes a positive impact on people's lives."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
