/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Button from "../components/Button";
import { sectionInner } from "../styles/style.layout";
import InViewMotion from "../components/InViewMotion";

export default function Resume() {
  return (
    <section
      css={css`
        background: #eee;
      `}
    >
      <div
        css={css`
          ${sectionInner};
          padding: 12rem 4rem;
        `}
      >
        <InViewMotion>
          <p
            css={css`
              font-size: 2.2rem;
              font-weight: 300;
              margin-bottom: 4rem;
            `}
          >
            상세한 프로필은 <u>📎김영애 이력서</u>에서 확인해주세요
          </p>

          <Button to="/resume" text="자세히 보기" />
        </InViewMotion>
      </div>
    </section>
  );
}
