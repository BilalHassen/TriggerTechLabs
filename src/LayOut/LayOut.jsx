import React, { useEffect, useState } from "react";
import Nav from "../components/Nav/Nav";
import "./LayOut.scss";
import Footer from "../components/Footer/Footer";
import {useWidth} from "../hooks/useWidth"
import { useLocation } from "react-router-dom";

function LayOut({ children }) {

  const [isHome, setIsHome] = useState("")

  const location = useLocation()

  useEffect(()=>{
    if(location.pathname === "/"){
      setIsHome("layout-home")
    }
   
  },[])



  return (
    <div className={`layout ${isHome}`}>
      <Nav />
      <div className="layout-wrapper" role="main" >{children}</div>
      <Footer/>
    </div>
  );
}

export default LayOut;
