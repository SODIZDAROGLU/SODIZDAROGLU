import React from "react";
import Typical from "react-typical";
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/sukru-oguz-dizdaroglu-05aaba198/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              {/* <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a> */}
              <a href="https://github.com/SODIZDAROGLU">
                <i className="fa fa-github-square"></i>
              </a>
              {/* <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a> */}
              {/* <a href="#">
                <i className="fa fa-twitter"></i>
              </a> */}
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">SUKRU OGUZ DIZDAROGLU</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Developer 💻",
                    1000,
                    "Mern Stack Dev 🤓",
                    1000,
                    "React Dev 📱",
                    1000,
                    "C# 🖥️",
                    1000,
                    ".Net 🖥️",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a href="sod.pdf" download="sod.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-backround"></div>
        </div>
      </div>
    </div>
  );
}
