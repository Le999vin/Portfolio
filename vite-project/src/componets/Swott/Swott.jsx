// Swott.jsx
import React from 'react';
import styles from './Swott.module.css';


export const Swott = () => {
  const strengths = ["Creativity", "Teamwork skills", "Social"];
  const weaknesses = ["Impatience", "Forgetful", "Directness"];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Strength and Weaknesses</h1>
      <div className={styles.lists}>
        <div className={styles.list}>
          <h2 className={styles.listTitle}>Strength</h2>
          <ul>
            {strengths.map((strength, index) => (
              <li key={index} className={styles.item}>{strength}</li>
            ))}
          </ul>
        </div>
        <div className={styles.list}>
          <h2 className={styles.listTitle}>Weaknesses</h2>
          <ul>
            {weaknesses.map((weakness, index) => (
              <li key={index} className={styles.item}>{weakness}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Swott;
