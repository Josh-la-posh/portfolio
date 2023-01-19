import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="header">
      <div className="logo"><Link to="/">JF</Link></div>
      <nav
        className="navigation"
        style={isNavOpen ? { display: "block" } : { display: "none" }}
      >
        <div className="closeIcon" onClick={() => setIsNavOpen(!isNavOpen)}>
          <FontAwesomeIcon icon="circle-xmark" />
        </div>
        <ul>
          <li>
            <FontAwesomeIcon className="headerLinkIcon" icon="house" />
            <Link to="/">Home</Link>
          </li>
          <li>
            <FontAwesomeIcon
              className="headerLinkIcon"
              icon="circle-exclamation"
            />
            <Link to="/about">About</Link>
          </li>
          <li>
            <FontAwesomeIcon className="headerLinkIcon" icon="file" />
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <FontAwesomeIcon className="headerLinkIcon" icon="briefcase" />
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <FontAwesomeIcon className="headerLinkIcon" icon="address-book" />
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <span
        className="minIcon"
        onClick={() => setIsNavOpen(!isNavOpen)}
        style={isNavOpen ? { display: "none" } : { display: "block" }}
      >
        <FontAwesomeIcon icon="grip-lines" />
      </span>
      {console.log(isNavOpen)}
    </div>
  );
};
