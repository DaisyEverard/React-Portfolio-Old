import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home, Gallery, Contact, CV, NavTabs} from "../../commonIndex";

function NavBar(props) {
    return(
        <Router>
            <div>
                <NavTabs changeTabImg={props.changeTabImg}></NavTabs>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="gallery" element={<Gallery/>} />
                    <Route path="contact" element={<Contact/>} />
                    <Route path="CV" element={<CV/>} />
                </Routes>
             </div>
        </Router>
    )
}

export default NavBar; 
