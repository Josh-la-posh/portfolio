import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="pageBody">
      <div className="pageContainer">
        <header>
          <h1>Meet Joshua Fajobi</h1>
        </header>

        <div className="mainContent row">
          <section className="leftSection col-sm-12 col-md-4">
            <span className="leftSpan">
              <img src="images/myAvatar.png" />
            </span>
          </section>
          <section className="mainRight col-sm-12 col-md-8">
            <article>
              <strong>Who am I?</strong>
              <ul>
                <li className="row">
                  <FontAwesomeIcon
                    icon="user-check"
                    style={{
                      color: "#06B6D4",
                      paddingTop: ".48rem",
                      height: ".8rem",
                    }}
                    className="col-1"
                  />{" "}
                  <span className="col-11">
                    A meticulous front-end developer with hands on experience
                    building responsive and interactive websites using React.
                  </span>
                </li>
                <li className="row">
                  <FontAwesomeIcon
                    icon="user-check"
                    style={{
                      color: "#06B6D4",
                      paddingTop: ".48rem",
                      height: ".8rem",
                    }}
                    className="col-1"
                  />
                  <span className="col-11">
                    A good problem solver, often blending my creativity with my
                    passion to provide efficient solutions for my clients
                  </span>
                </li>
                <li className="row">
                  <FontAwesomeIcon
                    icon="user-check"
                    style={{
                      color: "#06B6D4",
                      paddingTop: ".48rem",
                      height: ".8rem",
                    }}
                    className="col-1"
                  />
                  <span className="col-11">
                    I love being part of a team that includes individuals that
                    are passionate about their jobs, and execute their tasks to
                    perfection
                  </span>
                </li>
                <li className="row">
                  <FontAwesomeIcon
                    icon="user-check"
                    style={{
                      color: "#06B6D4",
                      paddingTop: ".48rem",
                      height: ".8rem",
                    }}
                    className="col-1"
                  />
                  <span className="col-11">
                    A Bachelor’s Degree holder in Mechanical Engineering.
                  </span>
                </li>
              </ul>
            </article>
            <article>
              <strong>What I do?</strong>
              <div className="whatIDo">
                <div className="myContainer">
                  <div className="logo">
                    <FontAwesomeIcon icon="code" />
                  </div>
                  <span>Front-End Web Development</span>
                </div>
              </div>
            </article>
            <article>
              <span>
                I'm super excited you're here. Feel free to{" "}
                <Link style={{ color: "#06B6D4" }} to="/contact">
                  reach out to me
                </Link>{" "}
                with any project ideas you have or to just say hello!
              </span>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
};
