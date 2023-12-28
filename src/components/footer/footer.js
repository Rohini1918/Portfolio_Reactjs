import React, { Component } from 'react'
import { Link } from 'react-scroll'
export class footer extends Component {
  render() {
    return (
      <div>
        <div id='down_content_area'>
          <div id='back_area'>
            <Link activeClass = 'active' to='about_me' spy = {true} smooth = {true} offset = {-50} duration={500} className='link_area_back'>
              <h2 id ="back_link_area">Back</h2>
            </Link>
          </div>
          <div id='next_area'>
          <Link activeClass = 'active' to='about_me' spy = {true} smooth = {true} offset = {-50} duration={500} className='link_area_next'>
              <h2 id ="next_link_area">Next</h2>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default footer