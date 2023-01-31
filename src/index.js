import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faBootstrap,
  faCss3Alt,
  faGitAlt,
  faGithub,
  faHtml5,
  faInstagram,
  faJs,
  faLinkedin,
  faReact,
  faSass,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAddressBook,
  faBriefcase,
  faCircleExclamation,
  faCircleXmark,
  faCode,
  faEnvelope,
  faFile,
  faGripLines,
  faHand,
  faHouse,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import App from "./App";
import "./index.css";

library.add(
  fab,
  faHand,
  faLinkedin,
  faTwitter,
  faInstagram,
  faGithub,
  faUserCheck,
  faCode,
  faEnvelope,
  faGripLines,
  faCircleXmark,
  faHouse,
  faAddressBook,
  faBriefcase,
  faCircleExclamation,
  faFile,
  faJs,
  faHtml5,
  faCss3Alt,
  faReact,
  faSass,
  faGitAlt,
  faGithub,
  faBootstrap
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
