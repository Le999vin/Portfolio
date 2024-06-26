// src/components/Portfolio.js
/*
author: Levin Pamay
Version: 1.
The `Portfolio` component in React fetches portfolio data from an API endpoint using Axios upon component mounting, displaying each project's title, description, and optional image within styled elements.
*/ 
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Portfolio.css'; // CSS-Datei importieren

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // API-Aufruf zum Laden der Portfolio-Daten
    axios.get('/api/portfolio')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Es gab einen Fehler beim Laden der Portfolio-Daten:', error);
      });
  }, []);

  return (
    <div>
      <h2>Mein Portfolio</h2>
      <div className="portfolio">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.image && <img src={project.image} alt={project.title} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
