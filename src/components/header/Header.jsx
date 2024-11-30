import React, { useState } from 'react';
import "./header.css";

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false); // More descriptive variable name

    const toggleMenu = () => setMenuOpen(!isMenuOpen); // Function to toggle the menu

    return (
        <header className='header'>
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Saad Khan</a>

                <div className={isMenuOpen ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i>About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-user nav__icon"></i>Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="uil uil-comment-notes nav__icon"></i>My Services
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i>My Portfolio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#reviews" className="nav__link">
                                <i className="uil uil-message nav__icon"></i>Testimonials
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i>Contact Me
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={toggleMenu}></i>
                </div>

                <div className="nav__toggle" onClick={toggleMenu}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
}

export default Header;
