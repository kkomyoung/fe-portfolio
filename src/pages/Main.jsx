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
import handleAnchorPoints from "../utils/handleAnchorPoints";

export default function Main() {
  const [headerStyle, setHeaderStyle] = useState("absolute");
  const [anchorPoints, setAnchorPoints] = useState([0, 0, 0]);
  const firstSection = useRef(null);
  const secondSection = useRef(null);
  const thirdSection = useRef(null);

  useEffect(() => {
    setAnchorPoints(
      handleAnchorPoints([firstSection, secondSection, thirdSection])
    );

    // 스크롤 위치에 따라 해더 스타일을 정해주는 함수
    handleHeaderStyle(130, setHeaderStyle);
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
