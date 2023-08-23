/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import "../../src/mo_index.css";
import { btnFill } from "../styles/style.button";

export default function MobilePage() {
  return (
    <div
      css={css`
        padding: 0 4rem;
        width: 100%;
        overflow: hidden;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: #f8f8f8;

        h1 {
          font-size: 2.2rem;
          font-family: "yg-jalnan";
        }

        p {
          font-size: 1.4rem;
          font-weight: 300;
          color: #808080;
        }
      `}
    >
      <div>
        <h1>모바일 버전 준비중이에요 😢</h1>
        <p>PC로 접속하시거나 인쇄용 포트폴리오를 확인해주세요</p>
        <div
          css={css`
            margin-top: 5rem;
          `}
        >
          <a
            href="https://drive.google.com/file/d/1FyFQMvGSQXF2aL9xhoF9fDLMDFJkC_Jh/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            css={css`
              ${btnFill};
              font-size: 1.4rem;
            `}
          >
            PDF 포트폴리오 보기
          </a>
        </div>
      </div>
    </div>
  );
}
