import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="header">
      <div className="logo" onClick={() => setIsNavOpen(false)}>
        <Link to="/">JF</Link>
      </div>
      <nav className={isNavOpen ? "navigation" : "navigation2"}>
        <div className="closeIcon" onClick={() => setIsNavOpen(false)}>
          <FontAwesomeIcon icon="circle-xmark" />
        </div>
        <ul>
          <li onClick={() => setIsNavOpen(false)}>
            <Link to="/home">
              <FontAwesomeIcon className="headerLinkIcon" icon="house" />
              <span>Home</span>
            </Link>
          </li>
          <li onClick={() => setIsNavOpen(false)}>
            <Link to="/about">
              <FontAwesomeIcon
                className="headerLinkIcon"
                icon="circle-exclamation"
              />
              <span>About</span>
            </Link>
          </li>
          <li onClick={() => setIsNavOpen(false)}>
            <Link to="/resume">
              <FontAwesomeIcon className="headerLinkIcon" icon="file" />
              <span>Resume</span>
            </Link>
          </li>
          <li onClick={() => setIsNavOpen(false)}>
            <Link to="/portfolio">
              <FontAwesomeIcon className="headerLinkIcon" icon="briefcase" />
              <span>Portfolio</span>
            </Link>
          </li>
          <li onClick={() => setIsNavOpen(false)}>
            <Link to="/contact">
              <FontAwesomeIcon className="headerLinkIcon" icon="address-book" />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
      {
        <span className="minIcon" onClick={() => setIsNavOpen(true)}>
          <FontAwesomeIcon icon="grip-lines" />
        </span>
      }
    </div>
  );
};
