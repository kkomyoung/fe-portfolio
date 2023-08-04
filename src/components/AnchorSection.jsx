/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export default function AnchorSection({ children, refName }) {
  return <div ref={refName}>{children}</div>;
}
