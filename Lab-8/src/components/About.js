import React from "react";

function About() {
  return (
    <div className="card">
      <h1>About Us</h1>
      <p className="about-text">
        Link Shrinker is a simple URL shortening service built with React.js
        for CPIT-405 Lab 8.
      </p>
      <p className="about-text">
        It demonstrates React fundamentals: state management with{" "}
        <strong>useState</strong>, event handling, and client-side routing with{" "}
        <strong>React Router</strong>.
      </p>
    </div>
  );
}

export default About;
