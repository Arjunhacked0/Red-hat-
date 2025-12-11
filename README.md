# RHCSA UI Clone – React + Tailwind CSS (0 to Pro Edition)

A complete, production‑grade, pixel‑perfect clone of the given RHCSA Landing Page UI — built from **Zero to Pro level** using **React, TypeScript, Tailwind CSS, Vite**, and a fully modular component architecture.

This README will guide you from absolute beginner level to professional, industry‑ready level — covering setup, folder structure, components, deployment, optimization, and best practices.

A pixel-perfect clone of the RHCSA Training UI provided during an interview round. This project is built using **React + Vite + Tailwind CSS** and aims to replicate the design with **100% accuracy**, matching font style, color, spacing, gradients, shadows, icons, animations, and layout.

This project demonstrates professional-level front‑end development, UI/UX accuracy, component structuring, clean code, and modern React development practices.

---

## 🚀 Live Demo

(You can add your deployed link here)

---

## 🎯 Objective

The goal of the assignment was to **recreate the given UI exactly** as shown in the screenshot. This includes:

* Identical color combinations
* Perfect font sizes & weights
* Accurate spacing and layout
* Same gradients, glows & shadows
* Responsive behaviour
* Full section‑wise clone with reusable components

---

## 🖼️ Provided UI Screenshot

(Add the screenshot provided in the interview here)

---

## 🛠️ Tech Stack

* **React (Vite)** – Fast & modern frontend setup
* **Tailwind CSS** – Utility-first CSS framework
* **Lucide Icons / Heroicons** – For UI icons
* **Google Fonts** – For font matching

---

## 📦 Folder Structure

```
Red Hat Assignment
│
├── components
│   ├── CTASection.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── RhcsaSection.tsx
│   ├── ServicesSection.tsx
│   ├── Testimonials.tsx
│   ├── TrainingSection.tsx
│
├── Images
│   ├── Build Secure & Scalable Infrastructure.jpg
│   ├── HeroSection.png
│   ├── Lock in cloude.png
│   ├── Logo.jpg
│   ├── RedHatLogo.png
│   ├── RHCSA.png
│
├── node_modules
│
├── .env.local
├── .gitignore
├── App.tsx
├── constants.tsx
├── index.html
├── index.tsx
├── metadata.json
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
├── types.ts
├── vite-env.d.ts
└── vite.config.ts

```

---

## 🎨 Color Palette (Extracted from UI)

```
Purple Gradient: #a855f7 → #ec4899
Text White: #ffffff
Light Gray Text: #cbd5e1
Neon Blue: #3b82f6
Neon Green: #22c55e
Red Alert: #ef4444
Dark Background: #0b0f19 / #0f111a
Card Background: rgba(255, 255, 255, 0.05)
Shadow Glow: rgba(66, 133, 244, 0.4)
```

---

## 📌 Key UI Features Implemented

✅ Perfect typography matching

✅ Same spacing, margin, and padding as screenshot

✅ Gradient headings identical to original

✅ Glassmorphism cards

✅ Floating cube graphics recreated using PNG/SVG

✅ Button glow effects recreated using Tailwind drop-shadow

✅ Responsive layout for all devices

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/rhcsa-ui-clone.git
cd rhcsa-ui-clone
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start Development Server

```bash
npm run dev
```

### 4️⃣ Build for Production

```bash
npm run build
```

---

## 🧩 Sample Component (Hero Section)

```jsx
export default function Hero() {
  return (
    <section className="text-white py-24 px-6 lg:px-20 bg-[#0b0f19]">
      <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          RHCSA Certification &
        </span>
        <br />
        Enterprise Cloud Solutions
      </h1>

      <p className="text-slate-300 mt-6 max-w-2xl text-lg">
        Master Red Hat Enterprise Linux and accelerate your career with
        industry-recognized certifications and hands-on cloud training.
      </p>

      <div className="flex gap-6 mt-10">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl shadow-lg shadow-blue-500/30 transition">
          Enroll for RHCSA / Training
        </button>
        <button className="bg-white/5 border border-white/20 text-white px-8 py-4 rounded-xl transition hover:bg-white/10">
          View Courses
        </button>
      </div>
    </section>
  );
}
```

---

## 🧪 QA Checklist (Used Before Submission)

### ✔ Visual Accuracy

* Gradient colors match exactly
* Font sizes same as screenshot
* Margins/paddings checked through pixel comparison
* Icons & graphics aligned perfectly

### ✔ Code Quality

* Clean & reusable components
* Mobile responsive
* No unused files
* Tailwind classes optimized

### ✔ Functional Items

* Hover effects
* Shadows & glows
* Button states
* Modern layout behavior

---

## 📚 Learning Outcomes

* Mastery of **pixel‑perfect UI development**
* Tailwind CSS advanced usage
* Component-based thinking
* Real-world UI recreation skills (common in frontend interviews)

---

## 🔥 Why This Project Is Valuable

This UI clone demonstrates:

* Attention to detail
* Professional UI development workflow
* Tailwind mastery
* Ability to convert static designs into responsive React code
* Interview‑level precision & skills

This makes it an excellent portfolio addition.

---

## 🤝 Contributing

This is an interview assignment submission.
However, improvements are welcome. Fork and submit a pull request.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## ⭐ Support

If this helped you, please give the repo a **star** ⭐ to support future projects.

---

## 👨‍💻 Author

**Vinay Kumar Mahato**
Java Full‑Stack Developer | React | Spring Boot | MySQL | Educator

---
