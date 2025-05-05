import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard';
import { projectsData } from '../../data/data';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      {projectsData.map((item) => (
          <ProjectsCard
            key={item.id}
            title={item.title}
            des={item.des}
            src={item.image}
            lnk={item.link}
            webLink={item.webLink} 
          />
        ))}
        
        {/* Show dummy div if projectsData length exceeds 5 */}
        {/* {projectsData.length > 5 && (
          <div className="w-full justify-center cursor-pointer p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
            <div className='w-full h-auto items-center flex flex-col justify-center p-4 group-hover:scale-110 duration-300'>
            <span className="text-5xl text-designColor">
            <GrProjects />
            </span>
            <div className="w-full items-center mt-5 flex flex-col gap-6">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-base uppercase text-designColor font-normal">
                    More Projects
                  </h3>
                  <span className="text-2xl ml-2 text-designColor">
            <HiArrowRight />
            </span>
                </div>
              </div>
            </div>
            </div>
          </div>
        )} */}
      </div>
    </section>
  );
}

export default Projects