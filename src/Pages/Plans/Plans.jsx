import React from "react";
import LayOut from "../../LayOut/LayOut";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import "./Plans.scss";
import PlansContainer from "./components/PlansContainer/PlansContainer";
import glitch from "/assets/glitch.png";
import { Link } from "react-router-dom";
import { useWidth } from "../../hooks/useWidth";

/**
 * Plans Component
 * 
 * Main component for the Plans/Pricing page that displays:
 * - Hero section with title, description, and decorative glitch image
 * - Plans container with pricing cards
 * 
 * Features:
 * - Responsive design with conditional glitch image display
 * - Uses useWidth hook for responsive behavior
 * - Integrates with Layout component for consistent page structure
 */
function Plans() {
  // Get current viewport width for responsive behavior
  const width = useWidth();
  
  // Define breakpoint for showing/hiding glitch image
  const TABLET_BREAKPOINT = 768;

  return (
    <LayOut>
      <section className="plans">
        {/* Hero/Intro Section */}
        <div className="plans__intro-container">
          {/* Text Content Container */}
          <div className="plans__text-container">
            <h1 className="plans__title">
              Launch Packages <br />
              Built for Results
            </h1>
            <p className="plans__paragraph">
              Tired of slow, bloated websites that don't convert? We craft
              lightning-fast, mobile-first websites tailored to your brand.
              They're optimized for speed, user experience, and results. From
              the first click to the final scroll, everything is designed to
              drive engagement and help your business thrive online.
            </p>
            <Link to="/contact">
              <button className="plans__quote-btn">Get a Free quote</button>
            </Link>
          </div>
          
          {/* Decorative Glitch Image - Only shown on tablet and larger screens */}
          {width >= TABLET_BREAKPOINT && (
            <img src={glitch} alt="Decorative glitch sphere" className="plans__glitch-img" />
          )}
        </div>
        
        {/* Plans Section */}
        <SectionHeading TitleText="Packages" />
        <PlansContainer />
      </section>
    </LayOut>
  );
}

export default Plans;
