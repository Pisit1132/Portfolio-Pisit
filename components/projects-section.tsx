"use client"

import { AnimatedSection } from "./animated-section"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { getFeaturedProjects } from "@/lib/projects-data"
import { motion } from "framer-motion"
import Image from "next/image"

export function ProjectsSection() {
  const projects = getFeaturedProjects()
  const hasLink = (value?: string) => value && value !== "#"

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects showcasing my full-stack development capabilities
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project, i) => (
            <AnimatedSection key={project.slug} delay={i * 0.1}>
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.2 }}>
                <Card className="group flex h-full flex-col overflow-hidden border-border/50 bg-card/60 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:shadow-xl pressable">
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
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-5 flex items-center gap-2">
                      <div className="flex-1 text-sm font-medium text-muted-foreground">Featured work</div>
                      {hasLink(project.links.demo) && (
                        <Button asChild size="sm" variant="ghost">
                          <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {hasLink(project.links.github) && (
                        <Button asChild size="sm" variant="ghost">
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
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

        <AnimatedSection>
          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
