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
          Hi, I’m Saad Khan, a Senior Mobile App Developer specializing in Mobile App development for Android and iOS platforms using Kotlin, Java, and Flutter. With a strong focus on creating high-performance mobile applications, I am dedicated to delivering solutions that are not only functional but also intuitive and user-friendly. My expertise lies in building customized apps that are tailored to meet the specific needs of each client, ensuring precision and an exceptional 
user experience at every stage of the development process. I am committed to transforming innovative ideas into reality with a keen attention to detail and a passion for quality.
 </p>
            <Info />

            
          </div>
        </div>
    </section>
  )
}

export default About;
