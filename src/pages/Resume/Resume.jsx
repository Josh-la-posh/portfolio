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
                <p className="myColor">May 2024 - Present</p>
                <strong>Software Engineer</strong>
                <p style={{ fontSize: "1em", color: "#333" }}>
                  Chams Switch LTD.
                </p>
                <ul>
                  <li>
                    Single-handedly redesigned and developed the company's
                    website and dashboard, significantly improving user
                    experience and functionality.
                  </li>
                  <li>
                    Utilized modern frontend technologies and best practices to
                    create a responsive and intuitive interface for both the
                    website and dashboard.
                  </li>
                  {/* <li>
                    Worked closely with the backend team to integrate APIs, optimize performance, and ensure seamless data flow between frontend and backend systems.
                  </li> */}
                  {/* <li>
                    Implemented robust state management solutions to handle
                    complex data interactions within the dashboard.
                  </li>
                  <li>
                    Contributed to the overall improvement of the company's
                    digital presence and operational efficiency through
                    innovative frontend solutions.
                  </li> */}
                  <li>
                    Worked closely with the backend team to integrate APIs,
                    optimize performance, and ensure seamless data flow between
                    frontend and backend systems.
                  </li>
                  <li>
                    Implemented robust state management solutions to handle
                    complex data interactions within the dashboard.
                  </li>
                  <li>
                    Contributed to the overall improvement of the company's
                    digital presence and operational efficiency through
                    innovative frontend solutions.
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="myColor">March 2024 - December 2024</p>
                <strong>Software Engineer</strong>
                <p style={{ fontSize: "1em", color: "#333" }}>
                  MyPouch (Contract)
                </p>
                <ul>
                  <li>
                    Developed a robust currency exchange mobile application
                    using Flutter, delivering a seamless and intuitive user
                    experience for iOS and Android platforms.
                  </li>
                  <li>
                    Implemented efficient state management using Provider,
                    ensuring smooth data flow and responsive UI updates
                    throughout the app.
                  </li>
                  <li>
                    Designed and built key features for currency conversion,
                    real-time exchange rates, and user transaction history,
                    enhancing the app's functionality and user engagement.
                  </li>
                  <li>
                    Collaborated closely with the backend team to integrate
                    RESTful APIs, optimizing data synchronization and ensuring
                    real-time currency information.
                  </li>
                  <li>
                    Implemented secure user authentication and data encryption
                    protocols to protect sensitive financial information.
                  </li>
                  <li>
                    Conducted thorough testing and debugging to ensure a
                    high-quality, stable application before deployment to app
                    stores.
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="myColor">July 2023 - December 2023</p>
                <strong>Frontend Tutor</strong>
                <p style={{ fontSize: "1em", color: "#333" }}>
                  Digital Skill Schools (Contract)
                </p>
                <ul>
                  <li>
                    Taught programming languages and concepts to students of
                    varying skill levels, focusing on practical application and
                    real-world projects.
                  </li>
                  <li>
                    Developed curriculum and teaching materials for programming
                    courses, utilizing interactive learning activities and
                    practical exercises to increase student retention.
                  </li>
                  <li>
                    Mentored and supported students in their learning journey,
                    providing guidance and feedback to help achieve their
                    learning goals.
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="myColor">May 2023 - November 2023</p>
                <strong>Software Engineer</strong>
                <p style={{ fontSize: "1em", color: "#333" }}>
                  GG Consult (Contract)
                </p>
                <ul>
                  <li>
                    Developed a custom Admin User Interface library that
                    increased developer productivity and code reusability.
                  </li>
                  <li>
                    Optimized the application for performance, resulting in a
                    <strong> 60% </strong>reduction in loading time.
                  </li>
                  <li>
                    Deployed 1 android application, integrated with Paystack and
                    Braintree payment gateway
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="myColor">July 2022 - March 2023</p>
                <strong>Software Engineer</strong>
                <p style={{ fontSize: "1em", color: "#333" }}>
                  Bimbs Tech (Contract)
                </p>
                <ul>
                  <li>
                    Contributed to the creation of engaging user interfaces and
                    deliver high-quality web applications that meet both
                    functional and aesthetic requirements.
                  </li>
                  <li>
                    Implemented state management solutions (React's state and
                    context API, Redux) to manage application state and data
                    flow.
                  </li>
                  <li>
                    Developed single-page web applications using React, Next,
                    Redux, and Typescript that enabled users to access the
                    company’s resources with ease.
                  </li>
                  <li>
                    Wrote unit tests for components and services to ensure code
                    stability and reduce bugs.
                  </li>
                  <li>
                    Integrated with backend APIs and services to fetch and
                    update data using RESTful interfaces.
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="myColor">February 2022 - February 2024</p>
                <strong>Software Engineer</strong>
                <p style={{ fontSize: "1em", color: "#333" }}>
                  Health Station Ltd.
                </p>
                <ul>
                  <li>
                    Worked as a frontend and mobile engineer, contributing to
                    the development of web and mobile applications.
                  </li>
                  <li>
                    Created user-friendly interfaces and improved the user
                    experience across various platforms.
                  </li>
                  <li>
                    Led the development of the company’s mobile application
                    using Flutter, improving patient engagements by <strong>50%</strong>.
                  </li>
                  <li>
                    Implemented real-time chat functionality for patient-doctor
                    communication using WebSocket and Firebase.
                  </li>
                  <li>
                    Developed and maintained responsive web applications using
                    React.js and TypeScript, ensuring compatibility across
                    various devices.
                  </li>
                  <li>
                    Collaborated with cross-functional teams, including
                    designers and backend developers to deliver high-quality
                    products on time.
                  </li>
                  <li>
                    Integrated third-party APIs and services to enhance
                    application functionality and user experience.
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
                    style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
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
