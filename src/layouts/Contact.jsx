/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { sectionInner } from "../styles/style.layout";
import SectionTitle from "../components/SectionTitle";

const StyledContactDataList = styled.div`
  dl {
    display: flex;
    justify-content: center;
    color: #fff;
    font-size: 2.2rem;
    font-weight: 300;

    & + dl {
      margin-top: 0.8rem;
    }
  }

  dt {
    margin-right: 1rem;
  }
`;

export default function Contact() {
  return (
    <section
      css={css`
        background: #212121;
      `}
    >
      <div
        css={css`
          ${sectionInner};
          padding: 16rem 4rem;
        `}
      >
        <SectionTitle title="Contact" textColor="#fff" />
        <StyledContactDataList>
          <dl>
            <dt>Phone.</dt>
            <dd>010-3701-1394</dd>
          </dl>
          <dl>
            <dt>E-mail.</dt>
            <dd>kya754@gmail.com</dd>
          </dl>
        </StyledContactDataList>
      </div>
    </section>
  );
}
