# Naveen R | Robotics AI Engineer Portfolio

A premium, interactive, and high-performance personal portfolio website built to showcase expertise in **Robotics, Physical AI, Vision-Language-Action Models (VLAs), Edge AI, and Semiconductor Engineering**. 

The design is heavily inspired by the futuristic, glassmorphic, and dynamic aesthetics of top AI and hardware companies like NVIDIA, Tesla AI, OpenAI, and Figure AI.

![Portfolio Preview](./public/images/profile.png)

## 🚀 Live Demo
*(Add your Vercel deployment link here once published)*

---

## 🛠️ Technology Stack

This project is built using modern web development standards, ensuring high performance, responsive design, and an immersive 3D user experience.

### Core Frameworks & Languages
- **[Next.js 15 (App Router)](https://nextjs.org/)**: React framework utilized for Server-Side Rendering (SSR), optimized routing, and SEO.
- **[React 19](https://react.dev/)**: Core UI library.
- **[TypeScript](https://www.typescriptlang.org/)**: Strict static typing for robust and error-free code architecture.

### Styling & UI
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Utility-first CSS framework for building custom, responsive designs rapidly without leaving the HTML.
- **[Lucide React](https://lucide.dev/)**: Clean, consistent, and customizable SVG icons.
- **Glassmorphism**: Heavy use of backdrop-blur, semi-transparent backgrounds, and subtle gradient borders to create a premium, futuristic aesthetic.
- **next-themes**: Seamless Light/Dark mode switching.

### 3D & Animations
- **[Three.js](https://threejs.org/)**: Cross-browser JavaScript library and API used to create and display animated 3D computer graphics in a web browser using WebGL.
- **[React Three Fiber (R3F)](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)**: React renderer for Three.js, allowing declarative 3D scenes.
- **[Drei](https://github.com/pmndrs/drei)**: A growing collection of useful helpers and fully functional, ready-made abstractions for React Three Fiber.
- **[Framer Motion](https://www.framer.com/motion/)**: Production-ready animation library for React used for page transitions, scroll reveals, and micro-interactions.
- **[GSAP](https://gsap.com/)**: Used for complex, high-performance scroll-triggered animations.

---

## ✨ Key Features & Details

### Immersive 3D Experience (Zero External Assets)
To ensure lightning-fast load times and high framerates (60fps), the entire 3D background is built procedurally using primitives rather than loading heavy `.glb`/`.gltf` files.
- **Neural Network**: Animated nodes and connections that pulse and shift.
- **AI Chip**: A glowing, hovering central processor core.
- **Circuit Traces**: Procedural electrical pathways that animate dynamically.
- **Robotic Arm**: A low-poly, articulated joint system built from primitives.
- **Floating Particles**: Ambient dust/sparks with additive blending.

### Dynamic Sections
- **Hero**: 3D interactive background with mouse-tracking camera, animated stats counters, and prominent Call-To-Action buttons.
- **About**: Highlighted bio focusing on the intersection of AI intelligence and the physical world.
- **Skills**: Interactive skill bars and expandable domain expertise (LLMs, VLAs, ROS2, TensorRT, VLSI).
- **Projects**: Filterable grid showcasing significant technical implementations (e.g., RoboBrain-Agent, Edge AI deployment).
- **Certifications**: Animated layout highlighting 60+ professional certifications categorized by issuer.
- **Experience**: Vertical timeline mapping the professional journey.
- **Blogs**: Cards detailing technical articles and research insights.
- **Contact**: Glassmorphic, functional contact form with social links.

### Performance Optimizations
- **Lazy Loading**: The heavy 3D canvas (`HeroScene`) is dynamically imported (`next/dynamic`) with `ssr: false` to prevent hydration blocking.
- **Optimized Fonts**: `next/font` is used to load Inter, Space Grotesk, and JetBrains Mono locally without render-blocking requests.
- **SEO Ready**: Comprehensive JSON-LD structured data, Open Graph tags, and standard metadata built-in via the Next.js Metadata API.

---

## 💻 Local Development

### Prerequisites
- Node.js (v18.x or later)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/naveentnj/Naveen_R_Portfolio_Website.git
   cd Naveen_R_Portfolio_Website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 License
This project is open-source and available under the [MIT License](LICENSE).
