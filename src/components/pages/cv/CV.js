import React from "react";
import "../../index.css";
import "./cv.css"; 


function CV() {
    return <div className="whole-div" id="cv">
        <div className="leaf-container">
        <img src={process.env.PUBLIC_URL + "/assets/rainbow-leaves.png"} alt="array of leaves in rainbow colors" className="rainbow-leaves"/>
        <a href={process.env.PUBLIC_URL + "/assets/resume.pdf"} className="button">CV PDF</a>
        </div>
            <p className="key1 keyword">16-Week Bootcamp</p>
            <p className="key2 keyword">Customer Oriented</p>
            <p className="key3 keyword">Organised</p>
            <p className="key4 keyword">Reliable</p>
            <p className="key5 keyword">Motivated</p>

    </div>
}

export default CV; 