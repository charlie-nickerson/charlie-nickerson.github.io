import React from 'react'
import { ProjectCard } from './ProjectCard'
import ReactThumbnail from "../assets/ReactThumbnail.png"

const projectData =[
  {
    id: 1,
    title: "React Website",
    description: "This website was built in React",
    image: ReactThumbnail,
    tag: ["All", "Web"],
  },
  {
    id:2,
    title: "PostScript Interpreter",
    description: "Made a postscript interpreter in python",
    image: ReactThumbnail,
    tag: ["All", "Python"],
  },
  {
    id:3,
    title: "Music Genre Classifier",
    description: "Made a music genre classifier in python using the pytorch library",
    image: ReactThumbnail,
    tag: ["All", "Python"],
  }
]


export const Projects = () => {
  return (
    <section className="projects" id="work">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 px-7">{projectData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} tags={project.tag} />)}</div>
    </section>
  )
}
