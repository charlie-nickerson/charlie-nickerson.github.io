import React from 'react'
import GithubIcon from '../assets/github-icon.svg'
import LinkedinIcon from '../assets/linkedin-icon.svg'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_0dor6jx', 'template_4gyx4ys', form.current, 'zMejonUEYV_qxdd7l')
        .then((result) => {
            console.log(result.text);
            console.log("email sent")
        }, (error) => {
            console.log(error.text);
        });
    };

    const ClearFields = () => {

        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
   }

  return (
    <section id="contact" className="pl-96 pr-96 grid md:grid-cols-2 my-12 md:my12 py-24 gap-4">
        <div>
            <h5 className="text-left text-xl font-bold text-white my-2">Lets Connect</h5>
            <p className="text-left">I'm currently looking for a job as a software developer. If you want to contact me 
                feel free to write me an email me and I will get back to you as soon as possible.
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
            <form className='text-left flex flex-col gap-4' ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input id="username" className="text-black pl-1 rounded-lg" type="text" name="user_name" />
                <label>Email</label>
                <input id="email" className="text-black pl-1 rounded-lg" type="email" name="user_email" />
                <label>Message</label>
                <textarea id="message" className="text-black pl-1 rounded-lg" name="message" />
                <button type="button" class="btn btn-primary btn-sm"><input onClick={ClearFields} type="submit" value="Send" /></button>
            </form>
        </div>
    </section>
  )
}
