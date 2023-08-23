/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { sectionInner } from "../../styles/style.layout";

export default function IntroSection({ children, color }) {
  return (
    <section
      css={css`
        background: #f9f9f9;
      `}
    >
      <div
        css={css`
          ${sectionInner};
          padding: 120px 40px;
          font-size: 1.6rem;
          font-weight: 300;
          line-height: 1.7;

          strong {
            display: inline-block;
            font-size: 2rem;
            margin-bottom: 2rem;
            font-weight: 400;
            color: ${color};
          }
        `}
      >
        {children}
      </div>
    </section>
  );
}
