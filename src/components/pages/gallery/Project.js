import React from "react";

function Project(props) {
    // only add live button is deployed exists
    let url;
    if (props.url !== "") {
        url = <a href={props.url} target="_blank" className="btn btn-primary">
            <i class="ri-flashlight-fill"></i>
        </a>
    } else {
        url = null; 
    }
        // change side of icon and screenshot
    let leftUrl;
    let rightUrl; 
    if (props.id === "card1" || props.id === "card4") {
        leftUrl = props.screenshot
        rightUrl = props.iconurl
    } else {
        leftUrl = props.iconurl
        rightUrl = props.screenshot
    }
    console.log(leftUrl)
    console.log(rightUrl)

    return <div className={`${props.width}`} id={props.id}>
        <div className="card">
            <img className="left-img" src={leftUrl} alt={props.alt}/>
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.description}</p>
              <a href={props.github} target="_blank" className="btn btn-primary">
                <i class="ri-github-line"></i>
              </a>
              {url}
            </div>
            <img className="right-img" src={rightUrl} alt={props.alt}/>
        </div>
    </div>
};

export default Project; 