/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

export default function SectionTitle({ title }) {
  return (
    <h2
      css={css`
        position: relative;
        font-size: 50px;
        font-weight: 700;
        padding-bottom: 70px;
        margin-bottom: 90px;
        &:after {
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          content: "";
          display: block;
          width: 24px;
          height: 24px;
          border-radius: 100%;
          background: #8b5cf6;
        }
      `}
    >
      {title}
    </h2>
  );
}