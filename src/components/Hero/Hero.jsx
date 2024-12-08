import React from 'react'
import TechImg from '../../assets/img1.jpg'
import Atom from '../../assets/atom.png'
import Html from '../../assets/html-5.png'
import Css from '../../assets/css-3.png'
import Javascript from '../../assets/js.png'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-container'>
      <div className='hero-content'>
        <h2>Passionate Web Developer</h2>
        <p>
          Passionate Frontend Developer and Backend Developer | Creating a full 
          responsive Website 
        </p>
      </div>

      <div className='hero-img'>
        <div>
          <div className='tech-icon'>
            <img src={TechImg} width="100%"/>
          </div>
        </div>

        <div>
          <div className='tech-icon'>
            <img src={Html} width="50%"/>
          </div>
          <div className='tech-icon'>
            <img src={Css} width="50%"/>
          </div>
          <div className='tech-icon'>
            <img src={Javascript} width="50%"/>
          </div>
          <div className='tech-icon'>
            <img src={Atom} width="50%"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
