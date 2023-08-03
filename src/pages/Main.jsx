/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import Home from "../sections/Home";
import About from "../sections/About";
import Resume from "../sections/Resume";
import Project from "../sections/Project";
import Header from "../components/Header";

export default function Main() {
  const [position, setPosition] = useState("absolute");
  const [sectionPosition, setSectionPosition] = useState([0, 0, 0]);
  const contentRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // 콘텐츠 영역의 시작 위치
      const contentOffsetTop =
        contentRef.current.getBoundingClientRect().top + window.scrollY;
      const aboutOffsetTop = aboutRef.current.getBoundingClientRect().top;
      const projectOffsetTop = projectRef.current.getBoundingClientRect().top;

      let copy = [...sectionPosition];
      copy[0] = aboutOffsetTop;
      copy[1] = projectOffsetTop;

      setSectionPosition(copy);

      if (window.scrollY >= contentOffsetTop) {
        setPosition("fixed");
      } else {
        setPosition("absolute");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header position={position} sectionPosition={sectionPosition} />
      <article>
        <Home />
        <div ref={contentRef}>
          <About aboutRef={aboutRef} />
          <Resume />
          <Project projectRef={projectRef} />
        </div>
      </article>
    </>
  );
}
