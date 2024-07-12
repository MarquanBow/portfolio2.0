import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div className="about">
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced front end developer</p>
                    <p>My passion for developing is contagious</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>REACT</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>TypeScript</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Java</p><hr style={{width:"50%"}}/></div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About