import React from "react";
import "./Introduction.css";
import venkatesh from "../../Assets/images/venkatesh.png";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img
                src={venkatesh}
                alt="Images"
              />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, I am{" "}
                <span className="different">Venkatesh Mundkar </span> from{" "}
                <span className="different"> Nanded, Maharashtra</span>. I
                have completed my graduation in Computer Sciense & Engineering from
                Pimpri Chinchwad College Of Engineering.
                A Full-stack web developer with strong technical skills. An impactful team player with creative problem - solving skills and willing to build user - friendly products. Looking for a role as a developer to implement diverse experience and be a part of a growth-oriented environment.
              </h4>
              <h4>Some of my interests apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Playing Cricket & Football{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Drawing{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Watching Movies{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Listening Old Songs{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
