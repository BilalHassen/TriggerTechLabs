import { v4 as uuidv4 } from "uuid";

const projectData = [
  {
    id: uuidv4(),
    title: "Audiophile E-commerce Website",
    description:
      "A premium e-commerce platform for high-end audio gear. Features a seamless shopping experience with product filtering, responsive design, a fully functional cart system, and a secure checkout flow.",
    textColor: "#d87d4a",
    thumbnails: [
      {
        name: "Home page desktop",
        src: "/assets/audiophile-images/desktop-audio-fs.png",
        alt: "audio website desktop page",
      },
      {
        name: "Home page tablet",
        src: "/assets/audiophile-images/tablet-audio-fp.png",
        alt: "audio website tablet page",
      },
      {
        name: "Home page mobile",
        src: "/assets/audiophile-images/mobile-audio-fp.png",
        alt: "audio website mobile page",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Video Streamer",
    description:
      "A modern video streaming app with secure user authentication. Users can browse trending content, bookmark favorites, and save videos to their personal library. Designed with performance and responsiveness in mind.",
    textColor: "#FC2C0C",
    thumbnails: [
      {
        name: "Home page desktop",
        src: "/assets/entertainment-images/desktop-home-fs.png",
        alt: "video streamer desktop version",
      },
      {
        name: "Home page tablet",
        src: "/assets/entertainment-images/tablet-home-fs.png",
        alt: "video streamer tablet version",
      },
      {
        name: "Home page mobile",
        src: "/assets/entertainment-images/mobile-home-fs.png",
        alt: "video streamer mobile version",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "BrainFlix",
    description:
      "A full-stack YouTube-style video platform where users can upload, like, and comment on videos. Features include responsive design, dynamic routing, and interactive UI elements built for engagement.",
    textColor: "#0095fc",
    thumbnails: [
      {
        name: "Home page desktop",
        src: "/assets/brainflix-images/brainflix-desktop-fs.png",
        alt: "BrainFlix desktop page",
      },
      {
        name: "Home page tablet",
        src: "/assets/brainflix-images/brainflix-tablet-fs.png",
        alt: "BrainFlix tablet page",
      },
      {
        name: "Home page mobile",
        src: "/assets/brainflix-images/brainflix-mobile-fs.png",
        alt: "BrainFlix mobile page",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "SolarScope",
    description:
      "An educational space exploration app that takes users on a journey through the solar system. Each planet is presented with stunning visuals, simplified facts, and interactive UI elements for a fun learning experience.",
    textColor: "#419ebb",
    thumbnails: [
      {
        name: "Home page desktop",
        src: "/assets/planets-images/planets-desktop-fs.png",
        alt: "SolarScope desktop page",
      },
      {
        name: "Home page tablet",
        src: "/assets/planets-images/planets-tablet-fs.png",
        alt: "SolarScope tablet page",
      },
      {
        name: "Home page mobile",
        src: "/assets/planets-images/planets-mobile-fs.png",
        alt: "SolarScope mobile page",
      },
    ],
  },
];

export default projectData;
