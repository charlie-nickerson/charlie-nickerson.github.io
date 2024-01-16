import React from "react";
// import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline"
// import Link from "next/link"


export const ProjectCard = ({imgUrl, title, description, link}) => {
  return (
    <div>
        <div  className="h-52 md:h-72 rounded-t-xl rounded-b-xl relative group" style={{ background: `url(${imgUrl})`, backgroundSize: "cover"}}></div>
        <div  className="overaly absolute top-0 left-0 w-full h-full bg-{#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
        </div>
        <div className="text-white rounded-b-xl bf-[#181818] py-6 px-4">
            <a href={link}><h5 className="text-xl font-semibold mb-2">{title}</h5></a>
            <p className="text-[#ADB7BE]">{description}</p>
        </div>
    </div>
  )
}
