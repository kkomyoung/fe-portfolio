/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const textList = css`
  position: relative;
  padding-left: 1.3rem;
  margin-top: 0.4rem;

  &:before {
    position: absolute;
    left: 0;
    top: 1.1rem;
    display: inline-block;
    content: "";
    width: 0.4rem;
    height: 0.4rem;
    background: #212121;
    border-radius: 100%;
  }

  strong {
    color: #8b5cf6;
    font-weight: 500;
  }

  .subList {
    li {
      color: #898989;
      position: relative;
      padding-left: 1.3rem;
      margin-top: 0.2rem;

      &:before {
        position: absolute;
        left: 0;
        top: 1.1rem;
        display: inline-block;
        content: "";
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 100%;
        border: 1px solid #212121;
      }
    }
  }
`;
