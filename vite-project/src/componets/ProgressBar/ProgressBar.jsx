/*
author: Levin Pamay
Version: 1
Description: This code defines a React component named "App" that renders a webpage with a progress bar from the 'react-spinners' library, configured with specific visual properties such as height, width, color, and accessibility attributes. The progress bar is embedded within a wrapper div that can optionally receive additional inline styles and CSS classes. Finally, the component is rendered into the HTML element with the ID 'root' using ReactDOM's render method.
*/ 
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
