import React, { Component } from 'react'
import './App.css'
import Header from './components/header/header'
import Content from './components/content/content'
import Area from './components/area_of_interest/area_of_interest'
import About from './components/about/about'
import Awards from './components/awards/awards'
import Education from './components/education/education'
export class App extends Component {
  render() {
    return (
      <div id ='app'>
         <Header/>
         <Content/>
         <About/>
         <Area/>
         <Awards/>
         <Education/>
      </div>
    )
  }
}

export default App