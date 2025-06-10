import {useWidth} from "./useWidth"
import { useState, useLayoutEffect, useRef, useEffect } from "react";
export function useHeightCalculation(){
  /*
get the height of each image so i can animate the translateY to scroll to the height of the entire screen 
the container for each image has a height so it will have to be subtracing the image height by the height
of the container
*/

  // right now in the useffect im not getting the updated height value
  // when the active slide changes and the image displayed is different

  // state for the current slide to be able to use as a condition for adding the ref
  // to the active image or image being viewed
  const [activeSlide, setActiveSlide] = useState(0);
  const width = useWidth();


  // state for the height value of the image ref to use for calculation
  // set default as null to be a falsy value
  const [imgRefHeight, setImgRefHeight] = useState(null);

  // container height state
  const [containerHeight, setContainerHeight] = useState();

  // state for the calculation of the two containers
  const [heightCalculation, setHeightCalculation] = useState(0);

  // ref for each image to get the height from the .current property returned to the ref
  // set to null cause on render it will be null
  const imgRef = useRef(null);

  // ref for the container holding the images
  const imgContainerRef = useRef(null);

  // useffect to run on render so the component mounts all the code is run
  // the ref is attached in the returne jsx then this useffect runs
  // thats how the imgref in here now has the value for the image
  useLayoutEffect(() => {
   
if (imgContainerRef.current) {
      setContainerHeight(imgContainerRef.current.offsetHeight)
      console.log("Container height:", imgContainerRef.current.offsetHeight);
}
    // wihtout adding the slide effect here even if it reruns the code
    // the useffect will be skipped unless the value that is listed
    // as a dependency changes. so add activeslide
  }, [width, activeSlide]);

  useLayoutEffect(() => {
   
    if (imgRefHeight != null) {
 
        setImgRefHeight(imgRef.current.offsetHeight)
        console.log(imgRef.current.offsetHeight)
    }
       
      }, [width, activeSlide, imgRefHeight]);

    useEffect(()=>{
      setHeightCalculation(imgRefHeight - containerHeight)
    },[imgRefHeight, containerHeight])



  return {imgContainerRef, imgRef, heightCalculation, imgRefHeight, setActiveSlide, activeSlide, setContainerHeight, setImgRefHeight}
};


