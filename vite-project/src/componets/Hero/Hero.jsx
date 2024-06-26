/*
author: Levin Pamay
Version: 1
Description: This code defines a React functional component named "Hero" that represents a hero section typically found at the top of a webpage. It includes a title "Hi Im Levin", a description "I am Application Developer", and a "Contact Me" button that opens the default email client when clicked. The hero section also features an image sourced from a utility function `getImageUrl` for the hero image, ensuring responsive design and aesthetics with blurred overlays using CSS classes from "./Hero.module.css".
*/ 
import React from 'react'

import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi Im Levin</h1>
                <p className={styles.description}>I am Application Developer</p>
                <a href="mailto:levin.pamay@icloud.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.jpg")} alt="Hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section >
    );
};
