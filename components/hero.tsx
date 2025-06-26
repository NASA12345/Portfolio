"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  // Generate blob configurations once and store them
  const blobConfigs = useRef(
    Array.from({ length: 8 }, () => ({
      width: Math.random() * 300 + 100,
      height: Math.random() * 300 + 100,
      top: Math.random() * 100,
      left: Math.random() * 100,
    })),
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    setMousePos({ x, y })
  }

  if (!mounted) return null

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 z-0" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {blobConfigs.current.map((config, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-purple-300/30 to-purple-500/20 dark:from-purple-700/20 dark:to-purple-900/10 blur-xl"
            style={{
              width: `${config.width}px`,
              height: `${config.height}px`,
              top: `${config.top}%`,
              left: `${config.left}%`,
            }}
            animate={{
              x: mousePos.x * (i + 1) * 10,
              y: mousePos.y * (i + 1) * 10,
            }}
            transition={{ type: "spring", stiffness: 30, damping: 20 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <motion.h2
              className="text-lg font-medium text-purple-600 dark:text-purple-400 mb-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              Hello, I&apos;m
            </motion.h2>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 relative">
                <span className="text-gradient">Nayan Jindal</span>
                <motion.span
                  className="absolute -z-10 inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 dark:from-purple-400/10 dark:to-indigo-400/10 blur-xl rounded-full"
                  animate={{
                    scale: [1, 1.01, 1],
                    opacity: [0.3, 0.32, 0.3],
                  }}
                  transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
                />
              </h1>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Computer Science Student, Developer & Competitive Programmer
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-full px-6 shadow-lg shadow-purple-500/20"
              >
                <Link href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                className="rounded-full px-6 border-gray-300 dark:border-gray-700 shadow-sm"
              >
                <Link href="#about">About Me</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: <Github className="h-6 w-6" />, href: "https://github.com/NASA12345", label: "GitHub" },
              {
                icon: <Linkedin className="h-6 w-6" />,
                href: "https://www.linkedin.com/in/nayan-jindal/",
                label: "LinkedIn",
              },
            ].map((social, index) => (
              <motion.div
                key={social.label}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
                >
                  {social.icon}
                  <span className="sr-only">{social.label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </section>
  )
}
