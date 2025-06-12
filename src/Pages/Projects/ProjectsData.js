import {v4 as uuidv4} from "uuid";


const projectData = [
    {
      id: uuidv4(),
      title: "Audiophile E commerce Website", 
      description: "E commerce website selling modern high quality audio equipment with a fully functioning cart, allowing users to add and purchase items seamlessly. Includes a fully functioning checkout and paywall.", 
      textColor: "#d87d4a",
      thumbnails:[
        {
            name: "Home page desktop", 
            src: "/assets/audiophile-images/desktop-audio-fs.png", 
            alt: "audio website checkout page"
        }, 
        {
            name: "Home page mobile", 
            src: "/assets/audiophile-images/mobile-audio-fp.png", 
            alt: "audio website checkout page"
        }, 
        {
            name: "Home page mobile", 
            src: "/assets/audiophile-images/tablet-audio-fp.png", 
            alt: "audio website checkout page"
        }, 

      ]
    },
    {
      id: uuidv4(),
      title: "Video streamer", 
      description: "Video Streaming application with user authentication and adding, svaing and bookmarking video functionality.", 
      textColor: "#FC2C0C",
      thumbnails:[
        {
          name: "Home page tablet", 
          src: "/assets/entertainment-images/tablet-home-fs.png", 
          alt: "audio website checkout page"
      }, 

        {
          name: "Home page desktop", 
          src: "/assets/entertainment-images/desktop-home-fs.png", 
          alt: "audio website checkout page"
      }, 
        {
            name: "Home page mobile", 
            src: "/assets/entertainment-images/mobile-home-fs.png", 
            alt: "audio website checkout page"
        }, 
      ]
    },

    {
      id: uuidv4(),
      title: "BrainFlix", 
      description: "Video Streaming application similar to youtube where users can like, comment, and upload their own videos.", 
      textColor: "#0095fc",
      thumbnails:[
        {
          name: "Home page tablet", 
          src: "/assets/brainflix-images/brainflix-desktop-fs.png", 
          alt: "audio website checkout page"
      }, 

        {
          name: "Home page desktop", 
          src:"/assets/brainflix-images/brainflix-tablet-fs.png",
          alt: "audio website checkout page"
      }, 
        {
            name: "Home page mobile", 
            src: "/assets/brainflix-images/brainflix-mobile-fs.png", 
            alt: "audio website checkout page"
        }, 
      ]
    },

    {
      id: uuidv4(),
      title: "SolarScope", 
      description: "Take a guided tour through our cosmic neighborhood. SolarScope lets you explore every planet in our solar system with bite-sized facts, stunning visuals, and simple explanations.", 
      textColor: "#419ebb",
      thumbnails:[
        {
          name: "Home page tablet", 
          src: "/assets/planets-images/planets-tablet-fs.png", 
          alt: "audio website checkout page"
      }, 

        {
          name: "Home page desktop", 
          src:"/assets/planets-images/planets-desktop-fs.png",
          alt: "audio website checkout page"
      }, 
        {
            name: "Home page mobile", 
            src: "/assets/planets-images/planets-mobile-fs.png", 
            alt: "audio website checkout page"
        }, 
      ]
    },
  ];
  
  export default projectData;