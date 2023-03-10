import React from "react";

function Project(props) {
    return <div className={`${props.width}`} id={props.id}>
        <div className="card">
            <img className="card-img-top" src={props.src} alt={props.alt}/>
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.description}</p>
              <a href={props.url} className="btn btn-primary">Show Me!</a>
            </div>
        </div>
    </div>
};

export default Project; 