import React from "react";

function About() {
  return (
    <>
      <div className="main">
        <div className="about-content">
          <h1>About</h1>
          <p>
            This recipe search app is built with React.js for CPIT-405 Lab 9.
            It demonstrates state management with <strong>useState</strong>,
            component lifecycle with <strong>useEffect</strong>, client-side
            routing with <strong>React Router</strong>, and async data fetching
            from the Spoonacular API.
          </p>
        </div>
      </div>
      <footer>CPIT-405 | React Examples</footer>
    </>
  );
}

export default About;
