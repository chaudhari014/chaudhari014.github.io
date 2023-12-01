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
              I'm a new developer excited about building things on the web. I
              know how to create websites using React, Angular, JavaScript,
              TypeScript, CSS, HTML, and other tools. I'm also familiar with
              Chakra UI, which helps make websites look good
              <br /> <br />
              Even though I'm just starting out, I'm keen on learning and have
              some knowledge about cool stuff like Generative AI. I want to work
              on interesting projects that challenge me and help me grow as a
              developer.
              <br /> <br />
              I'm looking for a chance to join a company where I can learn from
              experienced folks, work on exciting projects, and bring my energy
              and fresh ideas to the team.
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
