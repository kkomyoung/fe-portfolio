/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Button from "../components/Button";
import { sectionInner } from "../styles/style.layout";
import InViewMotion from "../components/InViewMotion";

export default function Blog() {
  return (
    <section
      css={css`
        background: #eee;
      `}
    >
      <div
        css={css`
          ${sectionInner};
          padding: 12rem 4rem;
        `}
      >
        <InViewMotion>
          <p
            css={css`
              font-size: 2.2rem;
              font-weight: 300;
              margin-bottom: 4rem;
            `}
          >
            저의 학습 기록을 확인해보세요!
          </p>

          <Button href="https://github.com/kkomyoung" text="깃허브 프로필" />
          <Button
            href="https://velog.io/@kya754"
            text="기술 블로그"
            type="line"
          />
        </InViewMotion>
      </div>
    </section>
  );
}
