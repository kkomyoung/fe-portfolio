/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

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
        <button
          css={css`
            background: #212121;
            color: #fff;
            font-size: 16px;
            font-weight: 500;
            display: inline-flex;
            align-items: center;
            padding: 0 26px;
            min-height: 48px;
            border-radius: 48px;
            line-height: 1;
          `}
        >
          Notion으로 보기
        </button>
        <button
          css={css`
            background: #212121;
            color: #fff;
            font-size: 16px;
            font-weight: 500;
            display: inline-flex;
            align-items: center;
            padding: 0 26px;
            min-height: 48px;
            border-radius: 48px;
            line-height: 1;
            margin-left: 20px;
          `}
        >
          PDF로 보기
        </button>
      </div>
    </section>
  );
}
