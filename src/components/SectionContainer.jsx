/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

export default function SectionContainer({ children }) {
  return (
    <section
      css={css`
        margin: 0 auto;
        max-width: 1026px;
        padding: 200px 40px;
        text-align: center;
      `}
    >
      {children}
    </section>
  );
}
