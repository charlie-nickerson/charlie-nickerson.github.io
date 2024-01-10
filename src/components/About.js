import { useState, useEffect } from "react"
import { Container, Row, Col} from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import bannerImg from "../assets/circle_1.png"

export const About = () => {
    return(
        <section className="about" id="about">
            <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="about-bx">
                                    <h1>About Me</h1>
                                    <p>
                                    I'm Charlie Nickerson, a Seattle-based computer scientist with a passion for helping others.
                                    My expertise spans data science, machine learning, and web design. I thrive on blending logic and creativity in my work, collaborating with others to achieve common goals.
                                    I'm driven by the opportunity to positively impact people's lives, whether through improving user experiences or tackling complex challenges with data. Beyond my tech endeavors,
                                    I find balance in boxing, running, and cherishing moments with loved ones. My long-term goal is to excel in my field and assume a leadership role, guiding others on their growth journeys.
                                    Let's connect and explore how we can drive positive change together
                                </p>
                                </div>
                            </div>
                        </div>
            </div>
        </section>
    )
};
