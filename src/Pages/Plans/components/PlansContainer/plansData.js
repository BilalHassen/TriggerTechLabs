import { CheckCircle } from "lucide-react";

const plansData = [
  {
    id: 1,
    title: "Basic",
    price: "$499+",
    color: "#f70354",
    included: [
      { label: "3 Pages", icon: CheckCircle },
      { label: "Responsive Design", icon: CheckCircle },
      { label: "Contact Form Integration", icon: CheckCircle },
      { label: "Fast Hosting Setup", icon: CheckCircle },
      { label: "Mobile Optimization", icon: CheckCircle },
      { label: "Basic SEO Setup", icon: CheckCircle },
    ],
    fit: "Best for: simple online presence",
  },
  {
    id: 2,
    title: "Plus",
    price: "$699 – $999+",
    color: "#b203f7",
    included: [
      { label: "5 Pages", icon: CheckCircle },
      { label: "All Basic Features", icon: CheckCircle },
      { label: "SEO Optimization", icon: CheckCircle },
      { label: "3rd-Party Integrations", icon: CheckCircle },
      { label: "Social Media Integration", icon: CheckCircle },
      { label: "Improved Load Speed", icon: CheckCircle },
    ],
    fit: "Best for: service-based businesses",
  },
  {
    id: 3,
    title: "Pro",
    price: "$1,000 – $1,499+",
    color: "#03baf0",
    included: [
      { label: "6+ Pages", icon: CheckCircle },
      { label: "All Plus Features", icon: CheckCircle },
      { label: "Custom UI Animations", icon: CheckCircle },
      { label: "CMS & Database Integration", icon: CheckCircle },
      { label: "Authentication System", icon: CheckCircle },
      { label: "Advanced Code Optimization", icon: CheckCircle },
    ],
    fit: "Best for: growing brands or startups",
  },
];

export default plansData;
