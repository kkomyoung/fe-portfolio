/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

export default function Button({ text, margin, style = "fill" }) {
  const buttonStyle = {
    fill: {
      background: "#212121",
      color: "#fff",
    },
    line: {
      border: "1px solid #212121",
      color: "#212121",
    },
  };

  return (
    <button
      css={css`
        font-size: 16px;
        font-weight: 400;
        display: inline-flex;
        align-items: center;
        padding: 0 40px;
        min-height: 48px;
        border-radius: 48px;
        line-height: 1;
        margin: ${margin};
        ${buttonStyle[style]}
      `}
    >
      {text}
    </button>
  );
}
