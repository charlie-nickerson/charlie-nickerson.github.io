import React from 'react'
import GithubIcon from '../assets/github-icon.svg'
import LinkedinIcon from '../assets/linkedin-icon.svg'

export const Contact = () => {
  return (
    <section id="contact" className="pl-96 pr-96 grid md:grid-cols-2 my-12 md:my12 py-24 gap-4">
        <div>
            <h5 className="text-left text-xl font-bold text-white my-2">Lets Connect</h5>
            <p className="text-left">I'm currently looking for a job as a software developer. If you want to contact me 
                feel free to write me an email me and I will get back to you as soon as I can
            </p>
            <div className="socials flex flex-row gap-2">
                <a href="https://www.linkedin.com/in/charlie-nickerson-5480321ba/">
                    <img src={LinkedinIcon} alt="Linkedin Icon"/>
                </a>
                <a href="https://github.com/charlie-nickerson">
                    <img src={GithubIcon} alt="Github Icon"/>
                </a>
            </div>
        </div>
        <div>
            <form className='text-left flex flex-col gap-4'>
                <label htmlFor="email" type="email" className="text-white">Your Email</label>
                <input type="email" id="email" className="text-black pl-1" required placehoolder="charliework@gmail.com"></input>
            </form>
        </div>
    </section>
  )
}
