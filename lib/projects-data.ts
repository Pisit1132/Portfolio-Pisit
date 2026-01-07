export interface Project {
  slug: string
  title: string
  summary: string
  description: string
  role: string
  timeline: string
  tech: string[]
  category: "frontend" | "fullstack" | "backend" | "aws"
  featured: boolean
  links: {
    demo?: string
    github?: string
    case?: string
  }
  images: string[]
  problem?: string
  solution?: string
  architecture?: string
  features?: string[]
  challenges?: string
  learned?: string
  outcomes?: string[]
}

export const projects: Project[] = [
  {
    slug: "vehicle-marketplace",
    title: "Used Car Marketplace",
    summary: "Jing Jai used-car marketplace with inventory, lead capture, and internal integrations",
    description:
      "A comprehensive Jing Jai used-car marketplace connecting buyers and sellers with tight integration to internal dealer operations, inventory, and lead routing. Built to be fast, trustworthy, and automation-friendly.",
    role: "Full Stack Developer",
    timeline: "Dec 2024 - Present",
    tech: ["React", "Next.js", "Node.js", "MySQL", "TypeScript"],
    category: "fullstack",
    featured: true,
    links: {
      demo: "https://jingjai.thairunggroup.co.th/",
      github: "#",
    },
    images: [
      "/jingjai.png",
      "/jingjai/Screenshot 2026-01-05 195758.png",
      "/jingjai/Screenshot 2026-01-05 195816.png",
      "/jingjai/Screenshot 2026-01-05 195836.png",
      "/jingjai/Screenshot 2026-01-05 195905.png",
      "/jingjai/Screenshot 2026-01-05 195918.png",
    ],
    problem:
      "ThaiRung Partner needed a modern platform to streamline their vehicle marketplace operations and integrate with existing internal systems.",
    solution:
      "Built a full-stack marketplace using Next.js (App Router) and Node.js + MySQL services. Added lead capture flows, listing automation, image handling, and integrated internal dealer tools.",
    architecture: "Next.js App Router + React Server Components | Node.js REST API | MySQL Database | AWS Hosting",
    features: [
      "Real-time vehicle listings with advanced filtering",
      "Integrated payment processing",
      "Admin dashboard for inventory management",
      "Mobile-responsive design",
      "Performance optimizations for large datasets",
    ],
    challenges: "Integrating with legacy dealer systems while keeping performance and release cadence high.",
    learned:
      "Balanced DX, SSR performance, and legacy integrations; improved release cadence while adding automation.",
    outcomes: [
      "Improved release cadence on Jing Jai marketplace (2025) with automated flows",
      "Reduced manual listing effort by ~20% via asset and data automation",
      "Kept availability at 99.9% during new launches",
    ],
  },
  {
    slug: "customer-insights-dashboard",
    title: "Client Insights & CRM Dashboard",
    summary: "Backend + dashboard service to track customers, deals, and follow-ups",
    description:
      "A customer insights + CRM dashboard with REST APIs, auth, and reporting to centralize client data, follow-ups, and revenue KPIs for a p&a agency.",
    role: "Full Stack Developer",
    timeline: "2024",
    tech: ["Next.js", "Node.js", "PostgreSQL", "TypeScript", "Tailwind"],
    category: "fullstack",
    featured: true,
    links: {
      demo: "#",
      github: "#",
    },
    images: ["/p&aagency.png"],
    problem: "Fragmented spreadsheets made it difficult to track customer touchpoints and pipeline health.",
    solution:
      "Built secure REST endpoints, dashboards, and reminders so sales and ops teams can see pipeline status, follow-ups, and KPIs in one place.",
    architecture: "Next.js + API routes | PostgreSQL | Auth + RBAC | Charting for KPIs",
    features: [
      "Customer, deal, and task tracking with role-based access",
      "Activity timeline and reminders",
      "Pipeline and revenue reporting",
      "Exports for finance and operations",
    ],
    challenges: "Designing permissions that fit both sales and ops teams without slowing them down.",
    learned: "Balanced DX and security while keeping latency low for dashboard queries.",
    outcomes: [
      "Improved follow-up visibility; fewer dropped leads",
      "Faster reporting cycles for finance/ops via exports",
    ],
  },
  {
    slug: "competency-assessment",
    title: "Competency Assessment Portal",
    summary: "Intern project at Western Digital to track skills, ratings, and discrepancies",
    description:
      "A responsive competency assessment app for Western Digital internship: employees and supervisors record and compare skill levels with printable reports.",
    role: "Full Stack Developer Intern",
    timeline: "Aug 2024 - Nov 2024",
    tech: ["React", "Next.js", "TypeScript", "Tailwind", "Node.js"],
    category: "frontend",
    featured: true,
    links: {
      demo: "#",
      github: "#",
    },
    images: ["/wd.png"],
    problem: "Teams needed a simple way to view skill levels and discrepancies across roles.",
    solution:
      "Implemented a responsive dashboard with sortable tables, role-based views, and printable reports for reviews.",
    architecture: "React/Next.js SPA | REST API backend | Table sorting/filtering | Auth",
    features: [
      "Skill matrix with employee vs supervisor ratings",
      "Search, sort, and filter for topics and lessons",
      "Export/print friendly layouts",
      "Responsive design for laptop and tablet",
    ],
    challenges: "Keeping UI lightweight while handling many rows and filters.",
    learned: "Improved UX for data-dense layouts and accessibility in tables.",
    outcomes: [
      "Created a lightweight, printable view for supervisor reviews",
      "Enabled quick discrepancy scanning via sortable/filterable tables",
    ],
  },
  {
    slug: "outsystems-modernization",
    title: "OutSystems Modernization",
    summary: "Rebuilt legacy OutSystems functions into modern web apps",
    description:
      "Modernized legacy OutSystems applications by rebuilding them with Vue.js and TypeScript, improving performance and maintainability.",
    role: "Frontend Developer",
    timeline: "Dec 2024 - Present",
    tech: ["Vue.js", "TypeScript", "Vite", "Pinia"],
    category: "frontend",
    featured: true,
    links: {
      github: "#",
    },
    images: ["/modern-web-dashboard.png"],
    problem: "Legacy OutSystems applications were difficult to maintain and lacked modern development workflows.",
    solution: "Translated OutSystems logic into clean, maintainable Vue.js components with TypeScript for type safety.",
    architecture: "Vue 3 Composition API | TypeScript | Vite Build Tool | Pinia State Management",
    features: [
      "Component-based architecture",
      "Type-safe development with TypeScript",
      "Improved load times and performance",
      "Modern development tooling",
      "Enhanced user experience",
    ],
    challenges: "Understanding complex OutSystems logic and translating it into modern JavaScript patterns.",
    learned: "Developed expertise in migrating legacy systems to modern frameworks while preserving business logic.",
    outcomes: [
      "Reduced regression risk with type-safe Vue + TS components",
      "Improved build times and DX with Vite + Pinia",
      "Clearer ownership via componentized, documented features",
    ],
  },
  {
    slug: "music-search-api",
    title: "Music Search API",
    summary: "REST API + MongoDB music-search application",
    description:
      "Built during study abroad at University of Groningen: a REST API with MongoDB text search, pagination, and filters for music metadata.",
    role: "Backend Developer",
    timeline: "Study Abroad Project",
    tech: ["Node.js", "Express", "MongoDB", "REST API"],
    category: "backend",
    featured: true,
    links: {
      github: "#",
    },
    images: ["/music-api-interface.jpg"],
    problem: "Needed to create a scalable music search system with complex query capabilities.",
    solution: "Developed a RESTful API with MongoDB for flexible document storage and efficient text search.",
    architecture: "Node.js + Express | MongoDB with Text Indexes | RESTful API Design",
    features: [
      "Full-text search across music metadata",
      "Advanced filtering and sorting",
      "Pagination for large result sets",
      "API rate limiting and authentication",
      "Comprehensive API documentation",
    ],
    challenges: "Optimizing MongoDB queries for performance with large datasets.",
    learned: "Gained solid understanding of RESTful API design principles and NoSQL database optimization.",
    outcomes: [
      "Delivered consistent sub-100ms queries on indexed fields for typical searches",
      "Documented endpoints and auth/rate-limits for easier handoff",
    ],
  },
  {
    slug: "workflow-automation",
    title: "Internal Workflow Tools",
    summary: "Engineering workflow automation for Western Digital",
    description: "Created internal tools to streamline daily operations for engineering teams at Western Digital.",
    role: "Full Stack Developer Intern",
    timeline: "Aug 2024 - Nov 2024",
    tech: ["React", "Node.js", "MySQL", "HTML", "CSS"],
    category: "fullstack",
    featured: false,
    links: {},
    images: ["/workflow-automation-tool.png"],
    problem: "Engineering teams needed better tools to manage their daily workflows and reduce manual processes.",
    solution: "Built responsive web applications with React frontend and Node.js backend to automate repetitive tasks.",
    architecture: "React SPA | Node.js REST API | MySQL Database",
    features: [
      "Task automation dashboard",
      "Real-time status updates",
      "User-friendly interface",
      "Data visualization",
      "Role-based access control",
    ],
    challenges: "Understanding complex engineering workflows and translating them into intuitive interfaces.",
    learned:
      "Improved ability to gather requirements from stakeholders and deliver solutions that improve team efficiency.",
    outcomes: [
      "Automated recurring tasks that previously required manual updates",
      "Provided real-time status visibility to reduce check-in overhead",
    ],
  },
]

export const getFeaturedProjects = () => projects.filter((p) => p.featured)
export const getProjectBySlug = (slug: string) => {
  const normalized = decodeURIComponent(slug).toLowerCase()
  return projects.find((p) => p.slug.toLowerCase() === normalized)
}
export const getProjectsByCategory = (category: string) =>
  category === "all" ? projects : projects.filter((p) => p.category === category)
