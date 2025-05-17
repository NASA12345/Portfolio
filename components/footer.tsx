import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Nayan Jindal</h2>
          <p className="text-gray-400 mb-6">Computer Science Student & Developer</p>

          <div className="flex justify-center space-x-6 mb-8">
            <Link
              href="https://github.com/NASA12345"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/nayan-jindal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>

          <div className="flex justify-center space-x-4 mb-6">
            <Link href="#home" className="text-sm text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm text-gray-400 hover:text-white transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">
              Projects
            </Link>
          </div>

          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Nayan Jindal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
