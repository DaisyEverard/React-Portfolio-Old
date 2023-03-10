import React from 'react';
import { NavLink } from 'react-router-dom';
import "./navtabs.css"

function NavTabs(props) {
  const changeImg = props.changeTabImg; 
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item" onClick={changeImg}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item" onClick={changeImg}>
        <NavLink
          to="gallery"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Gallery
        </NavLink>
      </li>
      <li className="nav-item" onClick={changeImg}>
        <NavLink
          to="contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </li>
      <li className="nav-item" onClick={changeImg}>
        <NavLink
          to="CV"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          CV
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
