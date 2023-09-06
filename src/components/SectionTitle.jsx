/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import InViewMotion from "./InViewMotion";

export default function SectionTitle({ title, textColor = "#212121" }) {
  return (
    <InViewMotion>
      <h2
        css={css`
          position: relative;
          font-size: 5rem;
          font-weight: 700;
          padding-bottom: 7rem;
          margin-bottom: 9rem;
          text-align: center;
          color: ${textColor};
          &:after {
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
            content: "";
            display: block;
            width: 2.4rem;
            height: 2.4rem;
            border-radius: 100%;
            background: #8b5cf6;
          }

          @media (max-width: 800px) {
            font-size: 4rem;
            padding-bottom: 6rem;
            margin-bottom: 5rem;

            &:after {
              width: 2rem;
              height: 2rem;
            }
          }
        `}
      >
        {title}
      </h2>
    </InViewMotion>
  );
}
