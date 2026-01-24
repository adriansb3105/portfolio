"use client";

import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A high-performance e-commerce solution handling 100K+ daily transactions with React frontend and Java microservices backend.",
    tags: ["React", "Java", "Spring Boot", "PostgreSQL", "Redis"],
    link: "#",
  },
  {
    title: "Real-Time Analytics Dashboard",
    description:
      "Live data visualization platform processing millions of events per minute with WebSocket connections and D3.js charts.",
    tags: ["Next.js", "TypeScript", "Kafka", "Elasticsearch", "D3.js"],
    link: "#",
  },
  {
    title: "Healthcare Management System",
    description:
      "HIPAA-compliant patient management system with secure data handling, appointment scheduling, and telemedicine integration.",
    tags: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
    link: "#",
  },
  {
    title: "Financial Trading Platform",
    description:
      "Low-latency trading application with real-time market data feeds, order management, and risk assessment algorithms.",
    tags: ["Java", "Spring Boot", "React", "WebSocket", "Kubernetes"],
    link: "#",
  },
  {
    title: "Open Source CLI Tool",
    description:
      "Developer productivity tool with 5K+ GitHub stars. Automates common development workflows and integrations.",
    tags: ["TypeScript", "Node.js", "CLI", "Open Source"],
    link: "#",
  },
  {
    title: "Mobile Banking App",
    description:
      "Cross-platform mobile application serving 500K+ users with biometric authentication and instant payments.",
    tags: ["React Native", "Java", "GraphQL", "AWS Lambda"],
    link: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl">
            A selection of projects I've worked on throughout my career.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <article className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full flex flex-col">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-secondary text-muted-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary hover:bg-primary/10 p-0 self-start"
                  asChild
                >
                  <a
                    href={project.link}
                    className="flex items-center gap-2"
                    aria-label={`View ${project.title} project`}
                  >
                    View Project
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </Button>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
