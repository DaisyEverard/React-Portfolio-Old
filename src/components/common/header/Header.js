import React from "react";
import "./header.css"; 
import "../../index.css";
import NavBar from "../navbar/NavBar";

class Header extends React.Component {
  state = {
    headerBg: "/assets/air-leaves.gif",
    backgroundColor: "#7f7f7f",
    color: "white",
    mixBlendMode: "multiply"
  }

  changeTabImg = (event) => {
    let attr = event.target.getAttribute("href")
    if (attr === "/") {
      this.setState({ headerBg: "/assets/air-leaves.gif" })
      this.setState({ backgroundColor: "#7f7f7f" })
      this.setState({ color: "white" })
      this.setState({ mixBlendMode: "multiply" })
    } else if (attr === "/gallery") {
      this.setState({ headerBg: "/assets/orange-tree.gif" })
      this.setState({ backgroundColor: "#a1a1a1" })
      this.setState({ color: "black" })
      this.setState({ mixBlendMode: "screen" })
    } else if (attr === "/contact") {
      this.setState({ headerBg: "/assets/dark-bg-orange-leaves.gif" })
      this.setState({ backgroundColor: "#c2c2c2" })
      this.setState({ color: "black" })
      this.setState({ mixBlendMode: "screen" })
    } else if (attr === "/CV") {
      this.setState({ headerBg: "/assets/anime-leaves.gif" })
      this.setState({ backgroundColor: "#7f7f7f" })
      this.setState({ color: "white" })
      this.setState({ mixBlendMode: "multiply" })
    }
  }


  render () { return (<div>
    <div className="image-container" style={{backgroundImage: `url(${process.env.PUBLIC_URL + this.state.headerBg})`}}>
      <div className="text text-top" 
      style={{backgroundColor: this.state.backgroundColor, color: this.state.color, mixBlendMode: this.state.mixBlendMode}}
      >DAISY EVERARD</div>

      <div className="text text-bottom" 
      style={{backgroundColor: this.state.backgroundColor, color: this.state.color, mixBlendMode: this.state.mixBlendMode}}
      >portfolio</div>
    </div>
    <NavBar changeTabImg={this.changeTabImg}></NavBar>
  </div>); 
}
}

export default Header