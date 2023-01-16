import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="contactContainer">
        <div className="top">
          <h1>Get In Touch</h1>
          <p>
            Are you looking for a front-end engineer for freelance, part-time or
            full-time jobs?
          </p>
        </div>

        <div className="main row">
          <div className="mainLeft col-12 col-md-4">
            <h2>Let's connect and work together.</h2>
            <p>
              Don't like forms? Send me an{" "}
              <a href="mailto:joshuamayowa23@yahoo.com">email</a>.
            </p>
          </div>
          <div className="mainRight col-12 col-md-8">
            <form>
              <div className="continer">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input type="text" placeholder="Email Address" />
                  </div>
                </div>

                </div>
                <div className="row">
                  <div className="col-12">
                    <input type="text" placeholder="Subject" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <textarea name="" id="" placeholder="Message"></textarea>
                  </div>
              </div>
              <button>Send Message</button>
            </form>
          </div>
        </div>

        <div className="bottom row">
          <h2 className="bottomLeft col-12 col-md-4">Reach out on social media!</h2>
          <div className="bottomRight col-12 col-md-8">
            <ul className="row">
              <li className="col-xs-12 col-sm-2">
                <Link><FontAwesomeIcon icon="fa-brands fa-github" /> Github</Link>
              </li>
              <li className="col-xs-12 col-sm-2">
                <Link>Linkedln</Link>
              </li>
              <li className="col-xs-12 col-sm-2">
                <Link>Twitter</Link>
              </li>
              <li className="col-xs-12 col-sm-2">
                <Link>Instagram</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
