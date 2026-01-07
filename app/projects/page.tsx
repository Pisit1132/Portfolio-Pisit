"use client"

import { ChangeEvent, useState } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search } from "lucide-react"
import Link from "next/link"
import { projects } from "@/lib/projects-data"
import { motion } from "framer-motion"
import Image from "next/image"

const categories = ["all", "frontend", "fullstack", "backend", "aws"] as const

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const hasLink = (value?: string) => value && value !== "#"

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold">All Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my portfolio of full-stack applications and web development projects
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-4xl mx-auto space-y-6 mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <AnimatedSection key={project.slug} delay={i * 0.05}>
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.2 }}>
                <Card className="group flex h-full flex-col overflow-hidden border-border/50 bg-card/60 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-4/3 w-full overflow-hidden border-b border-border/50">
                    <Image
                      src={project.images[0] || "/placeholder.jpg"}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {project.category}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="space-y-3 flex-1">
                      <h3 className="text-xl font-bold transition-colors group-hover:text-primary">{project.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.summary}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-2">
                      <div className="col-span-2 text-sm font-medium text-muted-foreground">Featured work</div>
                      {hasLink(project.links.demo) && (
                        <Button asChild size="sm" variant="outline">
                          <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {hasLink(project.links.github) && (
                        <Button asChild size="sm" variant="outline">
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            GitHub
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <AnimatedSection>
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No projects found. Try adjusting your search or filters.</p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  )
}
