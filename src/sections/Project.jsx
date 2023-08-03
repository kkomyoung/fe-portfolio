/** @jsxImportSource @emotion/react */
import React from "react";
import SectionTitle from "../components/SectionTitle";
import SectionContainer from "../components/SectionContainer";
import ProjectItem from "../components/ProjectItem";
import thumbLoveDocument from "../assets/images/thumb_love_document.jpg";
import thumbDailyDev from "../assets/images/thumb_daily_dev.jpg";

const projectsData = [
  {
    thumb: { thumbDailyDev },
    title: "데일리데브",
    desc: "유명 IT 기업의 기술 관련 글을 모아보고 구독하는 서비스",
    duration: "2023.06 - 작업중",
    team: "프론트엔드 1명, 백엔드 1명",
    tech: "React, TypeScript, Recoil, React-Query, React-Hook-Form, Tailwind",
    func: [
      "<strong>GitHub Issue</strong>를 사용하여 프로젝트의 추가 기능, 개선사항, 버그 등을 효율적으로 관리함",
      "<strong>페이지네이션(더보기) 구현</strong> : 초기에 데이터를 모두 호출한 뒤 클라이언트 단에서 가공하는 방식을 사용하여 페이지 전환을 빠르게 하고 사용성을 높임",
      "React-Hook-Form을 사용하여 로그인, 회원가입 폼의 코드를 줄이고 <strong>유효성 검사를 단순화</strong>함",
    ],
    link: {
      more: "/daily-dev",
      demo: "http://daily-dev-news.com",
      github: "https://github.com/TEAM-KN/daily_dev_front",
    },
  },
  {
    thumb: { thumbLoveDocument },
    title: "연애서류합",
    desc: "소개팅 상대와의 궁합을 알아보는 서비스",
    duration: "2023.03 - 2023.06 (12주)",
    team: "프론트엔드 2명, 백엔드 1명, 디자인 3명",
    tech: "React, Recoil, React-Query, Styled-Component, Lottie",
    func: [
      "Styled-Component 사용 규칙 정의하여 <strong>코드 가독성</strong>을 높임",
      "<strong>공통 컴포넌트 담당</strong> 구현 : 헤더, 모달, 토스트 팝업, 로딩, 버튼 등",
      "유저 관련 기능 담당 구현 : 로그인, 회원가입, 회원정보 수정 등",
      "질문지 생성 및 편집 기능 담당 구현",
    ],
    link: {
      more: "/love-document",
      demo: "https://www.love-document.com/",
      github: "https://github.com/kkomyoung/love-document-client",
    },
  },
];

export default function About() {
  return (
    <SectionContainer textAlign="left">
      <SectionTitle title={"Project"} />
      <ul>
        {projectsData.map((item, index) => (
          <ProjectItem key={index} data={item} />
        ))}
      </ul>
    </SectionContainer>
  );
}
