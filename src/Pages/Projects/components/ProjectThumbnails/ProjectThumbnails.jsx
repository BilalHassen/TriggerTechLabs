// components/ProjectThumbnails/ProjectThumbnails.jsx
import React, { useState } from "react";

import "./ProjectThumbnails.scss";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

function ProjectThumbnails({ thumbnails }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const mobile = thumbnails.find((thumbnail) =>
    thumbnail.name.includes("mobile")
  );
  const tablet = thumbnails.find((thumbnail) =>
    thumbnail.name.includes("tablet")
  );
  const desktop = thumbnails.find((thumbnail) =>
    thumbnail.name.includes("desktop")
  );

  console.log(mobile);

  return (
    <div className="projects__card-swpContainer">
      <img
        src={desktop?.src || tablet?.src || mobile?.src}
        srcSet={`
       ${mobile.src} 480w,
  ${tablet.src} 768w,
  ${desktop.src} 1200w

  `}
       sizes="(max-width: 768px) 100vw, (max-width: 1365px) 90vw, 1200px"
        alt={desktop?.alt || "Project image"}
        className="projects__card-img"
        loading="lazy"
        onClick={() => {
          setOpen(true);
        }}
      />

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
