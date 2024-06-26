/* 
Author: levin Pamay
Version: 1.
The code imports CSS styles from a file named "App.module.css" and renders a web page with a Navbar, a Hero section, sections for "About", "Skills", "Swott", and "SocialLinks", each represented by their respective components.
*/
import styles from "./App.module.css";
import { About } from "./componets/About/About";
import { Hero } from "./componets/Hero/Hero";
import { Navbar } from "./componets/Navbar/Navbar";
import { Swott } from "./componets/Swott/Swott";
import { SocialLinks } from "./componets/SocialLinks/SocialLinks";
import { Skills } from "./componets/Skills/Skills";


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="swott">
        <Swott />
      </section>
      <section id="socialLinks">
        <SocialLinks />
      </section>
    </div>
  );
}

export default App;
