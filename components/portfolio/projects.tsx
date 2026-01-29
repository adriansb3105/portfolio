"use client";

import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion";

const projects = [
  {
    title: "Creaciones Princess",
    description:
      "Website for the business Creaciones Princess, a family business that creates pastries, baked goods, artisan bread, planners, notebooks, bookbinding, crafts, scrapbooking and much more with love and dedication.",
    tags: ["Next.js", "React.js", "TailwindCSS"],
    link: "https://creacionesprincess.com/",
  },
  {
    title: "DeFi Yield Farming DApp",
    description:
      "This project is a Yield Farming platform that allows users to deposit LP tokens, earn rewards in a DAPP, and easily manage their funds from a modern web interface.",
    tags: ["Next.js", "TypeScript", "Solidity", "Hardhat", "Wagmi and RainbowKit"],
    link: "https://github.com/adriansb3105/defi-yield-farming",
  },
  {
    title: "Pathology Cards",
    description:
      "Website to include the terms, images and descriptions of the course Pathology.",
    tags: ["Next.js", "React.js", "TypeScript", "Cloudinary", "CSS"],
    link: "https://tarjetas-patologia-2.vercel.app/",
  },
  {
    title: "Tesla landing",
    description:
      "Tesla landing website.",
    tags: ["HTML", "CSS", "JavaScript", "Astro", "TailwindCSS"],
    link: "https://teslalandingsiteclone.netlify.app/",
  },
  {
    title: "Budget Execution Platform",
    description:
      "Platform that allows the division and control of the institutional budget.",
    tags: ["HTML", "CSS", "JavaScript", "C# .NET"],
    link: "https://github.com/adriansb3105/Plataforma-Ejecucion-Presupuestaria",
  },
  {
    title: "DearGift",
    description:
      "Mobile application to find the correct gift to that special person.",
    tags: ["Apache Cordova", "HTML", "CSS", "JavaScrip", "PHP"],
    link: "https://github.com/adriansb3105/deargift",
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
                    target="blank"
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
