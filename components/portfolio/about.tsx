"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./motion";

const stats = [
  { value: "9+", label: "Years Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "20+", label: "Technologies Mastered" },
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
              I'm a full-stack software engineer with a 
              strong focus on performance and scalability. I'm especially 
              motivated by enterprise and product-driven projects that solve 
              real problems and require thoughtful technical decisions.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I work comfortably across the stack and have a strong interest 
              in cloud-based architectures, always aiming to build efficient, 
              reliable, and maintainable solutions. I approach software development 
              analytically, valuing clarity, long-term sustainability, and 
              pragmatic engineering over trends or hype.
            </p>
          </FadeIn>

          {/* Right Column */}
          <div className="space-y-6">
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Outside of tech, I enjoy staying active through sports and music, 
                which helps me maintain balance and focus—qualities I bring back 
                into my work as an engineer.
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
