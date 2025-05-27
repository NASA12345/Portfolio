"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Code, CheckCircle2, TrendingUp, Award } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Static data for coding profiles
const codingProfiles = [
  {
    platform: "Codeforces",
    username: "nay11",
    rating: "1334",
    rank: "Pupil",
    solved: "179 Problems",
    contests: "16 contests",
    link: "https://codeforces.com/profile/nay11",
    color: "bg-gradient-to-r from-blue-500 to-blue-600",
    textColor: "text-white",
    icon: <Code className="h-5 w-5" />,
  },
  {
    platform: "CodeChef",
    username: "nasaa11",
    rating: "1618",
    rank: "3 Star",
    solved: "44 problems",
    contests: "7 contests",
    link: "https://www.codechef.com/users/nasaa11",
    color: "bg-gradient-to-r from-amber-500 to-amber-600",
    textColor: "text-white",
    icon: <CheckCircle2 className="h-5 w-5" />,
  },
  {
    platform: "LeetCode",
    username: "nasaa11",
    rating: "",
    rank: "",
    solved: "104 problems",
    contests: "0 contests",
    link: "https://leetcode.com/nasaa11/",
    color: "bg-gradient-to-r from-yellow-500 to-yellow-600",
    textColor: "text-white",
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    platform: "GitHub",
    username: "NASA12345",
    rating: "",
    rank: "",
    repos: "35 repositories",
    contributions: "497 contributions",
    link: "https://github.com/NASA12345",
    color: "bg-gradient-to-r from-gray-700 to-gray-800",
    textColor: "text-white",
    icon: <Award className="h-5 w-5" />,
  },
]

export default function CodingProfiles() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [expandedProfile, setExpandedProfile] = useState<number | null>(null)

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
    <section id="coding" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
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
                My Profiles
              </span>
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Coding Profiles</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-4"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {codingProfiles.map((profile, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
                layoutId={`profile-${index}`}
              >
                <motion.div
                  className={`${profile.color} ${profile.textColor} rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
                    expandedProfile === index ? "scale-105 z-20" : "hover:-translate-y-2"
                  }`}
                  onClick={() => setExpandedProfile(expandedProfile === index ? null : index)}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <div className="p-2 bg-white/20 rounded-lg mr-3">{profile.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold">{profile.platform}</h3>
                          <p className="text-sm opacity-90">@{profile.username}</p>
                        </div>
                      </div>
                      <Link
                        href={profile.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="h-4 w-4 opacity-70 hover:opacity-100" />
                      </Link>
                    </div>

                    {profile.rating && (
                      <div className="mb-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm opacity-80">Rating</span>
                          <span className="font-bold">{profile.rating}</span>
                        </div>
                        {profile.rank && (
                          <div className="flex justify-between items-center">
                            <span className="text-sm opacity-80">Rank</span>
                            <span>{profile.rank}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Expanded details */}
                    {expandedProfile === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-white/20"
                      >
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          {profile.solved && (
                            <div>
                              <p className="opacity-80">Solved</p>
                              <p className="font-medium">{profile.solved}</p>
                            </div>
                          )}
                          {profile.contests && (
                            <div>
                              <p className="opacity-80">Contests</p>
                              <p className="font-medium">{profile.contests}</p>
                            </div>
                          )}
                          {profile.repos && (
                            <div>
                              <p className="opacity-80">Repositories</p>
                              <p className="font-medium">{profile.repos}</p>
                            </div>
                          )}
                          {profile.contributions && (
                            <div>
                              <p className="opacity-80">Contributions</p>
                              <p className="font-medium">{profile.contributions}</p>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* Click to expand indicator */}
                {expandedProfile !== index && (
                  <div className="absolute bottom-3 right-3 bg-white/30 dark:bg-black/30 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    Click for details
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8"
          >
            * Click on a profile card to see more details
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
