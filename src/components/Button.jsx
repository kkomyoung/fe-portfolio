/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { btnFill, btnLine } from "../styles/style.button";
import { Link } from "react-router-dom";

export default function Button({ to, href, onClick, text, type }) {
  const Tag = ({ children, className }) => {
    if (to) {
      return (
        <Link to={to} className={className}>
          {children}
        </Link>
      );
    }

    if (href) {
      return (
        <a href={href} className={className}>
          {children}
        </a>
      );
    }

    if (onClick || (!onClick && !href && !to)) {
      return (
        <button onClick={onClick} className={className}>
          {children}
        </button>
      );
    }
  };

  return (
    <Tag
      css={css`
        & + a,
        & + button {
          margin-left: 12px;
        }
        ${type === "line" ? btnLine : btnFill}
      `}
    >
      {text}
    </Tag>
  );
}
