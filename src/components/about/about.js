import React, { Component } from 'react'
import '../about/about.css'
import Area_img from '../../images_sections/area_img.png'
import Education_img from '../../images_sections/education_img.png'
import Internship_img from '../../images_sections/internship_img.png'
import Project_img from '../../images_sections/project_icon-PhotoRoom.png-PhotoRoom.png'
import Awards_img from '../../images_sections/awards_img.png'
import Skills_img from '../../images_sections/skills_img.png'
import Pors_img from '../../images_sections/pors_img.png'
import References_img from '../../images_sections/reference_img.png'
import {Link} from 'react-scroll'
export class about extends Component {
  render() {
    return (
      <div id='about_me'>
         <div id='intro'>
         <Link  activeClass = 'active' to='awards' spy = {true} smooth = {true} offset = {-100} duration={500} className='menuitem'>
            <h2 id='intro_heading'>About Me</h2>
         </Link>
            <p id='intro_para'>I'm Malipatel Rohini. I am currently in my 4<sup>th</sup> year pursuing a degree in Civil Engineering at Indian Institute Of Technology, Roorkee. I have good coding skills. I have knowledge on HTML5, CSS, JavaScript, CPP, ReactJs. I had start competetive programming in interviewbit and then i Continued in Leetcode.
              and other platforms and also I have good communication skills and leardership qualities.
            </p>
         </div>
         <div id='sections_about'>
          <div id='sections-part-1'>
          <div id='section-1' className='section_about'>
             <img id='section-1_img' className='section_img_about' src={Area_img} alt='area_pic'/>
             <div id='section-1_content'>
              <Link activeClass = 'active' to='area' spy = {true} smooth = {true} offset = {-100} duration={500} className='menuitem' id= 'area_link' >Area Of Interest</Link>
             </div>
          </div>
          <div id='section-2' className='section_about'>
             <img id='section-2_img' className='section_img_about' src={Education_img} alt='education_pic'/>
             <div id='section-2_content'>
             <Link activeClass = 'active' to='education' spy = {true} smooth = {true} offset = {-100} duration={500} className='menuitem' id= 'education_link' >Education</Link>

             </div>
          </div>
          <div id='section-3' className='section_about'>
             <img id='section-3_img' className='section_img_about' src={Internship_img} alt='internship_pic'/>
             <div id='section-3_content'>
             <Link activeClass = 'active' to='internship' spy = {true} smooth = {true} offset = {-100} duration={500} className='menuitem' id= 'internship_link' >Internship</Link>
              
             </div>
          </div>
          <div id='section-4' className='section_about'>
             <img id='section-4_img' className='section_img_about' src={Project_img} alt='project_img'/>
             <div id='section-4_content'>
             <Link activeClass = 'active' to='project' spy = {true} smooth = {true} offset = {-100} duration={500} className='menuitem' id= 'project_link' >Projects</Link>
             </div>
          </div>
          </div>
          <div id='sections-part-2'>
          <div id='section-5' className='section_about'>
             <img id='section-5_img' className='section_img_about' src={Awards_img} alt='Awards_img'/>
             <div id='section-5_content'>
             <Link activeClass = 'active' to='awards/scholarships' spy = {true} smooth = {true} offset = {-100} duration={500} className='menuitem' id= 'awards/scholarships_link' >Awards and Scholarships</Link>
             </div>
          </div>
          <div id='section-6' className='section_about'>
             <img id='section-6_img'className='section_img_about' src = {Skills_img} alt='skills_img'/>
             <div id='section-6_content'>
             <Link activeClass = 'active' to='skills' spy = {true} smooth = {true} offset = {-100} duration={500} className='menuitem' id= 'skills_link' >Skills</Link>
             </div>
          </div>
          <div id='section-7' className='section_about'>
             <img id='section-7_img' className='section_img_about' src = {Pors_img} alt='pors_img'/>
             <div id='section-7_content'>
             <Link activeClass = 'active' to='pors' spy = {true} smooth = {true} offset = {-100} duration={500} className='menuitem' id= 'pors_link' >POR's</Link>
             </div>
          </div>
          <div id='section-8' className='section_about'>
             <img id='section-8_img' className='section_img_about' src = {References_img} alt='references_img'/>
             <div id='section-8_content'>
             <Link activeClass = 'active' to='referencs' spy = {true} smooth = {true} offset = {-100} duration={500} className='menuitem' id= 'references_link' >References</Link>
             </div>
          </div>
          </div>
         </div>
         <div id='down_content_about'>
          <div id='back_about'>
            <Link activeClass = 'active' to='home' spy = {true} smooth = {true} offset = {-1000} duration={500} className='link_about_back'>
              <h2 id ="back_link_about">Back</h2>
            </Link>
          </div>
          <div id='next_about'>
          <Link activeClass = 'active' to='area' spy = {true} smooth = {true} offset = {-100} duration={500} className='link_about_next'>
              <h2 id ="next_link_about">Next</h2>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default about