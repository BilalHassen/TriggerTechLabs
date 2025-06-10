// components/ProjectThumbnails/ProjectThumbnails.jsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./ProjectThumbnails.scss";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

function ProjectThumbnails({ thumbnails }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  
  return (
    <div className="projects__card-swpContainer">
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        autoHeight={false}
        onSlideChange={(swiper) => {
          setIndex(swiper.realIndex);
        }}
      >
    
        
          <SwiperSlide >
            <img
              src={thumbnails[0].src}
              alt={thumbnails[0].alt || `Project image ${i + 1}`}
              className="projects__card-img"
              
              onClick={() => {
                setOpen(true);
                
              }}
            />
          </SwiperSlide>
      </Swiper>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={thumbnails}
        plugins={[Zoom, Thumbnails]}
      />
    </div>
  );
}

export default ProjectThumbnails;
