
import './App.scss'
import Home from './Pages/Home/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


function App() {

  return (
    <>
    
    <Router>
            <Routes>
              <Route
                path="/"
                element={<Home/>}
              />
               <Route
                path="/projects"
                element={""}
              />
              <Route
                path="/contact"
                element={""}
              />
                <Route
                path="/case-study"
                element={""}
              />
            
             
             
            </Routes>
          </Router>
    </>
  )
}

export default App
