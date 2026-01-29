"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { FadeIn } from "./motion";

const experience = [
  {
    date: "May 2025 - December 2025",
    title: "Senior Software Engineer",
    company: "Lancesoft Inc. (Client: McKinsey & Company)",
    description:
      "Designed and delivered full-stack features using Java, Spring Boot, and React within AWS-hosted microservices. Improved deployment reliability and system scalability through CI/CD optimization, Docker, and Kubernetes.",
  },
  {
    date: "September 2019 — May 2025",
    title: "Software Engineer",
    company: "TeKnowledge (Client: OpenText)",
    description:
      "Key contributor to Fortify enterprise security and static analysis platforms, maintaining large-scale Java and Spring Boot systems. Automated build and release pipelines across Azure DevOps and AWS, accelerating delivery and ensuring production stability.",
  },
  {
    date: "July 2021 - December 2021",
    title: "Software Engineer",
    company: "Lanamme UCR (Half-Time Intern)",
    description:
      "Built internal asset management tools using C#, ASP.NET, and SQL Server for research operations. Collaborated in requirements analysis, database design, and stakeholder alignment to deliver practical solutions.",
  },
]

const education = [
    {
    date: "2022 - Present",
    title: "Licentiate Degree in Computer Engineering and Project Management",
    company: "Universidad Estatal a Distancia (UNED), Costa Rica",
    description:
      "Focused on advanced software engineering practices and technical project leadership.",
    type: "education" as const,
  },
  {
    date: "2014 - 2022",
    title: "Bachelor's Degree in Software Engineering for Information Systems",
    company: "Universidad de Costa Rica, Costa Rica",
    description:
    "Strong foundation in software architecture, databases, and enterprise system development.",
    type: "education" as const,
  },
  {
    date: "2013 - 2014",
    title: "Senior Technician in Service Center",
    company: "CENFOTEC University, Costa Rica",
    description:
    "Hands-on technical training in IT support, systems maintenance, and troubleshooting.",
    type: "education" as const,
  },
  {
    date: "2025",
    title: "Ethereum Developer Pack Course",
    company: "CENFOTEC University, Costa Rica",
    description:
      "Advanced training in Ethereum development and Solidity best practices.",
    type: "certification" as const,
  },
  {
    date: "2024",
    title: "Web3 Certification: Blockchain, Solidity, and Governance with Optimism",
    company: "CENFOTEC University, Costa Rica",
    description:
      "Practical exposure to smart contracts, decentralized systems, and governance models.",
    type: "certification" as const,
  },
]

interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  description: string;
  isLast: boolean;
  index: number;
}

function TimelineItem({
  date,
  title,
  company,
  description,
  isLast,
  index,
}: TimelineItemProps) {
  return (
    <motion.div
      className="relative pl-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-[7px] top-6 bottom-0 w-px bg-border" />
      )}

      {/* Dot */}
      <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-primary border-4 border-background shadow-sm shadow-primary/20" />

      <div className="pb-10">
        <span className="text-xs text-primary font-medium tracking-wide uppercase">
          {date}
        </span>
        <h4 className="text-lg font-semibold text-foreground mt-1">{title}</h4>
        <p className="text-sm text-muted-foreground mb-2">{company}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

interface EducationItemProps {
  date: string;
  title: string;
  company: string;
  description: string;
  type: "education" | "certification";
  isLast: boolean;
  index: number;
}

function EducationItem({
  date,
  title,
  company,
  description,
  type,
  isLast,
  index,
}: EducationItemProps) {
  return (
    <motion.div
      className="relative pl-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-[7px] top-6 bottom-0 w-px bg-border" />
      )}

      {/* Icon dot */}
      <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-primary border-4 border-background shadow-sm shadow-primary/20 flex items-center justify-center">
        {type === "certification" && (
          <Award className="w-2 h-2 text-primary-foreground" />
        )}
      </div>

      <div className="pb-10">
        <div className="flex items-center gap-2">
          <span className="text-xs text-primary font-medium tracking-wide uppercase">
            {date}
          </span>
          {type === "certification" && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-medium">
              Certification
            </span>
          )}
        </div>
        <h4 className="text-lg font-semibold text-foreground mt-1">{title}</h4>
        <p className="text-sm text-muted-foreground mb-2">{company}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function Timeline() {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Professional Experience */}
          <div>
            <FadeIn>
              <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-primary" />
                Professional Experience
              </h3>
            </FadeIn>
            <div>
              {experience.map((item, index) => (
                <TimelineItem
                  key={item.title + item.company}
                  {...item}
                  index={index}
                  isLast={index === experience.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <FadeIn>
              <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education & Certifications
              </h3>
            </FadeIn>
            <div>
              {education.map((item, index) => (
                <EducationItem
                  key={item.title + item.company}
                  {...item}
                  index={index}
                  isLast={index === education.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
