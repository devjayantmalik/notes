import React from "react";

const About = () => {
  return (
    <article className="hero">
      <div className="hero-body">
        <h1 className="title">Developer: Jayant Malik.</h1>
        <p>
          The project is developed to improve my coding skills, the source code
          can be found at github.
        </p>
        <p>
          Okay, Try to reverse engineer the link to the project from the current
          url in the browser.
        </p>
        <p>
          In case, you are in hurry click here to{" "}
          <a
            href="https://github.com/devjayantmalik/notes"
            rel="noopener noreferrer"
            target="_blank"
          >
            open the github repo
          </a>
        </p>
      </div>
    </article>
  );
};

export default About;
