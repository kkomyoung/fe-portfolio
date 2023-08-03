/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Button from "../components/Button";

export default function Resume() {
  return (
    <section
      css={css`
        background: #eee;
      `}
    >
      <div
        css={css`
          margin: 0 auto;
          max-width: 1026px;
          padding: 120px 40px;
          text-align: center;
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
        <Button text="Notion으로 보기" />
        <Button text="PDF로 보기" margin="0 0 0 12px" />
      </div>
    </section>
  );
}
