import "./Portfolio.css";
import { Data } from "../../data/data";

export const Portfolio = () => {
  return (
    <div className="pageBody">
      <div className="pageContainer">
        <header>
          <h1>Portfolio</h1>
          <p>Portfolio showcase of some of my work.</p>
        </header>

        <div className="mainContent row">
          <div className="container">
            <div className="row portfolioContent">
              {Data.map((data) => {
                return (
                  <div key={data.id} className="col1 col-md-6 col-sm-12">
                    <div className="boxContainer">
                      <div className="imgContainer">
                        <img src={data.img} alt="" />
                      </div>
                      <div className="btns">
                        <ul>
                          <li>
                            <a target="_blank" href={`${data.demoLink}`}>
                              Demo
                            </a>
                          </li>
                          <li>
                            <a target="_blank" href={`${data.githubLink}`}>
                              {!data.githubLink.length ? '' : 'Code'}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
