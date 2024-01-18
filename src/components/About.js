import Image from "../assets/headshot__square.jpg"
import React, { useState, useTransition } from 'react';
import TabButton from "./TabButton";



const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Python</li>
                <li>C/C++</li>
                <li>Javascript</li>
                <li>CSS</li>
                <li>React</li>
                <li>Haskell</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Washington State University</li>
                <li>Bachelor of Science in Computer Science</li>
                <li>Minor in Mathematics</li>
                <li>Graduated May 2023</li>
            </ul>
        ),
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Machine Learning Developer at the WSU Department of Neuropsychology</li>
                <li>4 Years Experience in Python</li>
                <li>3 years expereince in C/C++</li>
                <li>Coded this website in React</li>
            </ul>
        ),
    },
]
export const About = () => {

    const [tab, setTab] = useState('skills')
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return(
        <section className="about" id="about">
            <div className="container">
                        <img className="head-shot" src={Image} alt="" />
                        <div>
                            <h2>About Me</h2>
                            <p>
                                I'm Charlie Nickerson, a Seattle-based computer scientist with a passion for helping others.
                                My expertise spans data science, machine learning, and web design. I thrive on collaborating with others and am driven by the opportunity to positively impact people's lives,
                                whether through improving user experiences or tackling complex challenges with data. Beyond my tech endeavors,
                                I find balance in boxing, running, and cherishing moments with loved ones. My long-term goal is to excel in my field and assume a leadership role and one day I hope to start my own company.
                                Let's connect and explore how we can drive positive change together
                            </p>
                            <div className="tab-bar">
                                <TabButton selectTab={() => handleTabChange("skills")} active ={tab==="skills"}>{" "}Skills{" "}</TabButton>
                                <TabButton selectTab={() => handleTabChange("education")} active ={tab==="education"}>{" "}Education{" "}</TabButton>
                                <TabButton selectTab={() => handleTabChange("experience")} active ={tab==="experience"}>{" "}Experience{" "}</TabButton>
                            </div>
                            <div className="text-left">{TAB_DATA.find((t) => t.id === tab).content}</div>
                        </div>
            </div>
        </section>
    )
};
