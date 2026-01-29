"use client";

import { FadeIn } from "./motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <FadeIn>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {currentYear} Adrian Serrano.
          </p>
          <nav>
            <ul className="flex items-center gap-6">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Back to Top
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </FadeIn>
    </footer>
  );
}
