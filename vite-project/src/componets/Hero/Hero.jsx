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
