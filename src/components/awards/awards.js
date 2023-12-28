import React, { Component } from 'react'
import '../awards/awards.css'
import Horiba_img from '../../images_sections/horiba_img.png'
import IIT_logo from '../../images_sections/iitr_logo.png'
import FFE_logo from '../../images_sections/ffe_logo.png'
import TS_eamcet_img from '../../images_sections/TS_emacet_img.jpg'
import Jee_mains_img from '../../images_sections/Jee_mains_img.png'
import { Link } from 'react-scroll'
export class awards extends Component {
  render() {
    return (
      <section id='awards'>
        <Link activeClass = 'active' to='awards' spy = {true} smooth = {true} offset = {-100} duration={500} className='menuitem'>
            <h3 id='awards_heading'>Awards and Scholarships</h3>
        </Link>
        <div id='awards_section'>
            <div id='award'>
                <a href='https://www.horiba.com/ind/'>
                    <img id='award_img' src={Horiba_img} alt=''/>
                </a>
                <h5 id='award_content'>HORIBA Talent Hunt Scholarship(Academic Year 2022-2023)instituted by HORIBA India Pvt. Ltd.</h5>
            </div>
            <div id='award'>
                <a href='https://www.iitr.ac.in/'>
                    <img id='award_img' src={IIT_logo} alt=''/>
                </a>
                <h5 id='award_content'>Merit-Cum-Scholarship By IIT Roorkee</h5>
            </div>
            <div id='award'>
                <a href='https://ffe.org'>
                    <img id='award_img' src={FFE_logo} alt=''/>
                </a>
                <h5 id='award_content'>Future For Excellene Scholarship</h5>
            </div>
            <div id='award'>
                <a href='https://eamcet.tsche.ac.in/'>
                    <img id='award_img' src={TS_eamcet_img} alt=''/>
                </a>
                <h5 id='award_content'> Ranked 1257 in State level Entrance test(TS EAMCET)</h5>
            </div>
            <div id='award'>
                <a href='https://jeemain.nta.nic.in/'>
                    <img id='award_img' src={Jee_mains_img} alt=''/>
                </a>
                <h5 id='award_content'>Secured 13384 in JEE-MAIN(2020)</h5>
            </div>
        </div>
      </section>
    )
  }
}

export default awards