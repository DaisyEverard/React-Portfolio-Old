import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home, Gallery, Contacts, CV, NavTabs} from "../../commonIndex";

function NavBar() {
    return(
        <Router>
            <div>
                <NavTabs />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="gallery" element={<Gallery/>} />
                    <Route path="contacts" element={<Contacts/>} />
                    <Route path="CV" element={<CV/>} />
                </Routes>
             </div>
        </Router>
    )
}

export default NavBar; 
