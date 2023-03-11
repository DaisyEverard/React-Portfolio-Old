import React from "react";

function Project(props) {
    let url;
    if (props.url !== "") {
        url = <a href={props.url} target="_blank" className="btn btn-primary">Live</a>
    } else {
        url = null; 
    }
    return <div className={`${props.width}`} id={props.id}>
        <div className="card">
            <img className="card-img-top" src={props.src} alt={props.alt}/>
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.description}</p>
              <a href={props.github} target="_blank" className="btn btn-primary">GitHub</a>
              {url}
            </div>
        </div>
    </div>
};

export default Project; 