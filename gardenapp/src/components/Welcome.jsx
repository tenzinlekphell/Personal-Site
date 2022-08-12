import React from 'react';
import '../css/WelcomePage.css';

const Welcome = () => {
  return (
    <div id="welcome-page">
      <p>Welcome to my portfolio! </p>
      <p>
        My name is Tenzin Lekphell and I am software developer specializing in
        Front End Development. I am an economics and finance graduate but made a
        career change into web development. The tech world is vast and there are
        many career paths to choose from so I wanted to choose a path that
        allowed me to express my creativity and scale as the industry scales.
      </p>{' '}
      <div id="about">
        <p>
          Education: B.A, International Economics and Finance (Toronto
          Metropolitan University)
        </p>
        <p>Location: Toronto, Ontario</p>
        <p>Skill Set:</p>
        <p>Front End: React, Typescript, HTML, CSS, Material UI</p>
        <p>Back End: Express, Node JS, Docker, MySQL</p>
        <p>Others: Git, Jest</p>
      </div>
    </div>
  );
};

export default Welcome;
