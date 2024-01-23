import React from 'react'
import { ProjectCard } from './ProjectCard'
import ReactThumbnail from "../assets/reactthumnail.jpg"
import RodentThumbnail from "../assets/brainrodent.jpg"
import RobotMusicThumbnail from "../assets/robotmusic.jpg"

const projectData =[
  {
    id: 1,
    title: "React Website",
    description: "This website was built in React",
    image: ReactThumbnail,
    tag: ["All", "Web"],
    link: "https://github.com/charlie-nickerson/react-website-v2",
  },
  {
    id:2,
    title: "Rodent Alcoholism Classifier",
    description: "Developed a LASSO machine learning model that classifies alcoholism in rodents",
    image: RodentThumbnail,
    tag: ["All", "Python"],
    link: "https://github.com/WSUCptSCapstone-Fall2022Spring2023/psychology-matlabml",
  },
  {
    id:3,
    title: "Music Genre Classifier",
    description: "Made a music genre classifier in python using the pytorch library",
    image: RobotMusicThumbnail,
    tag: ["All", "Python"],
    link: "https://github.com/charlie-nickerson/Music-Genre-Classifiers",
  }
]


export const Projects = () => {
  return (
    <section className="projects" id="work">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8 pl-96 pr-96 md:gap-12">{projectData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} link={project.link}/>)}</div>
    </section>
  )
}
