import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box ">
            {/* <i className="bx bx-award about__icon"></i> */}
            <h3 className="about__title">5+ </h3>
            <span className="about__subtitle">Years Experience</span>
        </div>

        <div className="about__box">
            {/* <i className="bx bx-briefcase-alt about__icon"></i> */}
            <h3 className="about__title">50+</h3>
            <span className="about__subtitle">  Projects Completed </span>
        </div>

        <div className="about__box">
            {/* <i className="bx bx-support about__icon"></i> */}
            <h3 className="about__title">20+</h3>
            <span className="about__subtitle"> Happy Customers</span>
        </div>

        <div className="about__box">
            {/* <i className="bx bx-support about__icon"></i> */}
            <h3 className="about__title">24/7 </h3>
            <span className="about__subtitle"> Online Support</span>
        </div>
    </div>
  )
}

export default Info
