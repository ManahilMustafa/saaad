import React, { useEffect } from 'react';
import './scroll.css';

const Scroll = () => {
  useEffect(() => {
    const scrollElement = document.querySelector('.scrollup');

    const handleScroll = () => {
      if (window.scrollY > 200) {
        scrollElement.classList.add('show-scroll'); // Show the scroll-up button
      } else {
        scrollElement.classList.remove('show-scroll'); // Hide the button
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling effect
    });
  };

  return (
    <button onClick={scrollToTop} className="scrollup" aria-label="Scroll to top">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </button>
  );
};

export default Scroll;
