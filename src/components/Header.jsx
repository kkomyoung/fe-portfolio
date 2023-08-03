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

export default function Header({ position = "absolute", sectionPosition }) {
  const headerStyle = {
    absolute: {
      position: "absolute",
      color: "#fff",
    },
    fixed: {
      position: "fixed",
      color: "#212121",
      background:
        "linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0.9) 50%, transparent);",
    },
  };

  const moveScroll = (index) => {
    const sectionTop = sectionPosition[index];

    window.scrollBy({
      top: sectionTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      css={css`
        z-index: 10;
        top: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 32px 60px;
        transition: 0.5s;
        ${headerStyle[position]}
      `}
    >
      <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
        css={css`
          font-size: 30px;
          font-weight: 900;
          margin-top: -5px;
        `}
      >{`< />`}</button>
      <nav>
        <ul
          css={css`
            display: flex;
          `}
        >
          {globalMenu.map((item, index) => (
            <li
              key={item}
              css={css`
                margin: 0 50px;
                font-size: 22px;
                font-weight: 700;
              `}
            >
              <button onClick={() => moveScroll(index)}>{item}</button>
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
