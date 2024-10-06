import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

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
        <ProjectsCard
          title="Quran AI"
          des="Quran AI is an app of giving accurate knowledge to the Muslim as well as non-Muslims. 
                After searching a query it extract the relevent data from database/.json file."
          src={projectOne}
          lnk={'https://github.com/mubasil-2108/QuranAI'}
        />
        <ProjectsCard
          title="E-commerce Website"
          des="It is one of my semester project. A general store where can buy product. It also has admin side where admin can update theeir products. This project is made in C#."
          src={projectTwo}
          lnk={'https://github.com/mubasil-2108/Website'}
        />
        <ProjectsCard
          title="OYL-Client"
          des=" It is basically Garage application, where we decides and lock our
                appointment with our dealer. It has real time calendar, multiple payment methods and much
                more..!"
          src={projectThree}
          lnk={'https://github.com/mubasil-2108/OylClient'}
        />
        <ProjectsCard
          title="Life Diary"
          des=" Memories are most precious thing that every people try remember them. So, here is an app that save your memories by writing them as journal."
          src={projectFour}
          lnk={'https://github.com/mubasil-2108/LifeDiary'}
        />
        <ProjectsCard
          title="Health Care"
          des=" Standing in a queue and for doctor appointment leads to waste of time of patients. So, here is an app that show the available doctors of specfic city."
          src={projectFive}
          lnk={'https://github.com/mubasil-2108/HealthCare'}
        />
        <ProjectsCard
          title="Local Eyes"
          des=" A multi-vendor tour guide app where tourists can hire local guides in specific cities for personalized tours. Locals can create profiles to offer their services, connecting directly with travelers seeking authentic, guided experiences."
          src={projectSix}
          lnk={'https://github.com/mubasil-2108/Local_Eyes'}
        />
        
      </div>
    </section>
  );
}

export default Projects