import React from "react";

import { Fade } from "react-reveal";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import resume from "../assets/Rahul-Chaudhari-Resume.pdf";
import { FaDownload } from "react-icons/fa";

function downloadAndOpenResume(event) {
  const a = document.createElement("a");
  a.href = resume;
  a.download = "Rahul-Chaudhari-Resume.pdf";
  a.click();
}

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about1 about section "
      id="about"
    >
      <Fade top duration={1000} distance="40px">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="flex  pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>
          <Fade top duration={1000} distance="40px">
            <p className="text-xl mt-5">
              Hello! My name is Rahul Chaudhari and I enjoy creating things that
              live on the internet.
            </p>
          </Fade>
          <Fade top duration={1000} distance="40px">
            <p className="text-xl" id="user-detail-intro">
              I'm a passionate Developer with strong administrative and
              communication skills, good attention to detail and the ability to
              write efficient code.
              <br /> <br />
              As I grow and flourish as a Developer, one thing which keeps me
              going is my inquisitiveness for discovering new things every day.
              <br /> <br />
              Fast Forwarding to today,I built a number of web applications and
              3 major projects. Learned a great deal about teamwork, leadership
              and communication. After months of rigorous training, here I am
              looking for an opportunity as a full stack web developer.
            </p>
            <div className="flex items-center mt-4">
              <a
                href={resume}
                className="ml-4 flex items-center"
                target="_blank"
                rel="noreferrer"
                id="resume-link-2"
              >
                <button
                  onClick={downloadAndOpenResume}
                  id="resume-button-2"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Resume
                </button>
                {/* <FaDownload className="ml-2" /> */}
              </a>
            </div>
          </Fade>
        </div>
      </Fade>
    </div>
  );
};

export default About;
