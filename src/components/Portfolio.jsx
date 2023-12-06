import React from "react";
// import jcrew from "../assets/portfolio/jcrew.png";
// import lifestore from "../assets/portfolio/lifestore.png";
// import mynthresa from "../assets/portfolio/mynthresa.png";
// import buffer from "../assets/portfolio/buffer.png"
// import sudoku from "../assets/portfolio/sudoku.png"
// import harvest from "../assets/portfolio/harvest.png"
import flower from "../assets/portfolio/FlowerBazar.png";
import diamond from "../assets/portfolio/DiamondLand.png";
import healhub from "../assets/portfolio/HealHub.png";
import TicTacToe from "../assets/portfolio/TicTacToe.png";
import WeatherApp from "../assets/portfolio/Weatherapp.png";
import CounterApp from "../assets/portfolio/CounterApp.png";
import CodeFlexor from "../assets/portfolio/CodeFlexor.png";
import GenAI from "../assets/portfolio/GenAI.png";
import { Fade } from "react-reveal";
import ChatVista from "../assets/portfolio/ChatVista.png";
import { FaEye, FaGithub } from "react-icons/fa";
const Portfolio = () => {
  const portfolios = [
    //   {

    //     id: 1,
    //     src: harvest,
    //     link: 'https://harvestappclone.netlify.app/',
    //     repo: 'https://github.com/vin9012d/Harvest_clone',
    //     text:"Harvest site clone",
    //     skills: " Mongodb, Nodejs, Express, Mongoose, React, Redux, Javascript, Chakra UI",
    //     desc:`Harvest is a web app for time tracking and projects management.
    //     Created Full Stack App to handle all the details about the project,employee time tracking...`,
    //     title:"Harvest Clone"

    // },
    {
      id: 3,
      src: ChatVista,
      link: "https://chat-app-chat-vista.vercel.app/",
      repo: "https://github.com/chaudhari014/chat-app-chatVista",
      text: "ChatVista",
      skills:
        "Node, Express, MongoDB, Mongoose, Javascript, Socket.io, jwt, bcrypt,React, Chakra UI",
      desc: "ChatVista is a robust chat application that facilitates both one-on-one and group chat functionalities. The application offers seamless real-time communication, ensuring an engaging and interactive chatting experience for users.",
      title: "ChatVista",
    },
    {
      id: 4,
      src: healhub,
      link: "https://heal-hub.vercel.app/",
      repo: "https://github.com/chaudhari014/handy-string-7765",
      text: "Pactro site clone",
      skills: "Javascript,React,CSS,mongoDB,nodejs,NPM Packages,socket.io",
      desc: "HealHub is an online platform that facilitates virtual patient-doctor meetings, mirroring a popular healthcare service. Users can easily book, cancel appointments, and make secure online payments for medical consultations.",
      title: "HealHub",
    },
    {
      id: 5,
      src: diamond,
      link: "https://dulcet-monstera-862eeb.netlify.app",
      repo: "https://github.com/chaudhari014/legit-building-8885",
      text: "Caratlane site clone",
      skills: "Javascript,HTML,CSS,jsonServer,CRUD",
      desc: "This project is about building an online e-commerce store. Here I implemeted all the functionalities of an e-commerce website like sorting,add to cart,checkout..etc  ",
      title: "Caratlane Clone",
    },
    {
      id: 6,
      src: flower,
      link: "https://helpful-pasca-1ba90e.netlify.app/",
      repo: "https://github.com/chaudhari014/efficient-veil-6767",
      text: "flower1800 site clone",
      skills: "Javascript,HTML,CSS",
      desc: "FlowerBazar is an online e-commerce store, inspired by the flower1800 website. The project embodies essential e-commerce functionalities such as sorting, adding to cart, and seamless checkout, demonstrating proficiency in JavaScript, HTML, and CSS",
      title: "FlowerBazar",
    },
    {
      id: 7,
      src: TicTacToe,
      link: "https://tic-tac-toe-one-wine.vercel.app/",
      repo: "https://github.com/chaudhari014/Tic-Tac-Toe",
      text: "Tic-Tac-Toe",
      skills: "React,Javascript,CSS",
      desc: `Tic-Tac-Toe is a classic game brought to life in a digital format, offering an entertaining and nostalgic gaming experience. Built using React, JavaScript, and CSS, this project showcases my proficiency in front-end web development.`,
      title: "Tic-Tac-Toe",
    },
    {
      id: 0,
      src: CodeFlexor,
      link: "code-converter-pi.vercel.app/",
      repo: "https://github.com/chaudhari014/code-converter",
      text: "CodeFlexor",
      skills: "React,TypeScript,CSS,ChakraUI,OpenAI",
      desc: `CodeFlexor is a versatile tool that serves as a code converter, code quality checker, and code debugger. It empowers developers to streamline their coding workflow and enhance code quality effortlessly.`,
      title: "CodeFlexor",
    },

    {
      id: 8,
      src: WeatherApp,
      link: "https://angular-weatherapp-ten.vercel.app/",
      repo: "https://github.com/chaudhari014/angular-weatherapp",
      text: "Weather-App",
      skills: "angular,typescript,CSS,wheatherAPI",
      desc: `WeatherApp is a simple Angular project that provides real-time weather information. Using TypeScript and CSS, it's designed to be user-friendly and responsive.`,
      title: "WeatherApp",
    },
    {
      id: 9,
      src: GenAI,
      link: "https://chat-boat-chatgpt.vercel.app/",
      repo: "https://github.com/chaudhari014/chat-Boat-chatgpt",
      text: "Advance-AI content generation",
      skills: "react,javascript,CSS,openAIAPI",
      desc: `GenAI is an innovative project showcasing advanced AI content generation capabilities. Built with React, JavaScript, and CSS, it harnesses the power of the OpenAI API to generate dynamic and context-aware content. Experience the cutting edge of AI-driven content creation by exploring GenAI`,
      title: "Advance-AI content generation",
    },
    {
      id: 10,
      src: CounterApp,
      link: "https://counter-app-angular-zeta.vercel.app/",
      repo: "https://github.com/chaudhari014/counter-app-angular",
      text: "counterApp",
      skills: "angular,typescript,CSS",
      desc: `counterApp is a straightforward Angular project that lets you increment and decrement a counter with a satisfying click sound for each action. It's a simple yet enjoyable way to explore basic Angular functionality.`,
      title: "counterApp",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pb-16 portfolio1 projects "
      id="projects"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo, title, desc, skills }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-110 project-card"
            >
              <Fade top duration={1000} distance="40px">
                {" "}
                <img
                  src={src}
                  alt="projects"
                  className="rounded-md hover:scale-110 duration-500 "
                />{" "}
              </Fade>
              <div className="p-4">
                <p className="text-center text-xl p-2 project-title">{title}</p>
                <p className="text-sm project-description">{desc}</p>
                <p className="mt-5 text-sm project-tech-stack overflow-wrap ">
                  Tech Stack : {skills}
                </p>
              </div>
              <div className="flex m-auto items-center justify-between">
                <button
                  className=" px-6 py-1 m-4 duration-200 text-center   hover:scale-110 project-deployed-link"
                  onClick={() => window.open(link, "_blank")}
                >
                  <FaEye size={30} />
                </button>
                <button
                  className=" px-6 py-1 m-4 text-center duration-200 hover:scale-110 project-github-link "
                  onClick={() => window.open(repo, "_blank")}
                >
                  <FaGithub size={30} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
