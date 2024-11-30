import React from 'react';
import './footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <div className="contact-item">
          <i className="uil uil-phone-alt"></i>
          <span>+92 346 1422013</span>
        </div>
        <div className="contact-item">
          <i className="uil uil-envelope"></i>
          <span>saadkhan.cdz@gmail.com</span>
        </div>
        <div className="contact-item">
          <i className="uil uil-map-marker-alt"></i>
          <span>Islamabad Pakistan</span>
        </div>
      </div>
      <div className="footer-social">
        <a href="https://github.com/SaadKhanJadoon" className="social-icon" target='_blank'><i className="uil uil-github"></i></a>
        <a href="https://www.linkedin.com/in/saadkhan1501/" className="social-icon" target='_blank'><i className="uil uil-linkedin-alt"></i></a>
        <a href="https://join.skype.com/invite/ufaDKedjpuGr" className="social-icon" target='_blank'><i className="uil uil-skype-alt"></i></a>
      </div>
      <div className="footer-bottom">
        <p>© Made with ❤️ by Saad Khan. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
