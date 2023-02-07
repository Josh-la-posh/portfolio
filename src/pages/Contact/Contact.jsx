import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Contact = () => {
  return (
    <div className="pageBody">
      <div className="pageContainer">
        <header>
          <h1>Get In Touch</h1>
          <p>
            Are you looking for a front-end engineer for freelance, part-time or
            full-time jobs?
          </p>
        </header>

        <div className="mainContent row">
          <section className="mainLeft col-sm-12 col-md-4">
            <h2 className="myColor">Let's work together!</h2>
            <p>
              Don't like forms? Send me an{" "}
              <a
                style={{ color: "#06B6D4" }}
                href="mailto:joshuamayowa23@yahoo.com"
              >
                email
              </a>{" "}
              <FontAwesomeIcon icon="hand" style={{ color: "gold" }} />.
            </p>
          </section>
          <section className="mainRight col-sm-12 col-md-8">
            <form method="POST" action="https://getform.io/f/f6d32946-aa51-4f76-a038-482862500667">
              <div className="continer">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <input type="text" placeholder="Your Name" name="name" required/>
                  </div>
                  <div className="col-12 col-sm-6">
                    <input type="email" placeholder="Email Address" name="email" required/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <input type="text" placeholder="Subject" name="subject" required/>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <textarea name="message" id="" placeholder="Message" required></textarea>
                </div>
              </div>
              <button>Send Message</button>
            </form>
          </section>
        </div>

        <div className="bottom row">
          <h2 className="bottomLeft myColor col-12 col-md-4">
            Reach out on social media!
          </h2>
          <div className="bottomRight col-12 col-md-8">
            <ul className="row">
              <li className="col-xs-12 col-sm-2">
                <a target="_blank" href="https://github.com/Josh-la-posh">
                  <FontAwesomeIcon
                    className="icon"
                    icon={["fab", "github"]}
                    style={{ color: "#171515" }}
                  />{" "}
                  Github
                </a>
              </li>
              <li className="col-xs-12 col-sm-2">
                <a target="_blank" href="https://www.linkedin.com/in/jfajobi/">
                  <FontAwesomeIcon
                    className="icon"
                    icon={["fab", "linkedin"]}
                    style={{ color: "#0072b1" }}
                  />{" "}
                  Linkedln
                </a>
              </li>
              <li className="col-xs-12 col-sm-2">
                <a target="_blank" href="https://www.twitter.com/nova_jy">
                  <FontAwesomeIcon
                    className="icon"
                    icon={["fab", "twitter"]}
                    style={{ color: "rgb(29, 161, 242)" }}
                  />{" "}
                  Twitter
                </a>
              </li>
              <li className="col-xs-12 col-sm-2">
                <a
                  target="_blank"
                  href="https://www.instagram.com/josh_la_posh"
                >
                  <FontAwesomeIcon
                    className="icon"
                    icon={["fab", "instagram"]}
                    style={{ color: "rgb(251, 57, 88)" }}
                  />{" "}
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
