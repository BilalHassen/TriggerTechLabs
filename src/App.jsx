import "./App.scss";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import { FormspreeProvider } from "@formspree/react";
import { ToastContainer } from "react-toastify";
import { Slide } from "react-toastify";
import Plans from "./Pages/Plans/Plans";

/**
 * Main App Component
 * Sets up routing, error boundaries, and global providers
 * Includes Formspree provider for contact form functionality
 */
function App() {
  return (
    <FormspreeProvider>
      <ErrorBoundary>
        <Router>
          <Routes>
            {/* Main application routes */}
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/plans" element={<Plans/>}/>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          
          {/* Global toast notifications container */}
          {/* FIXED: Using lowercase import path to resolve case sensitivity issue */}
          <ToastContainer position="top-right" autoClose={3000} theme="dark" transition={Slide} draggable={true}/>
        </Router>
      </ErrorBoundary>
    </FormspreeProvider>
  );
}

export default App;
