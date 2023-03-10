import React from "react";
import "./header.css"; 
import NavBar from "../navbar/NavBar";

function Header() {

    return <div>
      <div className="image-container">
        <div className="text text-top">DAISY EVERARD</div>
        <div className="text text-bottom">portfolio</div>
      </div>
      <NavBar/>
    </div>
}

export default Header