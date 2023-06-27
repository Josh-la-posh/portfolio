import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Resume.css";

export const Resume = () => {
  return (
    <div className="pageBody">
      <div className="pageContainer">
        <header>
          <h1>Resume</h1>
          <p>Learn more about my skills, qualifications and experiences.</p>
        </header>

        <div className="main">
          <section className="row">
            <article className="sideBar col-12 col-md-4">
              <h2 className="title">Work Experience</h2>
              <p>PRESENT & PREVIOUS JOBS</p>
            </article>
            <article className="mainContent col-12 col-md-8">
              <div className="">
                <p className="myColor">May 2023 - Present</p>
                <strong>Front-end Developer</strong>
                <p style={{ fontSize: "1em", color: "#333" }}>
                  Bimbs Tech (Contract)
                </p>
                <ul>
                  <li>
                    Developed a responsive landing page using Next.js and
                    TypeScript, ensuring optimal performance and user
                    experience.
                  </li>
                  <li>
                    Utilized React, Vite, and TypeScript to build a
                    comprehensive school application, incorporating features
                    such as user authentication, dashboard, course management,
                    attendance, e.t.c while maintaining high efficiency and
                    responsiveness.
                  </li>
                  <li>
                    Conducted thorough testing and debugging to identify and fix
                    any front-end issues or performance bottlenecks, ensuring an
                    efficient and seamless user experience.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to gather
                    requirements, provide technical insights, and deliver
                    high-quality solutions within project timelines while
                    optimizing resource utilization.
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="myColor">March 2022 - Present</p>
                <strong>Front-end Developer</strong>
                <p style={{ fontSize: "1em", color: "#333" }}>
                  Health Station Ltd.
                </p>
                <ul>
                  <li>
                    Contributed to the software team responsible for building
                    software to support the company's hardware products.
                  </li>
                  <li>
                    Applied my knowledge of DSA and SOLID principles to write
                    better and neater code, thereby increasing the efficiency of
                    the application by ~40%.
                  </li>
                </ul>
              </div>
            </article>
          </section>
          <section className="row">
            <article className="sideBar col-12 col-md-4">
              <h2 className="title">Education</h2>
              <p>ACADEMY CAREER</p>
            </article>
            <div className="col-12 col-md-8">
              <article className="mainContent">
                <h4 className="myColor">Front End Development Libraries</h4>
                <p>
                  <em>freeCodeCamp</em>
                </p>
                <p className="date">July 2022 - Feb 2023</p>
                <p>
                  This course extensively taught me various libraries used in
                  building frontend applications including: <br />
                  <ul>
                    <li>Bootstrap</li>
                    <li>jQuery</li>
                    <li>SASS</li>
                    <li>React</li>
                    <li>Redux</li>
                  </ul>
                </p>
              </article>
              <article className="mainContent">
                <h4 className="myColor">Responsive Web Design</h4>
                <p>
                  <em>freeCodeCamp</em>
                </p>
                <p className="date">July 2021 - Oct 2021</p>
                <p>
                  This course taught me comprehensively various technical sklls
                  in designing a responsive websites that adapt to different
                  screen sizes and devices, providing users with an optimal
                  viewing and navigation experience. Completed several projects
                  encompassing the knowledge of: <br />
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                </p>
              </article>
              <article className="mainContent">
                <h4 className="myColor">BSC. IN MECHANICAL ENGINEERING</h4>
                <p>
                  <em>University of Lagos, Nigeria.</em>
                </p>
                <p className="date">Dec 2016 - Nov 2021</p>

                <ul>
                  <li>
                    Relevant Coursework: Data Structures, Introduction to
                    Programming Language, Python Programming Language.
                  </li>
                </ul>
              </article>
            </div>
          </section>
          <section className="row">
            <article className="sideBar col-12 col-md-4">
              <h2 className="title">Tech Stack</h2>
              <p>TOOLS & TECHNOLOGIES</p>
            </article>
            <article className="mainContent col-12 col-md-8">
              <ul className="stacks">
                <li className="stack">
                  <FontAwesomeIcon
                    icon={["fab", "fa-html5"]}
                    style={{ color: "#e34c26", width: "40", height: "40" }}
                  />
                </li>
                <li className="stack">
                  <FontAwesomeIcon
                    icon={["fab", "fa-css3-alt"]}
                    style={{ color: "#2965f1", width: "40", height: "40" }}
                  />
                </li>
                <li className="stack">
                  <FontAwesomeIcon
                    icon={["fab", "fa-js"]}
                    style={{ color: "#F0DB4F", width: "40", height: "40" }}
                  />
                </li>
                <li className="stack">
                  <img src="../../../icons/typescript.png" alt="" width={35} />
                </li>
                <li className="stack">
                  <img src="../../../icons/python.svg" alt="" width={40} />
                </li>
                <li className="stack">
                  <FontAwesomeIcon
                    icon={["fab", "fa-react"]}
                    style={{ color: "#61dbfb", width: "40", height: "40" }}
                  />
                </li>
                <li className="stack">
                  <img src="../../../icons/next.png" alt="" width={40} />
                </li>
                <li className="stack">
                  <img src="../../../icons/dart.png" alt="" width={40} />
                </li>
                <li className="stack">
                  <img src="../../../icons/flutter.png" alt="" width={40} />
                </li>
                <li className="stack">
                  <FontAwesomeIcon
                    icon={["fab", "fa-sass"]}
                    style={{ color: "#cc6699", width: "40", height: "40" }}
                  />
                </li>
                <li className="stack">
                  <img src="../../../icons/tailwind.png" alt="" width={40} />
                </li>
                <li className="stack">
                  <FontAwesomeIcon
                    icon={["fab", "fa-bootstrap"]}
                    style={{ color: "#563d7c", width: "40", height: "40" }}
                  />
                </li>
                <li className="stack">
                  <FontAwesomeIcon
                    icon={["fab", "fa-git-alt"]}
                    style={{ color: "#f34f29", width: "40", height: "40" }}
                  />
                </li>
                <li className="stack">
                  <FontAwesomeIcon
                    icon={["fab", "fa-github"]}
                    style={{ color: "#171515", width: "40", height: "40" }}
                  />
                </li>
                <li className="stack">
                  <img src="../../../icons/bitbucket.png" alt="" width={40} />
                </li>
                <li className="stack">
                  <img
                    src="../../../icons/linux.png"
                    alt=""
                    width={80}
                    style={{ marginLeft: "-1.5rem", marginRight: '-1.5rem' }}
                  />
                </li>
                <li className="stack">
                  <img
                    src="../../../icons/netlify.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </li>
                <li className="stack">
                  <img src="../../../icons/firebase.png" alt="" width={40} />
                </li>
              </ul>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
};
