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
              <p>July 2023 - Present</p>
              <h3>Software Engineer</h3>
              <p style={{fontSize: '1em', color: '#333'}}>Health Station Ltd.</p>
              <ul>
                <li>Utilized HTML, CSS, and JavaScript to create 100+ responsive landing pages for the company</li>
                <li>
                  Worked with the software team to build software to support the company's hardware products.
                </li>
                <li>Designed, developed and maintained the front-end application for the company's project using ReactJS, TypeScript and Ant Design</li>
              </ul>
            </article>
          </section>
          <section className="row">
            <article className="sideBar col-12 col-md-4">
              <h2 className="title">Education</h2>
              <p>ACADEMY CAREER</p>
            </article>
            <div className="col-12 col-md-8">
              <article className="mainContent">
                <h3>Responsive Web Design</h3>
                <p><em>freeCodeCamp</em></p>
                <p className="date">July 2021 - Oct 2021</p>
                <p>This course taught me comprehensively various technical sklls important in frontend web development. Completed several projects encompassing the knowledge of: <br />

                  <ul>
                    <li>HTML, CSS</li>
                    <li>Responsive Web Design</li>
                  </ul>
                </p>
              </article>
              <article className="mainContent">
                <h3>BSC. IN MECHANICAL ENGINEERING</h3>
                <p><em>University of Lagos, Nigeria.</em></p>
                <p className="date">Dec 2016 - Nov 2021</p>

                  <ul>
                    <li>HTML, CSS</li>
                    <li>Responsive Web Design</li>
                  </ul>
              </article>
            </div>
          </section>
          <section className="row">
            <article className="sideBar col-12 col-md-4">
              <h2 className="title">Tech Stack</h2>
              <p>TOOLS & TECHNOLOGIES</p>
            </article>
            <div className="mainContent col-12 col-md-8">
              
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};