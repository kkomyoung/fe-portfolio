/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import SectionTitle from "../components/SectionTitle";
import sectionInner from "../styles/style.layout";

export default function About() {
  return (
    <section css={sectionInner}>
      <SectionTitle title={"About"} />
      <p
        css={css`
          font-size: 20px;
          font-weight: 300;
          margin-bottom: 20px;
        `}
      >
        섬세한 UI 구현에 강점을 가진{" "}
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
        웹 에이전시에서 2년 반 동안{" "}
        <span
          css={css`
            color: #8b5cf6;
            font-weight: 500;
          `}
        >
          10개 이상의 프로젝트
        </span>
        에 참여 하며{" "}
        <span
          css={css`
            color: #8b5cf6;
            font-weight: 500;
          `}
        >
          다양한 작업 환경
        </span>
        에서 경험을 쌓았습니다.
        <br />
        이를 통해 다른 팀원들과 협력하고 소통하는 방법을 배웠습니다.
        <br />
        <br />
        처음에는 웹 퍼블리셔로 일을 시작하여 반응형 UI 구현, 크로스 브라우징, 웹
        접근성 작업 등 다양한 업무를 경험했습니다.
        <br /> 특히, 케이뱅크와 흥국화재와 같은 큰 규모의 프로젝트에서는 공통
        컴포넌트를 작업하고 관리하는 업무를 맡기도 했습니다.
        <br /> 이로 인해 재사용 가능한 코드와 협업을 위한 가독성 있는 코드에
        대한 고민을 많이 하게 되었습니다.
        <br />
        <br /> 현재는 이러한 경험을 바탕으로 프론트엔드 개발자로서 더욱 성장하기
        위해 사이드 프로젝트에 참여하여 개발 경험과 지식을 쌓고 있습니다.
      </p>
    </section>
  );
}
