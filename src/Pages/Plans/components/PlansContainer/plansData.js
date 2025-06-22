import { CheckCircle } from "lucide-react";

const plansData = [
  {
    title: "Basic",
    price: "$499+",
    color: "#f70354",
    included: [
      { label: "3 Pages", icon: CheckCircle },
      { label: "Responsive Design", icon: CheckCircle },
      { label: "Contact Form Integration", icon: CheckCircle },
      { label: "Fast Hosting Setup", icon: CheckCircle },
      { label: "Mobile Optimization", icon: CheckCircle }
    ],
    fit: "Best for: simple online presence"
  },
  {
    title: "Plus",
    price: "$699 – $999+",
    color: "#b203f7",
    included: [
      { label: "Includes everything in Basic, plus:", icon: CheckCircle },
      { label: "5 Pages", icon: CheckCircle },
      { label: "SEO Basics", icon: CheckCircle },
      { label: "3rd-Party Integrations", icon: CheckCircle },
      { label: "Enhanced Load Speed Optimization", icon: CheckCircle },
      { label: "Social Media Integration", icon: CheckCircle }
    ],
    fit: "Best for: service-based businesses"
  },
  {
    title: "Pro",
    price: "$1,000 – $1,499+",
    color: "#03baf0",
    included: [
      { label: "Includes everything in Plus, plus:", icon: CheckCircle },
      { label: "6+ Pages", icon: CheckCircle },
      { label: "Full SEO Optimization", icon: CheckCircle },
      { label: "CMS Integration", icon: CheckCircle },
      { label: "Custom Software Integration", icon: CheckCircle },
      { label: "Code Optimization", icon: CheckCircle },
      { label: "Custom Animations or UI Components", icon: CheckCircle },
      { label: "Authentication & Authorization", icon: CheckCircle },
      { label: "Custom Database Setup", icon: CheckCircle }
    ],
    fit: "Best for: growing brands or startups"
  }
];
