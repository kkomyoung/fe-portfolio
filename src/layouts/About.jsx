/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import SectionTitle from "../components/SectionTitle";
import { sectionInner } from "../styles/style.layout";
import AnimatedCounter from "../components/AnimatedCounter";
import InViewMotion from "../components/InViewMotion";

export default function About() {
  return (
    <section css={sectionInner}>
      <SectionTitle title={"About"} />
      <InViewMotion>
        <div
          css={css`
            margin-bottom: 10rem;
            ul {
              display: flex;
              justify-content: center;
            }

            li {
              flex: 1;
              max-width: 20.6rem;
              padding: 2rem;

              & + li {
                margin-left: 4.2rem;
              }
            }

            span {
              color: #787878;
              margin-left: 0.4rem;
              font-size: 1.8rem;
              font-weight: 300;
            }

            p {
              color: #787878;
              margin-top: 1rem;
              font-size: 1.5rem;
              font-weight: 400;
            }
          `}
        >
          <ul>
            <li>
              <div>
                <AnimatedCounter endNumber="9" speed="150" />
                <span>개</span>
              </div>
              <p>구축 프로젝트</p>
            </li>
            <li>
              <div>
                <AnimatedCounter endNumber="11" speed="100" />
                <span>개</span>
              </div>
              <p>운영 프로젝트</p>
            </li>
            <li>
              <div>
                <AnimatedCounter endNumber="3" speed="400" />
                <span>개</span>
              </div>
              <p>사이드 프로젝트</p>
            </li>
          </ul>
        </div>
      </InViewMotion>
      <InViewMotion>
        <p
          css={css`
            font-size: 20px;
            font-weight: 300;
            margin-bottom: 20px;
          `}
        >
          다양한 프로젝트에서의 협업 경험을 가지고 있는{" "}
          <strong
            css={css`
              font-weight: 500;
            `}
          >
            프론트엔드 개발자, 김영애
          </strong>
          입니다.
        </p>
        <p
          css={css`
            font-size: 16px;
            font-weight: 300;
            line-height: 1.75;
          `}
        >
          협업을 통해 공동의 목표를 달성하는 것을 가장 가치있게 생각합니다.
          그렇기 때문에, <br />
          프론트엔드를 중심으로 기획, 디자인, 백엔드 등 여러 파트에 대한
          지식에도 관심을 가지며 학습하고 있습니다. <br />
          앞으로 더 나은 서비스를 제공하고 사용자 경험을 향상시킬 수 있는 💪힘을
          키워나가겠습니다.
        </p>
      </InViewMotion>
    </section>
  );
}
