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
