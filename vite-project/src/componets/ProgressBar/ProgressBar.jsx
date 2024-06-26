import React from 'react';
import { render } from 'react-dom';
import { ProgressBar } from 'react-spinners';

const App = () => (
  <div>
    {/* Hier könnten andere Inhalte deiner Webseite stehen */}
    <ProgressBar
      visible={true}
      height={80}
      width={80}
      color="#4fa94d"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}  // Hier könntest du Styles für das Wrapper-Div übergeben
      wrapperClass=""    // Hier könntest du eine CSS-Klasse für das Wrapper-Div übergeben
    />
  </div>
);

render(<App />, document.getElementById('root'));
