/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const StyledLogoButton = styled.button`
  font-size: 30px;
  font-weight: 900;
  margin-top: -5px;
`;

export default function LogoButton() {
  return (
    <StyledLogoButton
      onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }}
    >
      {`< />`}
    </StyledLogoButton>
  );
}
