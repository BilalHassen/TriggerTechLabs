import {
    Search,
    Brain,
    Pencil,
    Code2,
    Bug,
    Rocket,
  } from 'lucide-react';
  
  const steps = [
    {
      title: "1. Discovery",
      subTitle: "Understand your goals",
      description:
        "We start with a conversation about your business, your audience, and your goals. This helps shape a clear vision for the project.",
      icon: Search,
      color: "#00ff99", // green
    },
    {
      title: "2. Strategy",
      subTitle: "Plan the foundation",
      description:
        "I define the site structure, user flow, and tech stack — laying down a solid blueprint before we begin building.",
      icon: Brain,
      color: "#ff0077", // pink
    },
    {
      title: "3. Design",
      subTitle: "Craft the user experience",
      description:
        "I create wireframes and visual layouts that reflect your brand and provide a smooth, intuitive experience for your users.",
      icon: Pencil,
      color: "#ffaa00", // orange
    },
    {
      title: "4. Build",
      subTitle: "Develop the site",
      description:
        "Your site is built with clean, modern code using React, SCSS, and Vite — fully responsive and performance-optimized.",
      icon: Code2,
      color: "#00aaff", // blue
    },
    {
      title: "5. Review & Test",
      subTitle: "Polish and perfect",
      description:
        "I thoroughly test the site on multiple devices and browsers. You’ll review everything and request any final changes.",
      icon: Bug,
      color: "#ff4444", // red
    },
    {
      title: "6. Launch & Support",
      subTitle: "Go live with confidence",
      description:
        "Once everything's approved, your site is launched. I provide ongoing support or handoff with training — your choice.",
      icon: Rocket,
      color: "#9b59b6", // purple
    },
  ];
  
  export default steps;
  