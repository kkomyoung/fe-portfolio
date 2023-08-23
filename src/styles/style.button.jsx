/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// 기본 타입
export const btnBasic = css`
  font-size: 1.6rem;
  font-weight: 400;
  display: inline-flex;
  align-items: center;
  padding: 0 3.2rem;
  min-height: 4.8rem;
  border-radius: 4.8rem;
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
  /* background: #fff; */
`;
