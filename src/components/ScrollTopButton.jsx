/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const StyledScrollTopButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: #8b5cf6;
  border-radius: 50%;
  color: #fff;
  transition: 0.3s;
  &:hover {
    background: rgba(139, 92, 246, 0.7);
  }
  ${(props) => {
    if (props.headerStyle === "absolute") {
      return css`
        opacity: 0;
        visibility: hidden;
        right: 0;
        bottom: -60px;
      `;
    } else {
      return css`
        opacity: 1;
        visibility: visible;
        right: 0;
        bottom: 0;
      `;
    }
  }}
`;

export default function ScrollTopButton({ headerStyle }) {
  return (
    <StyledScrollTopButton
      headerStyle={headerStyle}
      onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }}
    >
      <ArrowUpIcon width="24px" />
    </StyledScrollTopButton>
  );
}
