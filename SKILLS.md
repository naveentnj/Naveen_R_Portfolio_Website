# Naveen R — Portfolio Technical Skills & Documentation

## Technical Skills

### Artificial Intelligence
- **Large Language Models (LLMs)**: GPT, LLaMA, Mistral, Gemini, Claude
- **Vision-Language Models (VLMs)**: LLaVA, Qwen-VL, CogVLM
- **Vision-Language-Action Models (VLAs)**: RT-2, Octo, OpenVLA
- **Agentic AI**: Multi-Agent Systems, Tool Use, ReAct, Plan-and-Execute
- **Frameworks**: LangGraph, CrewAI, LangChain, AutoGen
- **RAG Systems**: GraphRAG, Vector RAG, Hybrid RAG
- **Prompt Engineering**: Chain-of-Thought, Few-Shot, Structured Outputs

### Computer Vision
- **Detection & Segmentation**: YOLO (v5–v11), SAM, Mask R-CNN
- **Generative Models**: Stable Diffusion, ComfyUI, ControlNet
- **Classic CV**: OpenCV, image processing, feature extraction
- **3D Vision**: NeRF, Gaussian Splatting, depth estimation

### Robotics
- **Middleware**: ROS2 (Humble, Iron, Jazzy)
- **Simulation**: NVIDIA Isaac Sim, Isaac Lab, Gazebo, Genesis
- **Control**: Motion planning, SLAM, path planning, IK/FK
- **Learning**: Reinforcement Learning (PPO, SAC), Imitation Learning
- **Hardware**: Actuators, sensors, cameras, LiDAR

### Embedded AI & Edge Computing
- **Qualcomm**: AI Hub, Snapdragon Neural Processing SDK, QNN
- **NVIDIA**: TensorRT, Jetson (Nano, Orin), CUDA
- **Optimization**: ONNX Runtime, quantization (INT8, FP16), pruning
- **Deployment**: Edge inference, on-device AI, real-time processing

### Semiconductor & VLSI
- **Architecture**: SoC design, ARM Cortex cores, NPU/GPU/DSP
- **Protocols**: I3C, PCIe, AMBA, AXI
- **Fundamentals**: VLSI design basics, digital logic, CMOS
- **EDA**: Verilog basics, synthesis concepts

### Programming Languages
- **Python**: NumPy, Pandas, PyTorch, TensorFlow, FastAPI
- **C++**: STL, embedded programming, ROS2 nodes
- **SQL**: PostgreSQL, database design
- **Shell**: Bash scripting, automation

### Cloud & DevOps
- **Azure**: Azure AI Services, Azure ML
- **AWS**: SageMaker, EC2, S3, Lambda
- **Google Cloud**: Vertex AI, GKE, Cloud Functions
- **DevOps**: Docker, Git, CI/CD, GitHub Actions

---

## Core Technologies Used in Portfolio

### Frontend Framework
- **Next.js 15** — React framework with App Router, SSR, and ISR
- **TypeScript** — Strict mode for type safety
- **Tailwind CSS v4** — Utility-first CSS with custom design tokens

### Animation & 3D
- **Framer Motion** — Declarative animations and gestures
- **Three.js** — WebGL 3D rendering
- **React Three Fiber** — React renderer for Three.js
- **Drei** — Useful helpers for R3F
- **GSAP** — High-performance scroll animations

### UI Libraries
- **Lucide React** — Modern icon set
- **next-themes** — Dark/Light mode management

---

## UI/UX Design Principles

### Visual Hierarchy
- Clear content structure with consistent heading sizes
- Gradient text for primary headings
- Muted colors for secondary content
- Strategic use of color accents for CTAs

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Touch-friendly interaction targets

### Accessibility (WCAG 2.1 AA)
- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Sufficient color contrast ratios
- Focus indicators on all interactive elements
- Reduced motion support via `prefers-reduced-motion`

### Typography System
- **Headings**: Space Grotesk (geometric, modern)
- **Body**: Inter (highly legible, variable weight)
- **Code**: JetBrains Mono (developer-focused monospace)
- Scale: 0.75rem → 4.5rem with consistent line heights

