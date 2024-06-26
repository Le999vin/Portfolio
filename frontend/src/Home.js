import React from 'react';
import Portfolio from './Portfolio'; // Korrekt, da sich beide Dateien im selben Verzeichnis befinden

const Home = () => {
  return (
    <div>
      <h2>Willkommen zu meinem Projekt</h2>
      <div>
        <h3>Projekt 1</h3>
        <p><a href="http://localhost:5173">Portfolio Seite</a>
</p>
      </div>
      {/* Weitere Projekte hinzufügen */}
    </div>
  );
};

export default Home;
