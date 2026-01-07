import { notFound } from "next/navigation"
import { getProjectBySlug, projects } from "@/lib/projects-data"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export const dynamicParams = true

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  if (!project) {
    return {
      title: "Project not found",
      description: "The requested project could not be found.",
    }
  }
  return {
    title: `${project.title} | Pisit Sirisingskul`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: project.images?.[0]
        ? [
            {
              url: project.images[0],
              width: 1200,
              height: 630,
              alt: project.title,
            },
          ]
        : undefined,
    },
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  const hasLink = (value?: string) => value && value !== "#"

  if (!project) {
    return (
      <div className="py-20">
        <div className="container max-w-3xl space-y-6">
          <Card className="p-6 space-y-4">
            <h1 className="text-2xl font-bold">Case study not found</h1>
            <p className="text-muted-foreground">
              The project you’re trying to view isn’t available. Please return to Projects and try another case study.
            </p>
            <Button asChild>
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="py-20">
      <div className="container max-w-4xl">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <div className="space-y-8">
          {/* Hero */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded uppercase">
                {project.category}
              </span>
              {project.tech.slice(0, 3).map((tech) => (
                <span key={tech} className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded">
                  {tech}
                </span>
              ))}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold">{project.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div>
                <span className="font-semibold">Role:</span> {project.role}
              </div>
              <div>
                <span className="font-semibold">Timeline:</span> {project.timeline}
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              <Card className="p-4">
                <p className="text-xs font-semibold uppercase text-primary">Summary</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.summary}</p>
              </Card>
              <Card className="p-4">
                <p className="text-xs font-semibold uppercase text-primary">Tech</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.slice(0, 6).map((tech) => (
                    <span key={tech} className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
              <Card className="p-4">
                <p className="text-xs font-semibold uppercase text-primary">Links</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {hasLink(project.links.demo) && (
                    <Button asChild size="sm">
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {hasLink(project.links.github) ? (
                    <Button asChild size="sm" variant="outline">
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  ) : (
                    <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                      GitHub on request
                    </span>
                  )}
                </div>
              </Card>
            </div>

            <Card className="p-6 space-y-3">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <h2 className="text-xl font-semibold">Case Study Brief</h2>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase">
                  {project.category}
                </span>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase text-primary">Business Need</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase text-primary">Approach</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
                </div>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase text-primary">Role</p>
                  <p className="text-sm text-muted-foreground">{project.role}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase text-primary">Timeline</p>
                  <p className="text-sm text-muted-foreground">{project.timeline}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase text-primary">Architecture</p>
                  <p className="text-sm text-muted-foreground">{project.architecture}</p>
                </div>
              </div>
              {project.outcomes && project.outcomes.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase text-primary">Results</p>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex flex-wrap gap-2">
                {hasLink(project.links.demo) && (
                  <Button asChild size="sm">
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {hasLink(project.links.github) && (
                  <Button asChild size="sm" variant="outline">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          </div>

          {/* Hero Image */}
          {project.images[0] && (
            <div className="rounded-xl overflow-hidden border">
              <Image
                src={project.images[0] || "/placeholder.svg"}
                alt={project.title}
                width={1200}
                height={600}
                sizes="(min-width: 1024px) 900px, 100vw"
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Gallery */}
          {project.images.length > 1 && (
            <Card className="p-4">
              <h2 className="text-xl font-semibold mb-3">Gallery</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {project.images.slice(1).map((img, i) => (
                  <div key={img + i} className="overflow-hidden rounded-lg border">
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${i + 2}`}
                      width={800}
                      height={450}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Problem */}
          {project.problem && (
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Problem</h2>
              <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
            </Card>
          )}

          {/* Solution */}
          {project.solution && (
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </Card>
          )}

          {/* Architecture */}
          {project.architecture && (
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Architecture</h2>
              <div className="flex flex-wrap gap-3">
                {project.architecture.split("|").map((part, i) => (
                  <div key={i} className="px-4 py-2 bg-muted rounded-lg text-sm font-medium">
                    {part.trim()}
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {/* Challenges & Learning */}
          {(project.challenges || project.learned || (project.outcomes && project.outcomes.length > 0)) && (
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Challenges & What I Learned</h2>
              <div className="space-y-4">
                {project.challenges && (
                  <div>
                    <h3 className="font-semibold mb-2">Challenges:</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.challenges}</p>
                  </div>
                )}
                {project.learned && (
                  <div>
                    <h3 className="font-semibold mb-2">What I Learned:</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.learned}</p>
                  </div>
                )}
                {project.outcomes && project.outcomes.length > 0 && (
                  <div>
                    <h3 className="font-semibold mb-2">Outcomes:</h3>
                    <ul className="space-y-2">
                      {project.outcomes.map((outcome: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span className="leading-relaxed">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
