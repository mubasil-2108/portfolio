import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiFlask, SiFigma, SiFirebase, SiMongodb, } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href='https://www.facebook.com/mubasil.behzad.1?mibextid=ZbWKwL'>
              <FaFacebookF />
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
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiFirebase />
          </span>
          <span className="bannerIcon">
            <SiFlask />
          </span>
          <span className="bannerIcon">
            <SiFigma />
          </span>
          <span className="bannerIcon">
            <SiMongodb />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Media