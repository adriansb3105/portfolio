"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./motion";

const technologies = [
  {
    category: "Backend",
    items: [
      { name: "Java", icon: "☕" },
      { name: "Spring Boot", icon: "🍃" },
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "📘" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Redux", icon: "🔮" },
      { name: "GraphQL", icon: "◈" },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "☸️" },
      { name: "AWS", icon: "☁️" },
      { name: "CI/CD", icon: "🔄" },
      { name: "Git", icon: "📂" },
      { name: "Linux", icon: "🐧" },
    ],
  },
];

export function TechStack() {
  return (
    <section id="tech" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tech Stack
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl">
            Technologies I work with daily to build robust, scalable solutions.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {technologies.map((category) => (
            <StaggerItem key={category.category}>
              <div className="bg-card rounded-2xl border border-border p-6 hover:border-primary/50 transition-colors h-full">
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {category.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors group"
                    >
                      <span className="text-lg" role="img" aria-hidden="true">
                        {tech.icon}
                      </span>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
