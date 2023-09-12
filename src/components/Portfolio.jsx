import React from "react";
// import jcrew from "../assets/portfolio/jcrew.png";
// import lifestore from "../assets/portfolio/lifestore.png";
// import mynthresa from "../assets/portfolio/mynthresa.png";
// import buffer from "../assets/portfolio/buffer.png"
// import sudoku from "../assets/portfolio/sudoku.png"
// import harvest from "../assets/portfolio/harvest.png"
import flower from "../assets/portfolio/FlowerBazar.png"
import diamond from "../assets/portfolio/DiamondLand.png"
import healhub from "../assets/portfolio/HealHub.png"
import { Fade } from "react-reveal"
import { FaEye,FaGithub} from "react-icons/fa";
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
  //   {

  //     id: 2,
  //     src: buffer,
  //     link: 'https://bufferr.netlify.app/',
  //     repo: 'https://github.com/vin9012d/Buffer_clone.git',
  //     text:"Buffer site clone",
  //     skills: "React, Redux, React-redux, NPM packages,Javascript, Chakra UI, CSS",
  //     desc:`This project is clone of Buffer.com   which is digital marketing management site. Here I implemented some functionalities like genetate the graph from data,connect the channels..etc  `,
  //     title:"Buffer Clone"
    

  // },
  //   {
  //     id: 3,
  //     src: lifestore,
  //     link: 'https://lifestoreclone.vercel.app/',
  //     repo: 'https://github.com/vin9012d/Lifestore_clone.git',
  //     text: "Lifestore site clone",
  //     skills: "React, NPM packages,Javascript, Chakra UI, CSS",
  //     desc: "This project is about building an online e-commerce store. Here with the use of React I implemeted the functionalities of an e-commerce website like filtering,add to cart,checkout..etc  ",
  //     title:"Lifestore Clone"
  //   },
    {
      id: 4,
      src: healhub,
      link: 'https://healhub-becausewecare.netlify.app/',
      repo: 'https://github.com/chaudhari014/handy-string-7765',
      text: "Pactro site clone",
      skills: "Javascript,Reac,CSS,mondoDB,nodejs,NPM",
      desc: "This project is about building an online patient and doctor vertual meeting.Here I implement all functionality Book Appotment Cancle Appotment and Payment Functionalities",
      title:"HealHub"
    },
    {
      id: 5,
      src: diamond,
      link: 'https://dulcet-monstera-862eeb.netlify.app',
      repo: 'https://github.com/chaudhari014/legit-building-8885',
      text: "Caratlane site clone",
      skills: "Javascript,HTML,CSS,jsonServer,CRUD",
      desc: "This project is about building an online e-commerce store. Here I implemeted all the functionalities of an e-commerce website like sorting,add to cart,checkout..etc  ",
      title:"Caratlane Clone"
    },
    {
      id: 6,
      src: flower,
      link: 'https://helpful-pasca-1ba90e.netlify.app/',
      repo: 'https://github.com/chaudhari014/efficient-veil-6767',
      text: "flower1800 site clone",
      skills: "Javascript,HTML,CSS",
      desc: "This project is about building an online e-commerce store. Here I implemeted all the functionalities of an e-commerce website like sorting,add to cart,checkout..etc  ",
      title:"FlowerBazar"
    }


  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pb-16 portfolio1 projects "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo ,title,desc,skills}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-110">
           <Fade top duration={1000} distance="40px">    <img
                src={src}
                alt="projects"
                className="rounded-md hover:scale-110 duration-500 "
              /> </Fade>
              <div className="p-4">
                <p className="text-center text-xl p-2" >{title}</p>
                <p className="text-sm">{ desc}</p>
                <p className="mt-5 text-sm">Tech Stack : { skills}</p>
              </div>
              <div className="flex m-auto items-center justify-between">
                <button className=" px-6 py-1 m-4 duration-200 text-center   hover:scale-110" onClick={ () => window.open(link, '_blank')}>
                  <FaEye size={30} />
                </button>
                <button className=" px-6 py-1 m-4 text-center duration-200 hover:scale-110 " onClick={ () => window.open(repo, '_blank')}>
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