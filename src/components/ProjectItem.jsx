/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "./Button";
import InViewMotion from "./InViewMotion";
import LinkButtonList from "./LinkButtonList";
// import StackList from "./StackList";

export default function ProjectItem({ data }) {
  const {
    thumb,
    title,
    desc,
    duration,
    team,
    // tech,
    contribution,
    link,
    iconLink,
  } = data;

  const cssDataList = css`
    margin-top: 2.4rem;
    line-height: 1.65;
    word-break: keep-all;

    dt {
      font-size: 1.5rem;
      font-weight: 500;
      margin-top: 1.4rem;
    }

    dd {
      font-size: 1.5rem;
      font-weight: 300;
    }
  `;

  return (
    <InViewMotion as={"li"}>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
        `}
      >
        <figure
          css={css`
            display: block;
            flex-basis: 40rem;
            flex-grow: 1;
            /* padding-top: 87%; */
            /* height: 58rem; */
            /* background: skyblue; */

            /* background: url(${thumb[Object.keys(thumb)[0]]}) no-repeat center
              top/contain; */
            /* border-radius: 2rem; */

            img {
              display: block;
              width: 100%;
              border-radius: 2rem;
            }

            @media (max-width: 800px) {
              flex-basis: fit-content;
            }
          `}
        >
          <img src={thumb} alt="" />
        </figure>
        <div
          css={css`
            flex-basis: 30rem;
            flex-grow: 1;
            padding: 2rem 4rem;
            /* margin-left: 4rem; */

            @media (max-width: 800px) {
              flex-basis: fit-content;
              padding: 0;
              margin-top: 2rem;
            }
          `}
        >
          <h3
            css={css`
              font-size: 3.8rem;
              font-weight: 700;
            `}
          >
            {title}
          </h3>
          <p
            css={css`
              font-size: 1.8rem;
              font-weight: 300;
            `}
          >
            {desc}
          </p>
          <dl css={cssDataList}>
            <dd>
              <LinkButtonList iconLinks={iconLink} />
            </dd>
            <dt>개발 기간</dt>
            <dd>{duration}</dd>
            <dt>참여 인원</dt>
            <dd>{team}</dd>
            <dt>기여도</dt>
            <dd>{contribution}</dd>
            {/* <dt>사용 기술</dt>
            <dd>
              <StackList tech={tech} margin="0.3rem 0 0 0" />
            </dd> */}
          </dl>
          <div
            css={css`
              margin-top: 3.4rem;
            `}
          >
            <Button to={link.more} text="자세히 보기" />
          </div>
        </div>
      </div>
    </InViewMotion>
  );
}
