import React, { useState } from "react";
import { FaBars, FaTimes, FaEye, FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import resume from "../assets/Rahul-Chaudhari-Resume.pdf";
const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      name: "nav-link home",
    },
    {
      id: 2,
      link: "about",
      name: "nav-link about",
    },
    {
      id: 3,
      link: "projects",
      name: "nav-link projects",
    },
    {
      id: 4,
      link: "skills",
      name: "nav-link skills",
    },
    {
      id: 6,
      link: "Resume",
      name: "nav-link resume",
      download: true,
    },
    {
      id: 5,
      link: "contact",
      name: "nav-link contact",
    },
  ];
  function downloadAndOpenResume(event) {
    const a = document.createElement("a");
    a.href = resume; // Using the resume file imported from assets
    a.download = "Rahul-Chaudhari-Resume.pdf"; // Setting the download file name
    a.click();
  }

  return (
    <div
      className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav"
      id="nav-menu"
    >
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="https://rahulkarda.netlify.app">Rahul</a></h1> */}
        <h1 className="text-5xl font-signature ml-2">
          <Link
            className="link-underline link-underline-black cursor-pointer"
            to={"home"}
            target="_blank"
            rel="noreferrer"
          >
            Rahul
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, name, download }) => (
          <li
            key={id}
            className={`nav-links px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-white duration-200 link-underline `}
          >
            {!download ? (
              <Link to={link} smooth duration={500} className={`${name}`}>
                {link}
              </Link>
            ) : (
              <a
                href={resume}
                className={`flex justify-between items-center w-full text-white ${name}`}
                target="_blank"
                rel="noreferrer"
                id="resume-link-1"
              >
                <button
                  onClick={(e) => downloadAndOpenResume(e)}
                  id="resume-button-1"
                >
                  {link}
                </button>
                <FaDownload className="ml-2" />
              </a>
            )}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
