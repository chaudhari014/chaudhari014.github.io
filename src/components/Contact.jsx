import React from "react";
import { Fade } from "react-reveal";
import { FaEnvelope, FaPhone } from "react-icons/fa";

//function for form reset
function handleSubmit(e) {
  setTimeout(() => {
    e.target.reset();
  }, 3000);
}

const Contact = () => {
  return (
    <div
      id="contact"
      name="contact"
      className="contact w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white contact1"
    >
      <Fade top duration={1000} distance="40px">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Contact
            </p>
            <p className="py-6">Take A Cofee And Chat With Me</p>
          </div>

          {/* Contact Information Section */}
          <div className="mb-8">
            <p className="text-lg font-bold mb-2">Contact Information:</p>
            <p>
              <FaEnvelope className="inline-block mr-2" />
              <a href="mailto:rahulchaudhari7856@gmail.com">
                rahulchaudhari7856@gmail.com
              </a>
            </p>
            <p>
              <FaPhone className="inline-block mr-2" />
              +91 8320264138
            </p>
          </div>

          <div className=" flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              action="https://getform.io/f/734cee66-79b6-494f-aae7-625a5d5d8cad"
              className=" flex flex-col w-full md:w-1/2"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                required
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-2 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
