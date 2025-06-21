import {
    Phone,
    Mail,
    MapPin,
    Clock
  } from "lucide-react";
  
/**
 * Contact Information Data
 * Contains contact details for display in contact cards
 * Each object includes an icon, title, color, and details array
 */
const contactData = [
  {
    id: 1,
    title: "Phone & Fax",
    icon: Phone, // Phone icon from Lucide React
    color: "#f70354", // Brand pink color
    details: [
      { value: "Mobile: +1 647-687-7841" }
    ]
  },
  {
    id: 2,
    title: "Mail Address",
    icon: Mail, // Mail icon from Lucide React
    color: "#f70354", // Brand pink color
    details: [
      { value: "bilalhassen799@gmail.com" }
    ]
  },
  {
    id: 3,
    title: "Our Location",
    icon: MapPin, // Map pin icon from Lucide React
    color: "#f70354", // Brand pink color
    details: [
      { value: "Toronto, Ontario" }
    ]
  },
  {
    id: 4,
    title: "Office Hour",
    icon: Clock, // Clock icon from Lucide React
    color: "#f70354", // Brand pink color
    details: [
      { value: " Mon - Sun: 24/7" }
    ]
  }
];
  
export default contactData;
  