import { render } from "@testing-library/react";
import React from "react";
import NavTabs from "./NavTabs";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About"
import Contacts from "./pages/Contact"

function Header() {
    return(
        <Router>
            <div>
                <NavTabs />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="gallery" element={<Gallery/>} />
                    <Route path="about" element={<About/>} />
                    <Route path="contacts" element={<Contacts/>} />
                </Routes>
             </div>
        </Router>
    )
}

export default Header; 
