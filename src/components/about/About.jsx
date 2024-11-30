import React from 'react';
import "./about.css";
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <div className="about__container container">
          <div className="about__data">
          <p className="about__description">
          Hi, I’m Saad Khan, a Senior Mobile App Developer with a passion for creating high-quality mobile applications for Flutter, Android, and iOS platforms. I specialize in building high-performance apps that are tailored to meet client needs, ensuring they are not only functional but also intuitive and user-friendly. I’m committed to turning ideas into reality, ensuring each project is built with precision and a focus on user experience.
            </p>
            <Info />

            
          </div>
        </div>
    </section>
  )
}

export default About;
