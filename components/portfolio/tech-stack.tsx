"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./motion";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import type { LucideProps } from "lucide-react";

import {
  siSpringboot,
  siNodedotjs,
  siReact,
  siRedux,
  siTypescript,
  siJavascript,
  siTailwindcss,
  siDocker,
  siKubernetes,
  siMysql,
  siPostgresql,
  siMongodb,
  siJenkins,
  siGit,
  siJira,
  siJest,
  siCypress,
  siGraphql,
  siCss,
  siTerraform,
  siN8n,
  siPostman,
} from "simple-icons/icons";

import {
  Network,
  Workflow,
  ServerCog,
  Layers,
} from "lucide-react";

/* ───────────────── TYPES ───────────────── */

type SimpleIconType = {
  type: "simple";
  icon: {
    path: string;
    hex: string;
    title: string;
  };
};

type LucideIconType = {
  type: "lucide";
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

type SvgIconType = {
  type: "svg";
  src: string;
  title: string;
  scale?: number; // 👈 normalización visual
};

type TechIcon = SimpleIconType | LucideIconType | SvgIconType;

type Technology = {
  category: string;
  items: {
    name: string;
    icon?: TechIcon;
  }[];
};

type TechIconProps = {
  icon: TechIcon;
  size?: number;
};

/* ───────────────── ICON HELPERS ───────────────── */

const svg = (src: string, title: string, scale = 1): SvgIconType => ({
  type: "svg",
  src,
  title,
  scale,
});

const simple = (icon: SimpleIconType["icon"]): SimpleIconType => ({
  type: "simple",
  icon,
});

const lucide = (
  icon: LucideIconType["icon"]
): LucideIconType => ({
  type: "lucide",
  icon,
});

/* ───────────────── DATA ───────────────── */

const technologies: Technology[] = [
  {
    category: "Backend",
    items: [
      { name: "Java", icon: svg("/icons/java.svg", "Java", 1.1) },
      { name: "Spring Boot", icon: simple(siSpringboot) },
      { name: "Node.js", icon: simple(siNodedotjs) },
      { name: "Next.js", icon: svg("/icons/nextjs.svg", "Next.js", 1.1) },
      { name: "Microservices", icon: lucide(Network) },
      { name: "REST API", icon: lucide(ServerCog) },
      { name: "GraphQL", icon: simple(siGraphql) },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: simple(siReact) },
      { name: "Redux", icon: simple(siRedux) },
      { name: "Zustand", icon: svg("/icons/zustand.svg", "Zustand", 1.1) },
      { name: "JavaScript", icon: simple(siJavascript) },
      { name: "TypeScript", icon: simple(siTypescript) },
      { name: "CSS", icon: simple(siCss) },
      { name: "Tailwind CSS", icon: simple(siTailwindcss) },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: svg("/icons/AWS.svg", "AWS", 1.1) },
      { name: "Docker", icon: simple(siDocker) },
      { name: "Kubernetes", icon: simple(siKubernetes) },
      { name: "CI/CD", icon: svg("/icons/cicd.svg", "CI/CD", 1) },
      { name: "Jenkins", icon: simple(siJenkins) },
      { name: "n8n", icon: simple(siN8n) },
      { name: "Terraform", icon: simple(siTerraform) },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: simple(siMysql) },
      { name: "SQL Server", icon: svg("/icons/sqlserver.svg", "SQL Server", 1.1) },
      { name: "PostgreSQL", icon: simple(siPostgresql) },
      { name: "MongoDB", icon: simple(siMongodb) },
    ],
  },
  {
    category: "Testing",
    items: [
      { name: "Jest", icon: simple(siJest) },
      { name: "JUnit", icon: svg("/icons/junit.svg", "JUnit", 1.2) },
      { name: "Mockito", icon: svg("/icons/mockito.svg", "Mockito", 1.1) },
      { name: "Cypress", icon: simple(siCypress) },
      { name: "Playwright", icon: svg("/icons/playwright.svg", "Playwright", 1.1) },
    ],
  },
  {
    category: "Tools & Practices",
    items: [
      { name: "Git", icon: simple(siGit) },
      { name: "GitHub", icon: svg("/icons/github.svg", "GitHub", 1) },
      { name: "Jira", icon: simple(siJira) },
      { name: "Postman", icon: svg("/icons/postman.svg", "Postman", 1) },
      { name: "Agile / Scrum", icon: svg("/icons/scrum.svg", "Scrum", 1) },
    ],
  },
];

/* ───────────────── COMPONENT ───────────────── */

export function TechStack() {
  return (
    <section id="tech" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tech Stack
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl">
            Technologies I use to design, build, scale and maintain
            production-grade systems.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {technologies.map((category) => (
            <StaggerItem key={category.category}>
              <div className="bg-card rounded-2xl border border-border p-6 h-full">
                <h3 className="text-lg font-semibold mb-6">
                  {category.category}
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {category.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg"
                    >
                      {tech.icon && (
                        <TechIconRenderer icon={tech.icon} />
                      )}
                      <span className="text-sm text-muted-foreground">
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

/* ───────────────── ICON RENDERER ───────────────── */

function TechIconRenderer({ icon, size = 20 }: TechIconProps) {
  if (icon.type === "simple") {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={`#${icon.icon.hex}`}
        aria-label={icon.icon.title}
      >
        <path d={icon.icon.path} />
      </svg>
    );
  }

  if (icon.type === "svg") {
    return (
      <img
        src={icon.src}
        alt={icon.title}
        width={size}
        height={size}
        style={{
          transform: `scale(${icon.scale ?? 1})`,
        }}
      />
    );
  }

  const LucideIcon = icon.icon;
  return <LucideIcon size={size} strokeWidth={1.8} />;
}
