import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import { BsFillPersonLinesFill, BsTelephoneOutbound } from "react-icons/bs";
import resume from "../assets/Rahul-Chaudhari-Resume.pdf";
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/rahul-chaudhari-52718a273/",
      style: "rounded-tr-md",
      nameId: "contact-linkedin",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/chaudhari014",
      nameId: "contact-github",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "rahulchaudhari7856@gmail.com",
      nameId: "contact-email",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: resume,
      download: true,
      nameId: "resume-link-2",
    },
    {
      id: 5,
      child: (
        <>
          {" "}
          +91 83202 64138
          <BsTelephoneOutbound size={28} />
        </>
      ),
      href: "tel:8320264138",
      nameId: "contact-phone",
    },
  ];
  function downloadAndOpenResume(event) {
    event.preventDefault();
    const resumeURL = event.target.href;
    const a = document.createElement("a");
    a.href = resumeURL;
    a.download = "Rahul-Chaudhari-Resume";
    a.click();
    window.open(resumeURL, "_blank");
  }
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download, nameId }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              onClick={download ? (e) => downloadAndOpenResume(e) : () => {}}
              rel="noreferrer"
              id={nameId}
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
