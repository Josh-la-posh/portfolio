import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook, faBriefcase, faCircleExclamation, faCircleXmark, faCode, faEnvelope, faFile, faGripLines, faHand, faHouse, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import App from "./App";
import './index.css';

library.add(fab, faHand, faLinkedin, faTwitter, faInstagram, faGithub, faUserCheck, faCode, faEnvelope, faGripLines, faCircleXmark, faHouse, faAddressBook, faBriefcase, faCircleExclamation, faFile);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
