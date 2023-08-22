/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import PrintButton from "./PrintButton";
import ScrollTopButton from "./ScrollTopButton";

export default function SideButtonWrap({ headerStyle, handlePrint }) {
  return (
    <div
      css={css`
        position: fixed;
        right: 32px;
        bottom: 32px;
        z-index: 50;
        @media print {
          display: none;
        }
      `}
    >
      <PrintButton headerStyle={headerStyle} handlePrint={handlePrint} />
      <ScrollTopButton headerStyle={headerStyle} />
    </div>
  );
}
