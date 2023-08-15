/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import GlobalMenu from "../components/GlobalMenu";
import SubMenu from "../components/SubMenu";
import LogoButton from "../components/LogoButton";

const headerStyleList = {
  absolute: {
    position: "absolute",
    color: "#fff",
    ".icon-github": {
      fill: "#fff",
    },
  },
  fixed: {
    position: "fixed",
    color: "#212121",
    background:
      "linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0.9) 50%, transparent);",
    svg: {
      fill: "#212121",
    },
  },
};

export default function Header({ headerStyle = "fixed", anchorPoints }) {
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
        ${headerStyleList[headerStyle]}
        @media print {
          display: none;
        }
      `}
    >
      <LogoButton anchorPoints={anchorPoints} />
      {anchorPoints && <GlobalMenu anchorPoints={anchorPoints} />}
      <SubMenu />
    </header>
  );
}
