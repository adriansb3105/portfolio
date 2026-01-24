"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./motion";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "15+", label: "Technologies Mastered" },
  { value: "100%", label: "Client Satisfaction" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <FadeIn delay={0.1} className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a passionate software engineer with over a decade of
              experience building robust, scalable applications. My journey
              began with Java enterprise systems and evolved into full-stack
              development with modern React ecosystems.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Currently, I specialize in architecting microservices and creating
              intuitive user interfaces that bridge complex backend systems with
              seamless user experiences.
            </p>
          </FadeIn>

          {/* Right Column */}
          <div className="space-y-6">
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Beyond coding, I'm deeply invested in mentoring junior developers,
                contributing to open-source projects, and staying current with
                emerging technologies. I believe in writing clean, maintainable
                code that stands the test of time.
              </p>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                    <p className="text-3xl font-bold text-primary mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
