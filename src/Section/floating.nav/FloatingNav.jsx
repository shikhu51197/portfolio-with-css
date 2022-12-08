import React from 'react'
import './Floating-nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserGraduate} from 'react-icons/fa'
import {GoBookmark} from 'react-icons/go'
import {GoProject} from 'react-icons/go'
import {MdContactMail} from 'react-icons/md'
import {FaLaptopCode} from 'react-icons/fa'

import {useState} from 'react'
const FloatingNav = () => {
const [activeNav , setActiveNav] = useState("#")

  return (
    <div id="floatnav">
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#' ?'active': ''}><AiFillHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ?'active': ''}><FaUserGraduate/></a>
      <a href="#skill" onClick={()=>setActiveNav('#skill')} className={activeNav === '#skill' ?'active': ''}><GoBookmark/></a>
      <a href="#techstack" onClick={()=>setActiveNav('#techstack')} className={activeNav === '#techstack' ?'active': ''}><FaLaptopCode/></a>
      <a href="#Project" onClick={()=>setActiveNav('#Project')} className={activeNav === '#Project' ?'active': ''}><GoProject/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ?'active': ''}><MdContactMail/></a>
   
    </div>
  )
}

export default FloatingNav
