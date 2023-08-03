/** @jsxImportSource @emotion/react */
import React from "react";
import Home from "../sections/Home";
import About from "../sections/About";
import Resume from "../sections/Resume";
import Project from "../sections/Project";

export default function Main() {
  return (
    <article>
      <Home />
      <About />
      <Resume />
      <Project />
    </article>
  );
}
