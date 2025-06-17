import {
    Phone,
    Mail,
    MapPin,
    Clock
  } from "lucide-react";
  
  const contactData = [
    {
      id: 1,
      title: "Phone & Fax",
      icon: Phone,
      color: "#f70354",
      details: [
        { value: "Mobile: +1 647-687-7841" }
      ]
    },
    {
      id: 2,
      title: "Mail Address",
      icon: Mail,
      color: "#f70354",
      details: [
        {  value: "bilalhassen799@gmail.com" }
      ]
    },
    {
      id: 3,
      title: "Our Location",
      icon: MapPin,
      color: "#f70354",
      details: [
        { value: "Toronto, Ontario" }
      ]
    },
    {
      id: 4,
      title: "Office Hour",
      icon: Clock,
      color: "#f70354",
      details: [
        {value: " Mon - Sun: 24/7" }
      ]
    }
  ];
  
  export default contactData;
  