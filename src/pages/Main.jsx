/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import Home from "../layouts/Home";
import About from "../layouts/About";
import Resume from "../layouts/Resume";
import Project from "../layouts/Project";
import Header from "../components/Header";
import Contact from "../layouts/Contact";
import AnchorSection from "../components/AnchorSection";
import handleHeaderStyle from "../utils/handleHeaderStyle";
import getAnchorPoints from "../utils/getAnchorPoints";

export default function Main() {
  const [headerStyle, setHeaderStyle] = useState("absolute");
  const [anchorPoints, setAnchorPoints] = useState([0, 0, 0]);
  const firstSection = useRef(null);
  const secondSection = useRef(null);
  const thirdSection = useRef(null);

  useEffect(() => {
    const points = getAnchorPoints([firstSection, secondSection, thirdSection]);

    setAnchorPoints(points);
    handleHeaderStyle(points[0], setHeaderStyle);
  }, []);

  return (
    <>
      <Header headerStyle={headerStyle} anchorPoints={anchorPoints} />
      <article>
        <Home />
        <AnchorSection refName={firstSection}>
          <About />
          <Resume />
        </AnchorSection>
        <AnchorSection refName={secondSection}>
          <Project />
        </AnchorSection>
        <AnchorSection refName={thirdSection}>
          <Contact />
        </AnchorSection>
      </article>
    </>
  );
}
