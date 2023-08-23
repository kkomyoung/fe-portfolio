/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const StyledLogoButton = styled.button`
  font-size: 30px;
  font-weight: 900;
  margin-top: -5px;
`;

export default function LogoButton({ type }) {
  const navigate = useNavigate();

  const setFeature = () => {
    if (type !== "anchor") {
      navigate("/");
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return <StyledLogoButton onClick={setFeature}>{`< />`}</StyledLogoButton>;
}
