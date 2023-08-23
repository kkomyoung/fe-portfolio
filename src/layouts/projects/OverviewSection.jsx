/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { sectionInner } from "../../styles/style.layout";
import StackList from "../../components/StackList";
import InViewMotion from "../../components/InViewMotion";
import LinkButtonList from "../../components/LinkButtonList";

const datalist = css`
  dl {
    & + dl {
      margin-top: 2rem;
    }
  }
  dt {
    font-weight: 500;
    font-size: 1.6rem;
  }
  dd {
    font-weight: 300;
    font-size: 1.6rem;
  }
`;

export default function OverViewSection({ data, color }) {
  const { duration, team, contribution, tech, iconLink } = data[0];
  return (
    <section
      css={css`
        ${sectionInner}
        padding: 10rem 4rem;
        text-align: left;
        display: flex;
      `}
    >
      <div
        css={css`
          width: 30%;
        `}
      >
        <h2
          css={css`
            line-height: 1;
            font-size: 2.4rem;
            color: ${color};
          `}
        >
          OVERVIEW
        </h2>
      </div>
      <InViewMotion>
        <div css={datalist}>
          <dl>
            <dt>협업 문서 링크</dt>
            <dd>
              <LinkButtonList iconLinks={iconLink} />
            </dd>
          </dl>
          <dl>
            <dt>개발 기간</dt>
            <dd>{duration}</dd>
          </dl>
          <dl>
            <dt>참여 인원</dt>
            <dd>{team}</dd>
          </dl>
          <dl>
            <dt>기여도</dt>
            <dd>{contribution}</dd>
          </dl>
          <dl>
            <dt>사용기술</dt>
            <dd>
              <StackList tech={tech} margin="0.3rem 0 0 0" />
            </dd>
          </dl>
        </div>
      </InViewMotion>
    </section>
  );
}
