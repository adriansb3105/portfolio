# 💼 Adrian Serrano – Developer Portfolio

Modern, professional, and responsive developer portfolio built with **Next.js**, **React**, and **Tailwind CSS**.  
Designed to showcase experience, projects, and technical background with a clean, senior-level aesthetic.

🔗 **Live Demo:** https://your-domain.com  
📄 **Download CV:** Available directly from the website

---

## ✨ Features

- 🌙 Dark mode by default (clean & professional)
- 🎞️ Elegant animations using **Framer Motion**
- 🧭 Dual timeline layout:
  - **Left:** Professional Experience  
  - **Right:** Education, Certifications & Courses
- 📄 Downloadable CV (PDF)
- 📱 Fully responsive (mobile → desktop)
- 🔍 SEO optimized using Next.js Metadata API
- ♻️ Reusable, clean, and maintainable components

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **UI:** React
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

---

## 📁 Project Structure

```bash
src/
 ├─ app/
 │   ├─ layout.tsx        # Global layout & SEO metadata
 │   ├─ page.tsx          # Main page
 │   ├─ globals.css
 │
 ├─ components/
 │   ├─ Navbar.tsx
 │   ├─ Hero.tsx
 │   ├─ ExperienceEducation.tsx
 │   ├─ Timeline/
 │   │   ├─ Timeline.tsx
 │   │   └─ TimelineItem.tsx
 │   ├─ Projects.tsx
 │   └─ Contact.tsx
 │
 ├─ data/
 │   ├─ experience.ts
 │   ├─ education.ts
 │   └─ projects.ts
 │
 └─ public/
     └─ cv/
         └─ Adrian_Serrano_CV.pdf
