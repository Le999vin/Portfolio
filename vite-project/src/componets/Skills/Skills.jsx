/*
author: Levin Pamay
Version: 1
Description: This code defines a React functional component named "Skills" that renders a section displaying a list of skills. Each skill is represented by a name and a proficiency level (e.g., "JavaScript - Intermediate"). The component utilizes CSS modules imported from './Skills.module.css' for styling, ensuring each skill item is presented within a structured section with appropriate headings and content.
*/ 
import React from 'react';
import styles from './Skills.module.css';

export const Skills = () => {
    const skills = [
        { name: "JavaScript", level: "Intermediate" },
        { name: "React", level: "Intermediate" },
        { name: "HTML & CSS", level: "Intermediate" },
        { name: "Git", level: "Intermediate" },
    ];

    return (
        <section className={styles.skillsSection} id="skills">
            <h2 className={styles.heading}>Skills</h2>
            <div className={styles.skillsList}>
                {skills.map((skill, index) => (
                    <div key={index} className={styles.skillItem}>
                        <h3>{skill.name}</h3>
                        <p>{skill.level}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
