import {v4 as uuidv4} from "uuid";


const projectData = [
    {
      id: uuidv4(),
      title: "Audiophile E commerce Website", 
      description: "E commerce website selling modern high quality audio equipment", 
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
      description: "Video Streaming application with user authentication", 
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
      title: "Interactive Video Sharing app", 
      description: "Video Streaming application with user authentication", 
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
      title: "Interactive Video Sharing app", 
      description: "Video Streaming application with user authentication", 
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