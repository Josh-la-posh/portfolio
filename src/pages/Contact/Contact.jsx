import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Contact = () => {
  return (
    <div className="contact">
      <div className="contactContainer">
        <header>
          <h1>Get In Touch</h1>
          <p>
            Are you looking for a front-end engineer for freelance, part-time or
            full-time jobs?
          </p>
        </header>

        <div className="mainContent row">
          <section className="mainLeft col-sm-12 col-md-4">
            <h2>Let's connect and work together.</h2>
            <p>
              Don't like forms? Send me an{" "}
              <a href="mailto:joshuamayowa23@yahoo.com">email</a> <FontAwesomeIcon icon="hand" style={{color: 'gold'}}/>.
            </p>
          </section>
          <section className="mainRight col-sm-12 col-md-8">
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
          </section>
        </div>

        <div className="bottom row">
          <h2 className="bottomLeft col-12 col-md-4">Reach out on social media!</h2>
          <div className="bottomRight col-12 col-md-8">
            <ul className="row">
              <li className="col-xs-12 col-sm-2">
                <a target='_blank' href='https://github.com/Josh-la-posh'><FontAwesomeIcon className="icon" icon={["fab", "github"]} style={{color: '#171515'}} /> Github</a>
              </li>
              <li className="col-xs-12 col-sm-2">
                <a target='_blank' href='https://www.linkedin.com/in/jfajobi/'><FontAwesomeIcon className="icon" icon={["fab", "linkedin"]} style={{color: '#0072b1'}} /> Linkedln</a>
              </li>
              <li className="col-xs-12 col-sm-2">
                <a target='_blank' href='https://www.twitter.com/nova_jy'><FontAwesomeIcon className="icon" icon={["fab", "twitter"]} style={{color: 'rgb(29, 161, 242)'}}/> Twitter</a>
              </li>
              <li className="col-xs-12 col-sm-2">
                <a target='_blank' href='https://www.instagram.com/josh_la_posh'><FontAwesomeIcon className="icon" icon={["fab", "instagram"]} style={{color: 'rgb(251, 57, 88)'}} /> Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
