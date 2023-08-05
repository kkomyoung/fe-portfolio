/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import PrintButton from "./PrintButton";
import ScrollTopButton from "./ScrollTopButton";

export default function SideButtonWrap({ headerStyle }) {
  return (
    <div
      css={css`
        position: fixed;
        right: 32px;
        bottom: 32px;
        /* width: 60px;
        height: 120px; */
        /* overflow: hidden; */
      `}
    >
      <PrintButton headerStyle={headerStyle} />
      <ScrollTopButton headerStyle={headerStyle} />
    </div>
  );
}