### Color Palette
```
Dark Mode:
  Background:  #06070a (primary), #0c0e14 (secondary), #0f1219 (card)
  Text:        #f0f4f8 (primary), #94a3b8 (secondary), #64748b (muted)
  Accent:      #06b6d4 (cyan), #8b5cf6 (violet), #ec4899 (pink), #10b981 (emerald)

Light Mode:
  Background:  #f8fafc (primary), #f1f5f9 (secondary), #ffffff (card)
  Text:        #0f172a (primary), #475569 (secondary), #94a3b8 (muted)
  Accent:      Same as dark mode
```

### Spacing Scale
- Consistent 4px grid system
- Section padding: 6rem (mobile) → 8rem (desktop)
- Card padding: 1.5rem → 2rem
- Component gaps: 0.5rem → 2rem

### Component Consistency
- Rounded corners: xl (0.75rem) for cards, lg (0.5rem) for buttons
- Border: 1px solid with 8% opacity
- Glass effect: backdrop-blur-xl with semi-transparent backgrounds
- Shadows: Subtle glow effects using accent colors

### Motion Design
- Entrance animations: fade + slide (0.5-0.8s duration)
- Hover transitions: 200-300ms ease
- Staggered reveals: 50-150ms per item
- Scroll-triggered animations via Intersection Observer
- 3D scene: 60fps with requestAnimationFrame

### Micro-interactions
- Button hover: scale + glow shadow
- Card hover: border glow + subtle lift
- Nav links: spring-animated active indicator
- Counter: ease-out cubic counting animation
- Theme toggle: rotation + scale transition

---

## Three.js Guidelines

### Performance
- Canvas DPR: [1, 1.5] (adaptive)
- Particle count: ≤400 (floating particles)
- Geometry complexity: Low-poly procedural meshes
- No external .glb/.gltf files (all procedural)
- Lazy loading via Next.js dynamic import with ssr: false

### Rendering
- WebGL with antialiasing and alpha
- Power preference: high-performance
- Fog for depth perception
- Additive blending for particles

### Lighting
- Ambient: low intensity (0.15)
- Point lights: colored (cyan, violet, pink)
- No shadows (performance optimization)

### Animation
- useFrame for smooth 60fps animation
- Mouse-following camera (damped)
- Slow rotations (0.1-0.3 rad/s)
- Subtle oscillations on joints

### Mobile
- Reduced particle count
- Lower DPR
- Simplified geometries
- Touch-responsive camera

---

## Coding Standards

### TypeScript
- Strict mode enabled
- Explicit type annotations for props
- Interface-first design (types/index.ts)
- No `any` types

### Component Architecture
- Atomic design: ui → sections → layout → pages
- Single responsibility per component
- Props interfaces for all components
- Server components by default, "use client" only when needed

### File Organization
```
src/
├── app/           # Next.js App Router pages
├── components/
│   ├── layout/    # Navbar, Footer
│   ├── sections/  # Page sections
│   ├── three/     # 3D scene components
│   ├── ui/        # Reusable UI components
│   └── providers/ # Context providers
├── hooks/         # Custom React hooks
├── lib/           # Constants, utilities
└── types/         # TypeScript interfaces
```

### Code Quality
- ESLint with Next.js config
- Consistent naming: PascalCase components, camelCase functions
- Descriptive variable names
- JSDoc comments on complex functions

---

## Future Enhancements

- [ ] AI Chat Assistant (RAG-powered portfolio Q&A)
- [ ] Interactive Robotics Demo (browser-based sim)
- [ ] 3D Robot Explainer (exploded view)
- [ ] Research Paper Showcase
- [ ] Live GitHub Activity Feed
- [ ] Blog CMS (MDX-based)
- [ ] Resume Analytics Dashboard
- [ ] Project Filtering & Search
- [ ] AI-powered Search
- [ ] PWA Support
- [ ] Internationalization (i18n)
