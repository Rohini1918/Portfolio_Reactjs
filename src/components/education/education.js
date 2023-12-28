import React, { Component } from 'react'
import { Link } from 'react-scroll'
import Tenth_img from '../../images_sections/tenth_img.jpg'
import Twelth_img from '../../images_sections/twelth_img.webp'
import BTech_img from '../../images_sections/BTech_girl_img.jpg'
import '../education/education.css'
export class id  extends Component {
  render() {
    return (
      <section id='education'>
        <Link><h1 id = 'education_heading'>Education</h1></Link>
        <div id='boxes'>
            <div id='box'>
                <button id='img_btn'><img id='box_img' src = {Tenth_img}></img>
                <div id='education_info'>
                    <h4 id='Degree/exam'></h4>
                    <p>
                       Institute : 
                       <br/>
                       Year :
                       <br/>
                       CGPA/Percentage :
                    </p>
                </div>
                </button>
            </div>
            <div id='box'>
                <button id='img_btn'><img id='box_img' src={Twelth_img}></img>
                <div id='education_info'>
                    <h4 id='Degree/exam'></h4>
                    <p>
                       Institute : 
                       <br/>
                       Year :
                       <br/>
                       CGPA/Percentage :
                    </p>
                </div>
                </button>
            </div>
            <div id='box'>
                <button><img id='box_img' src = {BTech_img}></img>
                <div id='education_info'>
                    <h4 id='Degree/exam'></h4>
                    <p>
                       Institute : 
                       <br/>
                       Year :
                       <br/>
                       CGPA/Percentage :
                    </p>
                </div>
                </button>
            </div>
        </div>
      </section>
    )
  }
}

export default id 