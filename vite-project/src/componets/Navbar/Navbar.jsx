/*
author: Levin Pamay
Version: 1
Description: This code defines a React functional component called "Navbar" that renders a navigation bar for a portfolio website. It includes a title "Portfolio", a menu button that toggles the visibility of navigation links for "About", "Skills", "SWOTT", and "Contact". The navigation links use React Scroll to smoothly scroll to corresponding sections on the page when clicked, and the menu collapses when a link is selected or the menu button is clicked again. Styling is managed through CSS modules imported from "./Navbar.module.css", ensuring the layout and appearance of the navbar components are consistent and responsive.
*/ 
import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
                Portfolio
            </a>
            <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
                <img
                    className={styles.menuBtn}
                    src={getImageUrl("nav/menuIcon.png")}
                    alt="menu-button"
                    onClick={toggleMenu}
                />
                <ul className={styles.menuItems}>
                    <li>
                        <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="swott" smooth={true} duration={500} onClick={toggleMenu}>
                            SWOTT
                        </Link>
                    </li>
                    <li>
                        <Link to="socialLinks" smooth={true} duration={500} onClick={toggleMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
