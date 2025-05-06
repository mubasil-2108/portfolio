import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard';
import { projectsData } from '../../data/data';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 "
      >
      {projectsData.slice(0, 6).map((item) => (
          <ProjectsCard
            key={item.id}
            title={item.title}
            des={item.des}
            src={item.image}
            lnk={item.link}
            webLink={item.webLink} 
          />
        ))}
      </div>
    </section>
  );
}

export default Projects