/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

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

const StyledSubMenu = styled.nav`
  ul {
    display: flex;
  }

  li + li {
    margin-left: 20px;
  }
`;

export default function SubMenu() {
  return (
    <StyledSubMenu>
      <ul>
        {subMenu.map((item) => (
          <li key={item.name}>
            <a href={item.link} target="_blank" rel="noreferrer">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </StyledSubMenu>
  );
}
