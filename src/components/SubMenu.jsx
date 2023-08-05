/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactComponent as IconGithub } from "../assets/icon/icon_github.svg";
import { ReactComponent as IconVelog } from "../assets/icon/icon_velog.svg";

const subMenu = [
  {
    icon: <IconGithub alt="github" />,
    link: "https://github.com/kkomyoung",
  },
  {
    icon: <IconVelog alt="blog" />,
    link: "https://velog.io/@kya754",
  },
];

const StyledSubMenu = styled.nav`
  ul {
    display: flex;
    align-items: center;
  }

  li + li {
    margin-left: 30px;
  }
`;

export default function SubMenu() {
  return (
    <StyledSubMenu>
      <ul>
        {subMenu.map((item) => (
          <li key={item.link}>
            <a href={item.link} target="_blank" rel="noreferrer">
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </StyledSubMenu>
  );
}
