/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const globalMenu = ["About", "Project", "Contact"];

const StyledGlobalMenu = styled.nav`
  ul {
    display: flex;
  }

  li {
    margin: 0 50px;
  }

  a,
  button {
    font-size: 22px;
    font-weight: 700;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export default function GlobalMenu({ anchorPoints }) {
  const moveScroll = (anchorPointsIndex) => {
    window.scrollTo({
      top: anchorPoints[anchorPointsIndex],
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledGlobalMenu>
      <ul>
        {globalMenu.map((item, index) => (
          <li key={item}>
            <button onClick={() => moveScroll(index)}>{item}</button>
          </li>
        ))}
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </StyledGlobalMenu>
  );
}
