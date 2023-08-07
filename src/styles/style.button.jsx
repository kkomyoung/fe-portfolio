/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// 기본 타입
export const btnBasic = css`
  font-size: 16px;
  font-weight: 400;
  display: inline-flex;
  align-items: center;
  padding: 0 40px;
  min-height: 48px;
  border-radius: 48px;
  line-height: 1;
`;

// fill 타입
export const btnFill = css`
  ${btnBasic}
  background: #212121;
  color: #fff;
`;

// line 타입
export const btnLine = css`
  ${btnBasic}
  border: 1px solid #212121;
  color: #212121;
`;
