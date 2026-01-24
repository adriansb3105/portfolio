"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { FadeIn } from "./motion";

export type TimelineEntryType = "experience" | "education" | "certification";

export interface TimelineEntry {
  date: string;
  title: string;
  organization: string;
  description: string;
  type: TimelineEntryType;
}

const experienceData: TimelineEntry[] = [
  {
    date: "2021 — Present",
    title: "Senior Full Stack Developer",
    organization: "TechCorp Global",
    description:
      "Leading development of microservices architecture serving 2M+ users. Mentoring team of 5 developers and driving technical decisions.",
    type: "experience",
  },
  {
    date: "2018 — 2021",
    title: "Full Stack Developer",
    organization: "InnovateTech Solutions",
    description:
      "Built and maintained React applications with Java Spring Boot backends. Improved API response times by 40%.",
    type: "experience",
  },
  {
    date: "2015 — 2018",
    title: "Java Developer",
    organization: "Enterprise Systems Inc.",
    description:
      "Developed enterprise Java applications for financial sector. Implemented secure payment processing systems.",
    type: "experience",
  },
  {
    date: "2013 — 2015",
    title: "Junior Developer",
    organization: "StartupHub",
    description:
      "Started career building web applications. Learned agile methodologies and collaborative development practices.",
    type: "experience",
  },
];

const educationData: TimelineEntry[] = [
  {
    date: "2023",
    title: "AWS Solutions Architect",
    organization: "Amazon Web Services",
    description:
      "Professional certification for designing distributed systems on AWS cloud infrastructure.",
    type: "certification",
  },
  {
    date: "2022",
    title: "Kubernetes Administrator",
    organization: "CNCF",
    description:
      "Certified Kubernetes Administrator (CKA) for container orchestration and cluster management.",
    type: "certification",
  },
  {
    date: "2020",
    title: "Spring Professional",
    organization: "VMware",
    description:
      "Professional certification for Spring Framework and Spring Boot development.",
    type: "certification",
  },
  {
    date: "2009 — 2013",
    title: "B.S. Computer Science",
    organization: "MIT",
    description:
      "Bachelor's degree with focus on software engineering and distributed systems. Graduated with honors.",
    type: "education",
  },
];

interface TimelineIconProps {
  type: TimelineEntryType;
}

function TimelineIcon({ type }: TimelineIconProps) {
  const iconClass = "w-4 h-4 text-primary-foreground";

  switch (type) {
    case "experience":
      return <Briefcase className={iconClass} />;
    case "education":
      return <GraduationCap className={iconClass} />;
    case "certification":
      return <Award className={iconClass} />;
    default:
      return <Briefcase className={iconClass} />;
  }
}

interface TimelineBadgeProps {
  type: TimelineEntryType;
}

function TimelineBadge({ type }: TimelineBadgeProps) {
  const labels: Record<TimelineEntryType, string> = {
    experience: "Experience",
    education: "Education",
    certification: "Certification",
  };

  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
      {labels[type]}
    </span>
  );
}

interface TimelineItemProps {
  entry: TimelineEntry;
  isLast: boolean;
  side: "left" | "right";
  index: number;
}

function TimelineItem({ entry, isLast, side, index }: TimelineItemProps) {
  const { date, title, organization, description, type } = entry;

  return (
    <motion.div
      className="relative pb-10 last:pb-0"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {/* Vertical line */}
      {!isLast && (
        <div
          className={`absolute top-10 bottom-0 w-px bg-border ${
            side === "left" ? "right-0" : "left-0"
          }`}
        />
      )}

      {/* Icon circle */}
      <div
        className={`absolute top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20 z-10 ${
          side === "left" ? "-right-4" : "-left-4"
        }`}
      >
        <TimelineIcon type={type} />
      </div>

      {/* Content */}
      <div className={`${side === "left" ? "pr-8 text-right" : "pl-8"}`}>
        <div
          className={`flex flex-wrap items-center gap-2 mb-2 ${
            side === "left" ? "justify-end" : "justify-start"
          }`}
        >
          <span className="text-xs text-primary font-semibold tracking-wide uppercase">
            {date}
          </span>
          <TimelineBadge type={type} />
        </div>
        <h4 className="text-base font-semibold text-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground mb-2">{organization}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

interface TimelineColumnProps {
  entries: TimelineEntry[];
  side: "left" | "right";
  title: string;
}

export function TimelineColumn({ entries, side, title }: TimelineColumnProps) {
  return (
    <div className="flex-1">
      <FadeIn>
        <h3
          className={`text-lg font-semibold text-foreground mb-8 ${
            side === "left" ? "text-right pr-4" : "text-left pl-4"
          }`}
        >
          {title}
        </h3>
      </FadeIn>
      <div className="relative">
        {entries.map((entry, index) => (
          <TimelineItem
            key={`${entry.title}-${entry.organization}`}
            entry={entry}
            isLast={index === entries.length - 1}
            side={side}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

interface TimelineListProps {
  entries: TimelineEntry[];
  side?: "left" | "right";
}

export function TimelineList({ entries, side = "right" }: TimelineListProps) {
  return (
    <div className="relative">
      {entries.map((entry, index) => (
        <TimelineItem
          key={`${entry.title}-${entry.organization}`}
          entry={entry}
          isLast={index === entries.length - 1}
          side={side}
          index={index}
        />
      ))}
    </div>
  );
}

export function Timeline() {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Experience & Education
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A journey of continuous growth, learning, and professional
            achievement.
          </p>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mt-6" />
        </FadeIn>

        {/* Mobile: stacked timelines */}
        <div className="md:hidden space-y-12">
          <div>
            <FadeIn>
              <h3 className="text-lg font-semibold text-foreground mb-6 pl-4">
                Professional Experience
              </h3>
            </FadeIn>
            <TimelineList entries={experienceData} side="right" />
          </div>
          <div>
            <FadeIn>
              <h3 className="text-lg font-semibold text-foreground mb-6 pl-4">
                Education & Certifications
              </h3>
            </FadeIn>
            <TimelineList entries={educationData} side="right" />
          </div>
        </div>

        {/* Desktop: two-sided timeline */}
        <div className="hidden md:flex relative">
          {/* Center vertical line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"
            initial={{ scaleY: 0, transformOrigin: "top" }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* Left side - Experience */}
          <TimelineColumn
            entries={experienceData}
            side="left"
            title="Professional Experience"
          />

          {/* Right side - Education */}
          <TimelineColumn
            entries={educationData}
            side="right"
            title="Education & Certifications"
          />
        </div>
      </div>
    </section>
  );
}
