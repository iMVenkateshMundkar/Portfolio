import React from "react";
import "./Projects.css";
import fabindia from "../../Assets/images/fabindia.PNG";
import shopping from "../../Assets/images/Shopping-Mart.png";
import paytmmall from "../../Assets/images/paytmmall.png"
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiCss3,
  SiRedux,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={shopping}
                  alt="shopping"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Shopping Mart</h2>
              <p>
                Shopping Mart is an ecommerce platform where users can find different kinds of hair products of various brands. User can create an account and login into it. User can check orders ordered by him. User can add addresses and remove them.
              </p>
              <div>
                <SiHtml5 />
                <SiCss3 />
                <SiNodedotjs />
                <FaReact />
                <SiRedux />
                <SiExpress />
                <SiMongodb />

              </div>
              <div>
                <a
                  href="https://vm-shopping-mart.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/iMVenkateshMundkar/Shopping-Mart-Frontend"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={paytmmall}
                  alt="paytmmall"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>PaytmMall Clone</h2>
              <p>
                It was a team project.We implemented some product sorting and filtering features, We used local storage for data handling and implemented signup, login, individual product page, category-wise page, address input, cart, checkout page, etc.
              </p>
              <div>
                <SiHtml5 />
                <SiCss3 />
                <SiJavascript />
              </div>
              <div>
                <a
                  href="https://suspicious-wing-0660d2.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/sameerah2710/PaytmMall-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={fabindia}
                  alt="fabindia"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Fabindia Clone</h2>
              <p>
                FabIndia is an e-commerce platform where user can buy clothes and home garment.In it there are many category of clothes. User can add as many as products in his/her cart and buy them.
              </p>
              <div>
                <SiHtml5 />
                <SiCss3 />
                <SiJavascript />
              </div>
              <div>
                <a
                  href="https://fabindia-masai.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/iMVenkateshMundkar/Fabindia-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/94324872/174451638-eb29e1d3-de83-406e-af8a-5a168c94380a.png"
                  alt="To-Do-App"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>To-Do Application</h2>
              <p>
              To-Do Application, MERN project where a user can Create task. The user can Update, Edit, Delete and also change the status of task.
              </p>
              <div>
              <SiExpress />
                <SiMongodb />
              <FaReact />
                <SiNodedotjs />
                <SiRedux/>
              </div>
              <div>
                <a
                  href="https://to-do-app-alokkushwaha.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Alok0818/To-Do-Application"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/PMny3hW/Screenshot-406.png"
                  alt="TicTacToe"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Star Wars Search</h2>
              <p>
                Vanilla JS web app to Search for any Star Wars Character. Build with the help of Star Wars API and has the Classic UI (Color theme) of the original Star Wars Movie. Built to learn APIs and use them in the project.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://searchstarwars.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/imbickydutta/starWarsCharacterSearch"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};
