import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Nav from "../components/Nav/Nav";
import "./LayOut.scss";
import Footer from "../components/Footer/Footer";
import { useWidth } from "../hooks/useWidth";
import { useLocation } from "react-router-dom";

function LayOut({ children }) {
  const location = useLocation();
  const [isHome, setIsHome] = useState(location.pathname === "/" ? "layout-home" : "");

  useEffect(() => {
    setIsHome(location.pathname === "/" ? "layout-home" : "");
  }, [location.pathname]);

  return (
    <div className={`layout ${isHome}`}>
      <Nav />
      <main className="layout-wrapper">{children}</main>
      <Footer />
    </div>
  );
}

LayOut.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayOut;
