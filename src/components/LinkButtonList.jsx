/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

function LinkButton({ iconLink }) {
  const name = Object.keys(iconLink);
  const url = iconLink[name]["url"];
  const icon = iconLink[name]["icon"];
  return (
    <a
      css={css`
        display: block;
        transition: 0.2s;
        &:hover {
          opacity: 0.4;
        }

        i {
          display: inline-flex;
          align-items: center;
          width: 3.2rem;
          height: 3.2rem;

          svg {
            width: 100%;
            height: 100%;
          }
        }
      `}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <i aria-hidden="true">{icon}</i>
    </a>
  );
}

export default function LinkButtonList({ iconLinks }) {
  return (
    <ul
      css={css`
        display: flex;
        align-items: center;
        margin-top: 1rem;

        li + li {
          margin-left: 2.5rem;
        }
      `}
    >
      {iconLinks.map((iconLink, index) => (
        <li key={index}>
          <LinkButton iconLink={iconLink} />
        </li>
      ))}
    </ul>
  );
}
