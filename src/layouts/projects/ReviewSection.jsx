/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { sectionInner } from "../../styles/style.layout";
import InViewMotion from "../../components/InViewMotion";

const datalist = css`
  padding-left: 30%;
  margin-top: 5rem;
  dl {
    & + dl {
      margin-top: 10rem;
    }
  }
  dt {
    width: 30%;
    font-weight: 500;
    font-size: 2.2rem;
    text-decoration: underline;
    margin-bottom: 2rem;
  }
  dd {
    flex: 1;
    word-break: keep-all;
    font-weight: 300;
    font-size: 1.6rem;
  }

  li {
    position: relative;
    padding-left: 1.5rem;
    margin-top: 0.2rem;
    line-height: 1.7;
    word-break: keep-all;

    & + li {
      margin-top: 2rem;
    }

    &:before {
      position: absolute;
      left: 0;
      top: 1.1rem;
      display: inline-block;
      content: "";
      width: 0.5rem;
      height: 0.5rem;
      background: #212121;
      border-radius: 100%;
    }

    strong {
      /* color: #8b5cf6; */
      font-weight: 400;
    }

    span {
      position: relative;
      display: block;
      padding-left: 2rem;

      &:before {
        position: absolute;
        left: 0;
        top: 1.1rem;
        display: inline-block;
        content: "";
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 100%;
        border: 1px solid #212121;
      }
    }
  }
`;

export default function ReviewSection({ Reviews, color }) {
  return (
    <section
      css={css`
        margin-top: 5rem;
        background: #f9f9f9;
      `}
    >
      <div
        css={css`
          ${sectionInner}
          text-align: left;
          padding: 10rem 4rem 15rem;
        `}
      >
        <h2
          css={css`
            line-height: 1;
            font-size: 2.4rem;
            color: ${color};
          `}
        >
          REVIEW
        </h2>
        <InViewMotion>
          <div css={datalist}>
            <dl>
              <dt>개선해야 할 점 🔥</dt>
              <dd>{Reviews.Review01()}</dd>
            </dl>
            <dl>
              <dt>배운 점 📚</dt>
              <dd>{Reviews.Review02()}</dd>
            </dl>
          </div>
        </InViewMotion>
      </div>
    </section>
  );
}
