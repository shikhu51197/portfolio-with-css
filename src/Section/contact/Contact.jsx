import React from 'react'
import './Contact.css'
import {CgMail} from 'react-icons/cg'
import{BsLinkedin} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import {useRef} from "react";
import emailjs from "emailjs-com"
const Contacts = () => {
  
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_gntwx5i', 'template_bbfptxn', form.current, '3EPk1TMU9WKBpn1zM')
        .then((result) => {
            console.log(result.text);
            alert("Message sent Successfully")
            window.location.reload()
        }, (error) => {
            console.log(error.text);
        });
      }
    
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>


<div className='container contact_container'>
   <div className='contact_options'>
 
     <article className="con_img">
<a
  href="https://www.linkedin.com/in/shikha-gupta-12a2b5199/"
  target="_blank"
  rel="noopener noreferrer"
  className="linkdin" data-aos="slide-right">
  <BsLinkedin />
 <p>LinkedIn</p> 
</a>
</article>

<article className="con_img">
<a
  href="https://github.com/shikhu51197"
  target="_blank"
  rel="noopener noreferrer"
  className="git_con" data-aos="slide-right">
  <BsGithub />
 <p>GitHub</p> 
</a> 
</article>

<article className="con_img">
<a
  href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKHRLhvzxXGTlCQDGMKDpkXhmXqKjPpcxrkchgfdQPNDsTVJtRJjBhcXsPfmJXsXRFgxzdV"
  target="_blank"
  rel="noopener noreferrer"
  className="git_con gmail" data-aos="slide-right">
  <CgMail />
 <p>Gmail</p> 
</a>
</article>

<article className="con_img">
<a
  href="https://twitter.com/ShikhaG61708689"
  target="_blank"
  rel="noopener noreferrer"
  className="Twitter" data-aos="slide-right" >
<AiOutlineTwitter/>
 <p>Twitter</p> 
</a>
</article>

  </div>
  <form ref={form} onSubmit={sendEmail}>
    <input type='text' name='name'  placeholder='Enter Full Name Here'required/>
    <input type='email' name='email'  placeholder='Enter Email Here'required/>
    <textarea  name='message' rows="7" placeholder='Enter Message Here'required/>
<button type='submit' className='btn primary'>Send Message</button>
  </form>
</div>
    </section>
  )
}

export default Contacts


