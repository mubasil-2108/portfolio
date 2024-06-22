import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Mubasil Behzad</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Experienced developer skilled in creating innovative software solutions, proficient in multiple programming languages, and dedicated to delivering high-quality, efficient code. Strong problem-solver with a passion for continuous learning and improvement.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText"><a className='text-gray-400' href='tel:+923239165382' style={{ textDecoration: 'none' }}>+92 3239165382</a></span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText"><a className='text-gray-400' href='mailto:mubasilbehzad012@gmail.com' style={{ textDecoration: 'none' }}>mubasilbehzad012@gmail.com</a></span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href='https://www.facebook.com/mubasil.behzad.1?mibextid=ZbWKwL'>
              <FaFacebookF href='' />
            </a>
          </span>
          <span className="bannerIcon">
            <a href='https://github.com/mubasil-2108'>
              <FaGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a href='https://www.linkedin.com/in/mubasil-behzad-33b041301'>
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft