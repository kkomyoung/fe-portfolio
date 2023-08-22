/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import Home from "../layouts/Home";
import About from "../layouts/About";
import Resume from "../layouts/Resume";
import Project from "../layouts/Project";
import Header from "../layouts/Header";
import Contact from "../layouts/Contact";
import AnchorSection from "../components/AnchorSection";
import handleHeaderStyle from "../utils/handleHeaderStyle";
import getAnchorPoints from "../utils/getAnchorPoints";
import SideButtonWrap from "../components/SideButtonWrap";
import MotionWrapper from "../components/MotionWrapper";
import InViewMotion from "../components/InViewMotion";
// import { useReactToPrint } from "react-to-print";
// import MainPrint from "./print/MainPrintPage";

export default function Main() {
  const [headerStyle, setHeaderStyle] = useState("absolute");
  const [anchorPoints, setAnchorPoints] = useState([0, 0, 0]);
  const firstSection = useRef(null);
  const secondSection = useRef(null);
  const thirdSection = useRef(null);

  // const printRef = useRef();

  // const handlePrint = useReactToPrint({
  //   content: () => printRef.current,
  //   documentTitle: "포트폴리오_프론트엔드_김영애",
  // });

  const handlePrint = () => {
    const url =
      "https://drive.google.com/file/d/1FyFQMvGSQXF2aL9xhoF9fDLMDFJkC_Jh/view?usp=sharing";
    window.open(url);
  };

  useEffect(() => {
    const points = getAnchorPoints([firstSection, secondSection, thirdSection]);

    setAnchorPoints(points);
    handleHeaderStyle(points[0], setHeaderStyle);
  }, []);

  return (
    <MotionWrapper>
      <Header headerStyle={headerStyle} anchorPoints={anchorPoints} />
      <article>
        <Home />
        <AnchorSection refName={firstSection}>
          <About />
          <InViewMotion>
            <Resume />
          </InViewMotion>
        </AnchorSection>
        <AnchorSection refName={secondSection}>
          <Project />
        </AnchorSection>
        <AnchorSection refName={thirdSection}>
          <Contact />
        </AnchorSection>
      </article>
      <div
        css={css`
          display: none;
        `}
      ></div>

      <SideButtonWrap headerStyle={headerStyle} handlePrint={handlePrint} />
    </MotionWrapper>
  );
}
