/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

export default function Home() {
  return (
    <section
      css={css`
        background: #212121;
        min-height: 100vh;
      `}
    >
      <div
        css={css`
          margin: 0 auto;
          max-width: 1026px;
          padding: 0 40px;
          min-height: 100vh;
          display: flex;
          align-items: center;
        `}
      >
        <h1
          css={css`
            font-size: 80px;
            font-weight: 700;
            color: #fff;
            & span {
              display: block;
            }
          `}
        >
          <span>안녕하세요</span>
          <span>프론트엔드 개발자</span>
          <span>김영애입니다</span>
        </h1>
      </div>
    </section>
  );
}
