import "./Resume.css";

export const Resume = () => {
  return (
    <div className="resume">
      <div className="resumeContainer">
        <header>
          <h1>Resume</h1>
          <p>Learn more about my skills, qualifications and experiences.</p>
        </header>

        <div className="main">
          <section className="row">
            <div className="sideBar col-12 col-md-4">
              <h2 className="title">Work Experience</h2>
              <p>PRESENT & PREVIOUS JOBS</p>
            </div>
            <div className="mainContent col-12 col-md-8">
              <p>July 2023 - Present</p>
              <h3>Software Engineer</h3>
              <p>Health Station Ltd.</p>
              <ul>
                <li>Utilized HTML, CSS, and JavaScript to create 100+ responsive landing pages for the company</li>
                <li>
                  Worked with the software team to build software to support the company's hardware products.
                </li>
                <li>Designed, developed and maintained the front-end application for the company's project using ReactJS, TypeScript and Ant Design</li>
              </ul>
            </div>
          </section>
          <section className="row">
            <div className="sideBar col-12 col-md-4">
              <h2 className="title">Education</h2>
              <p>ACADEMY CAREER</p>
            </div>
            <div className="col-12 col-md-8">
              <div className="mainContent">
                <h3>Responsive Web Design</h3>
                <p><em>freeCodeCamp</em></p>
                <p>July 2021 - Oct 2021</p>
                <p>This course taught me comprehensively various technical sklls important in frontend web development. Completed several projects encompassing the knowledge of: <br />

                  <ul>
                    <li>HTML, CSS</li>
                    <li>Responsive Web Design</li>
                  </ul>
                </p>
              </div>
              <div className="mainContent">
                <h3>BSC. IN M ENGINEERING</h3>
                <p><em>University of Lagos, Nigeria.</em></p>
                <p>Dec 2016 - Nov 2021</p>

                  <ul>
                    <li>HTML, CSS</li>
                    <li>Responsive Web Design</li>
                  </ul>
              </div>
            </div>
          </section>
          <section className="row">
            <div className="sideBar col-12 col-md-4">
              <h2 className="title">Tech Stack</h2>
              <p>TOOLS & TECHNOLOGIES</p>
            </div>
            <div className="mainContent col-12 col-md-8">
              ha
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};