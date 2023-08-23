/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const stackList = css`
  margin: -0.2rem;
  & + ul {
    margin-top: 0.6rem;
  }
  li {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 300;
    height: 3rem;
    border: 0.1rem solid #ddd;
    padding: 0 1.6rem;
    border-radius: 1.5rem;
    margin: 0.2rem;

    &.point {
      background: #212121;
      color: white;
      border: none;
    }

    &.tool {
      background: #eee;
      /* color: white; */
      border: none;
    }
  }
`;

export default function StackList({ tech, margin }) {
  return (
    <ul
      css={css`
        ${stackList};
        margin: ${margin};
      `}
    >
      {tech.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
