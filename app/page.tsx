"use client"

import { useEffect } from "react"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import CodingProfiles from "@/components/coding-profiles"
import Education from "@/components/education"
import Achievements from "@/components/achievements"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (anchor && anchor.hash && anchor.hash.startsWith("#")) {
        e.preventDefault()
        const targetId = anchor.hash.substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          // Scroll to the target element with smooth behavior
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for navbar
            behavior: "smooth",
          })

          // Update URL without causing a page reload
          window.history.pushState(null, "", anchor.hash)
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CodingProfiles />
      <Experience />
      <Education />
      <Achievements />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
