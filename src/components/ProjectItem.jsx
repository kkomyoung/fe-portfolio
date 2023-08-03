/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Button from "./Button";

export default function ProjectItem({ data }) {
  const { thumb, title, desc, duration, team, tech, func } = data;

  const cssDataList = css`
    margin-top: 24px;
    line-height: 1.65;

    dt {
      font-size: 15px;
      font-weight: 500;
      margin-top: 14px;
    }

    dd {
      font-size: 15px;
      font-weight: 300;
    }

    li {
      position: relative;
      padding-left: 13px;
      margin-top: 2px;

      &:before {
        position: absolute;
        left: 0;
        top: 11px;
        display: inline-block;
        content: "";
        width: 4px;
        height: 4px;
        background: #212121;
        border-radius: 100%;
      }

      strong {
        color: #8b5cf6;
        font-weight: 500;
      }
    }
  `;

  return (
    <li
      css={css`
        display: flex;
        & + li {
          margin-top: 90px;
        }
      `}
    >
      <figure
        css={css`
          display: block;
          background: skyblue;
          width: 100%;
          max-width: 588px;
          height: 510px;
          margin-right: 40px;
          background: url(${thumb[Object.keys(thumb)[0]]}) no-repeat
            center/cover;
        `}
      ></figure>
      <div
        css={css`
          width: 100%;
          max-width: 588px;
        `}
      >
        <h3
          css={css`
            font-size: 38px;
            font-weight: 700;
          `}
        >
          {title}
        </h3>
        <p
          css={css`
            font-size: 18px;
            font-weight: 300;
          `}
        >
          {desc}
        </p>
        <dl css={cssDataList}>
          <dt>개발 기간</dt>
          <dd>{duration}</dd>
          <dt>참여 인원</dt>
          <dd>{team}</dd>
          <dt>사용 기술</dt>
          <dd>{tech}</dd>
          <dt>주요 담당 작업</dt>
          <dd>
            <ul>
              {func.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </dd>
        </dl>
        <div
          css={css`
            margin-top: 34px;
          `}
        >
          <Button text="자세히보기" />
          <Button text="체험하기" margin="0 0 0 12px" style="line" />
        </div>
      </div>
    </li>
  );
}
