/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const globalMenu = ["About", "Project", "Contact"];
const subMenu = [
  {
    name: "깃허브",
    link: "https://github.com/kkomyoung",
  },
  {
    name: "벨로그",
    link: "https://velog.io/@kya754",
  },
];

export default function Header() {
  return (
    <header
      css={css`
        position: fixed;
        top: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 40px 60px;
        color: #fff;
      `}
    >
      <a
        href="#none"
        css={css`
          font-size: 30px;
          font-weight: 900;
          margin-top: -5px;
        `}
      >{`< />`}</a>
      <nav>
        <ul
          css={css`
            display: flex;
          `}
        >
          {globalMenu.map((item) => (
            <li
              key={item}
              css={css`
                margin: 0 50px;
                font-size: 22px;
                font-weight: 700;
              `}
            >
              <a href="#none">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
      <nav>
        <ul
          css={css`
            display: flex;
          `}
        >
          {subMenu.map((item) => (
            <li
              key={item.name}
              css={css`
                & + li {
                  margin-left: 20px;
                }
              `}
            >
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
