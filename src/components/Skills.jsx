import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";

import github from "../assets/github.png";

import node from "../assets/node.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import redis from "../assets/redis.png";

import ts from "../assets/ts1.png";
// import mongoose from "../assets/mongoose.png";
//import chakra from "../assets/chakra.png"

import aws from "../assets/aws.png";
import mysql from "../assets/mysql.png";
import PromptEngineering from "../assets/promptengineering.jpg";
import Angular from "../assets/angular.png";
import sequelize from "../assets/sequelize.png";

import { Fade } from "react-reveal";

const Skills = () => {
  const techs = [
    {
      id: 11,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 5,
      src: node,
      title: "NodeJs",
      style: "shadow-green-400",
    },

    {
      id: 10,
      src: express,
      title: "Express",
      style: "shadow-white",
    },

    {
      id: 12,
      src: redis,
      title: "Redis",
      style: "shadow-purple-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },

    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 14,
      src: ts,
      title: "Typescript",
      style: "shadow-blue-500",
    },
    {
      id: 15,
      src: mysql,
      title: "MySQL",
      style: "shadow-orange-500",
    },
    {
      id: 16,
      src: aws,
      title: "AWS",
      style: "shadow-purple-500",
    },
    {
      id: 17,
      src: sequelize,
      title: "Sequelize",
      style: "shadow-green-400",
    },
    {
      id: 18,
      src: PromptEngineering,
      title: "Prompt Engineering",
      style: "shadow-orange-500",
    },
    {
      id: 19,
      src: Angular,
      title: "Angular",
      style: "shadow-green-400",
    },
  ];

  return (
    <div
      id="skills"
      name="tech stack"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen  skills xl:pt-52  experience1"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Tech Stack
          </p>
          <p className="py-6">
            These are the technologies I've worked with and used them in my
            projects.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style} skills-card`}
            >
              <Fade top duration={1000} distance="40px">
                {" "}
                <img
                  src={src}
                  alt=""
                  className="w-20 mx-auto skills-card-img"
                />
                <p className="mt-4 skills-card-name">{title}</p>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
