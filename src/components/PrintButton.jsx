/** @jsxImportSource @emotion/react */
import React from "react";
import { PrinterIcon } from "@heroicons/react/24/solid";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const StyledPrintButton = styled.button`
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
        right: 0;
        bottom: 0;
      `;
    } else {
      return css`
        right: 0;
        bottom: 72px;
      `;
    }
  }}
`;

export default function PrintButton({ headerStyle, handlePrint }) {
  return (
    <StyledPrintButton headerStyle={headerStyle} onClick={() => handlePrint()}>
      <PrinterIcon width="26px" />
    </StyledPrintButton>
  );
}
