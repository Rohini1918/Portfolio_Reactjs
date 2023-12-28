import React, { Component } from 'react'
import '../content/content.css'
import {Link} from 'react-scroll'
export class content extends Component {
  render() {
    return (
      <section id='main'>
        <div className='main-content'>
          <span className='hello'>Hello,</span>
          <span className='IntroText'>I'm <span className='introName'> Rohini</span><br/>Frontend Developer</span>
          <p className='introPara'>I am a Frontend Developr with experience
          developing 
          <br/>websites using Reactjs</p>
          <Link><button className='btn'><img className='hire_me_logo' src = 'hire_me_logo.jpeg' alt='hire_me_logo'/>Hire Me</button></Link>
        </div>
        <img className='bg_pic'src='intro_pic.png' alt='rohini_image'></img>
      </section>
    )
  }
}

export default content