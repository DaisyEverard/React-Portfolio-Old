import React from "react";
import "../../index.css";
import "./gallery.css";
import Project from "./Project";
import projectsJSON from "../projects.json"

const projects = projectsJSON.projects
 
const projArr = projects.map((proj,ind) => {
    console.log(proj)
    let width;
    ind % 3 === 0 ? (width = "col-sm-12 col-lg-12"): (width = "col-sm-12 col-md-6 col-lg-6"); 
    return <Project
    name={proj.name} description={proj.description}
    url={proj.siteurl} src={proj.imgurl}
    alt={proj.alt} id={proj.id} width={width}></Project>
})

console.log(projArr)

function Gallery() {
    return <div className="container-fluid">
        <h1>Work</h1>
        <div className="row">
            {projArr[0]}
            {projArr[1]}
            {projArr[2]}
        </div>
        <div className="row">
            {projArr[3]}
            {projArr[4]}
            {projArr[5]}
        </div>
        
    </div>
}

export default Gallery; 