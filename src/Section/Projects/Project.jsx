import React from 'react'
import './Projects.css'


import img1 from '../../assest/Screenshot (1506).png'
import img2 from '../../assest/Screenshot (1502).png'
import img3 from '../../assest/Screenshot (1503).png'
import img4 from '../../assest/Screenshot (1507).png'
import img5 from '../../assest/Screenshot (1511).png'
import img6 from '../../assest/Screenshot (1510).png'

const data =[

  {
    id:1,
    image:img1,
    title:'Clockify.com',
    github:'https://github.com/AswiniVerma/Movie-Booking-System.git',
   demo:'https://633990fcab76de57326475f2--endearing-snickerdoodle-41dc09.netlify.app/',
  },

    {
    id:2,
    image:img2,
    title:'Fabbag.com',
    github:'https://github.com/jkumari25/glistening-rock-2573',
    demo:'https://lively-hotteok-119124.netlify.app/',
  },
  {
    id:3,
    image:img3,
    title:'Desktime.com',
    github:'https://github.com/shubhamrathore09/dizzy-stitch-9009',
    demo:'https://serene-hummingbird-b4f976.netlify.app/',
  },
  {
    id:4,
    image:img4,
    title:'Tic-Tac-Toe Game',
    github:'https://github.com/shikhu51197/my-work/tree/main/game1',
    demo:'https://endearing-snickerdoodle-41dc09.netlify.app/',
  },
  {
    id:5,
    image:img5,
    title:'Food App',
    github:'https://github.com/jkumari25/glistening-rock-2573',
    demo:'https://lively-hotteok-119124.netlify.app/',
  },
  {
    id:6,
    image:img6,
    title:'Movie Booking',
    github:'https://github.com/AswiniVerma/Movie-Booking-System.git',
   demo:'https://633990fcab76de57326475f2--endearing-snickerdoodle-41dc09.netlify.app/',
  },
]
const Project = () => {
  return (
    <section id='Project'>
     
      <h2 className='main_head'>My Recent Projects</h2>

      <div className='container Project__container'>
        {
          data.map(({id, image, title, github, demo})=>{
            return (
              <article key={id} className="Project__item">
          <div className="Project__item-image">
            <img src={image} alt={title} width="300px" />
            </div>
            <h3>{title}</h3>
            <div className='Project__item-cta'>
              <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
            </article>
            )
              
            
          })
        }
      </div>
    </section>
  )
}

export default Project
