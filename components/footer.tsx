"use client"

import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  // Function to handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId)
    if (targetElement) {
      // Scroll to the target element with smooth behavior
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for navbar
        behavior: "smooth",
      })

      // Update URL without causing a page reload
      window.history.pushState(null, "", `#${sectionId}`)
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Nayan Jindal</h2>
          <p className="text-gray-400 mb-6">Computer Science Student & Developer</p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/NASA12345"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nayan-jindal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>

          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Projects
            </button>
          </div>

          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Nayan Jindal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
