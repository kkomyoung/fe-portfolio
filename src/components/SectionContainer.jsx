/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

export default function SectionContainer({
  sectionRef,
  children,
  textAlign = "center",
}) {
  return (
    <section
      ref={sectionRef}
      css={css`
        margin: 0 auto;
        max-width: 1236px;
        padding: 200px 40px;
        text-align: ${textAlign};
      `}
    >
      {children}
    </section>
  );
}
