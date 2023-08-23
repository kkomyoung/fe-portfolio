/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { sectionInner } from "../../styles/style.layout";

export default function FeatureSection({ children, color }) {
  return (
    <section
      css={css`
        ${sectionInner}
        padding: 10rem 4rem;
        text-align: left;
      `}
    >
      <div>
        <h2
          css={css`
            line-height: 1;
            font-size: 2.4rem;
            color: ${color};
          `}
        >
          FEATURE
        </h2>
      </div>
      <ul
        css={css`
          margin-top: 6rem;
          & > li {
            padding: 10rem 0;
            & + li {
              border-top: 1px solid #eee;
            }
            &:first-of-type {
              padding-top: 0;
            }
            &:last-of-type {
              padding-bottom: 0;
            }
          }
        `}
      >
        {children}
      </ul>
    </section>
  );
}
