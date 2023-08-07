/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Button from "../components/Button";
import sectionInner from "../styles/style.layout";

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
          padding: 120px 40px;
        `}
      >
        <p
          css={css`
            font-size: 22px;
            font-weight: 300;
            margin-bottom: 40px;
          `}
        >
          상세한 프로필은 <u>📎김영애 이력서</u>에서 확인해주세요
        </p>

        <Button to="/resume" text="자세히 보기" />
      </div>
    </section>
  );
}
