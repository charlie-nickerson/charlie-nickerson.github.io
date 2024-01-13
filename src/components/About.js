import Image from "../assets/headshot__square.jpg"
import React, { useState, useTransition } from 'react';
import TabButton from "./TabButton";
import { Tab } from "react-bootstrap";




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
                                My expertise spans data science, machine learning, and web design. I thrive on blending logic and creativity in my work, collaborating with others to achieve common goals.
                                I'm driven by the opportunity to positively impact people's lives, whether through improving user experiences or tackling complex challenges with data. Beyond my tech endeavors,
                                I find balance in boxing, running, and cherishing moments with loved ones. My long-term goal is to excel in my field and assume a leadership role, guiding others on their growth journeys.
                                Let's connect and explore how we can drive positive change together
                            </p>
                            <div className="tab-bar">
                                <TabButton selectTab={() => handleTabChange("skills")} active ={tab==="skills"}>{" "}Skills{" "}</TabButton>
                                <TabButton selectTab={() => handleTabChange("education")} active ={tab==="education"}>{" "}Education{" "}</TabButton>
                                <TabButton selectTab={() => handleTabChange("experience")} active ={tab==="experience"}>{" "}Experience{" "}</TabButton>
                            </div>
                        </div>
            </div>
        </section>
    )
};
