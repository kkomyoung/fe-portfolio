/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import MotionWrapper from "../components/MotionWrapper";
import Header from "../layouts/Header";
import sectionInner from "../styles/style.layout";
import {
  HeadSection,
  InfoSection,
  IntroSection,
  InfoWrap,
} from "../styles/style.resumePage";

export default function Resume() {
  return (
    <MotionWrapper>
      <Header />
      <article
        css={css`
          ${sectionInner};
          text-align: left;
          padding: 160px 40px;
        `}
      >
        <HeadSection>
          <div className="name">
            <h1>김영애</h1>
            <p>프론트엔드 개발자</p>
          </div>

          <div className="contact">
            <span>kya754@gmail.com</span>
            <span>010-3701-1394</span>
          </div>
        </HeadSection>

        <IntroSection>
          <p className="title">
            섬세한 UI 구현에 강점을 가진 프론트엔드 개발자, 김영애입니다.
          </p>
          <p className="desc">
            웹 에이전시에서 2년 반 동안 10개 이상의 프로젝트에 참여 하며 다양한
            작업 환경에서 경험을 쌓았습니다.
            <br />
            이를 통해 다른 팀원들과 협력하고 소통하는 방법을 배웠습니다.
            <br />
            <br />
            처음에는 웹 퍼블리셔로 일을 시작하여 반응형 UI 구현, 크로스
            브라우징, 웹 접근성 작업 등 다양한 업무를 경험했습니다.
            <br />
            특히, 케이뱅크와 흥국화재와 같은 큰 규모의 프로젝트에서는 공통
            컴포넌트를 작업하고 관리하는 업무를 맡기도 했습니다.
            <br />
            이로 인해 재사용 가능한 코드와 협업을 위한 가독성 있는 코드에 대한
            고민을 많이 하게 되었습니다.
            <br />
            <br />
            현재는 이러한 경험을 바탕으로 프론트엔드 개발자로서 더욱 성장하기
            위해 사이드 프로젝트에 참여하여 개발 경험과 지식을 쌓고 있습니다.
          </p>
        </IntroSection>

        <InfoWrap>
          <InfoSection>
            <h3>업무경험</h3>
            <div></div>
          </InfoSection>
          <InfoSection>
            <h3>프로젝트</h3>
            <div></div>
          </InfoSection>
        </InfoWrap>
      </article>
    </MotionWrapper>
  );
}
