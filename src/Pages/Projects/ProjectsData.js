import {v4 as uuidv4} from "uuid";


const projectData = [
    {
      id: uuidv4(),
      title: "Audiophile E commerce Website", 
      description: "E commerce website selling modern high quality audio equipment", 
      thumbnails:[
        {
          name: "Checkout page", 
          src: "/assets/audiophile-images/desktop-audio-checkout-fs.png", 
          alt: "audio website checkout page"
        }, 
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
    }
  ];
  
  export default projectData;