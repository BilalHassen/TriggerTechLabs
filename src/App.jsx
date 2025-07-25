import "./App.scss";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/contact/Contact";
import { FormspreeProvider } from "@formspree/react";
import { ToastContainer } from "react-toastify";
import { Slide } from "react-toastify";
import Plans from "./Pages/Plans/Plans";
import CaseStudy from "./Pages/CaseStudy/CaseStudy";

/**
 * Main App Component
 * Sets up routing, error boundaries, and global providers
 * Includes Formspree provider for contact form functionality
 * Enhanced with accessibility features including skip links and ARIA labels
 */
function App() {
  return (
    <FormspreeProvider>
      <ErrorBoundary>
        <Router>
          {/* Skip to main content link for keyboard users */}
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          
          <Routes>
            {/* Main application routes */}
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/plans" element={<Plans/>}/>
            <Route path="/case-study" element={<CaseStudy/>}/>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          
          {/* Global toast notifications container with accessibility improvements */}
          <ToastContainer 
            position="top-right" 
            autoClose={3000} 
            theme="dark" 
            transition={Slide} 
            draggable={true}
            aria-label="Notifications"
            role="status"
            aria-live="polite"
            toastClassName="toast-notification"
            closeButton={true}
            pauseOnFocusLoss={true}
            pauseOnHover={true}
            newestOnTop={true}
            limit={3}
          />
        </Router>
      </ErrorBoundary>
    </FormspreeProvider>
  );
}

export default App;
