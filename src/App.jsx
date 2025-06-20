import "./App.scss";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/contact";
import { FormspreeProvider } from "@formspree/react";
import { ToastContainer } from "react-toastify";
import { Slide } from "react-toastify";

function App() {
  return (
    <FormspreeProvider>
      <ErrorBoundary>
        <Router>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
                <ToastContainer position="top-right" autoClose={3000} theme="dark" transition={Slide} draggable={true}/>
      </Router>
    </ErrorBoundary>
    </FormspreeProvider>
  );
}

export default App;
