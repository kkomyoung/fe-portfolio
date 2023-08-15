/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useRef } from "react";
import { css } from "@emotion/react";
import MotionWrapper from "../components/MotionWrapper";
import Header from "../layouts/Header";
import sectionInner from "../styles/style.layout";
import {
  HeadSection,
  InfoSection,
  IntroSection,
  InfoWrap,
  InfoList,
  InfoDetail,
  DetailList,
  Point,
  StackList,
  ATag,
  UrlTag,
  UrlTagList,
  TitleWrap,
} from "../styles/style.resumePage";
import { LinkIcon } from "@heroicons/react/24/solid";
import { ReactComponent as IconGithub } from "../assets/icon/icon_github.svg";
import { ReactComponent as IconVelog } from "../assets/icon/icon_velog.svg";
import SideButtonWrap from "../components/SideButtonWrap";
import { useReactToPrint } from "react-to-print";

export default function Resume() {
  const [headerStyle, setHeaderStyled] = useState("absolute");
  const printRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "이력서_프론트엔드_김영애",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setHeaderStyled("fixed");
      } else {
        setHeaderStyled("absolute");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MotionWrapper>
      <Header />
      <article
        ref={printRef}
        css={css`
          ${sectionInner};
          text-align: left;
          padding: 160px 40px 240px;
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
            20개 이상의 웹사이트 구축·운영 경험을 가진 개발자, 김영애입니다.
          </p>
          <p className="desc">
            웹 에이전시에서 2년 반동안 20개 이상의 프로젝트에 참여하며 여러 작업
            환경에서 경험을 쌓았습니다.
            <br /> 웹 퍼블리셔로 일을 시작하여 반응형 UI 구현, 크로스 브라우징,
            웹 접근성 작업 등 다양한 업무를 담당했습니다.
          </p>
          <p className="desc">
            특히, 케이뱅크와 흥국화재와 같은 큰 규모의 구축 프로젝트에서 공통
            컴포넌트를 전담하여 작업하고 관리한 경험을 바탕으로,
            <br /> 사내 퍼블리싱 가이드 작성, UI 컴포넌트 모듈화 작업에 참여하여
            프로젝트 구축 시간을 단축하는데 기여를 했습니다.
            <br /> 이를 통해 협업을 위한 가독성 있는 코드에 대한 고민을 많이
            하게 되었고 팀원들과 원활하게 소통하는 방법을 배웠습니다.
          </p>
          <p className="desc">
            현재는 이러한 경험을 바탕으로 사이드 프로젝트에 참여하며 프론트엔드
            개발자로서의 팀 경험과 지식을 쌓고 있습니다.
          </p>
        </IntroSection>

        <InfoWrap>
          <InfoSection>
            <div className="category">
              <h3>기술 스택</h3>
            </div>
            <InfoList>
              <li>
                <StackList>
                  <li className="point">ES6</li>
                  <li className="point">TypeScript</li>
                  <li className="point">React</li>
                  <li>React-Router</li>
                  <li>React-Query</li>
                  <li>Recoil</li>
                  <li className="point">Vue</li>
                  <li>Vuex</li>
                  <li className="point">jQuery</li>
                  <li>Pug</li>
                  <li>SASS (SCSS)</li>
                  <li>Styled-Components</li>
                  <li>Emotion</li>
                  <li>TailwindCSS</li>
                </StackList>
                <StackList>
                  <li className="tool">Git</li>
                  <li className="tool">Github</li>
                  <li className="tool">Figma</li>
                  <li className="tool">Framer</li>
                  <li className="tool">Adobe XD</li>
                  <li className="tool">Notion</li>
                  <li className="tool">Jira</li>
                </StackList>
              </li>
            </InfoList>
          </InfoSection>
          <InfoSection>
            <div className="category">
              <h3>업무 경험</h3>
            </div>
            <InfoList>
              <li>
                <TitleWrap>
                  <h4 className="title">
                    이트라이브<span>웹 에이전시</span>
                  </h4>
                  <p className="sub-title">웹 퍼블리셔 / UX 그룹</p>
                  <time>
                    2019.12 ~ 2022.04 <br />
                    <span>총 2년 5개월</span>
                  </time>
                </TitleWrap>
                <InfoDetail>
                  <DetailList>
                    <li>
                      <Point>9개</Point>의 웹 사이트 <Point>구축</Point> 경험
                    </li>
                    <li>
                      <Point>11개</Point>의 웹 사이트 <Point>운영</Point> 경험
                    </li>
                    <li>사내 퍼블리싱 가이드 작성 및 코딩리스트 고도화</li>
                    <li>재사용 가능한 UI 컴포넌트 모듈화 작업 참여</li>
                  </DetailList>
                </InfoDetail>
              </li>
              <li>
                <TitleWrap>
                  <h4 className="title">케이뱅크 모바일 웹앱 구축</h4>
                  <p className="sub-title">퍼블리셔 PA</p>
                  <time>
                    2021.08 ~ 2022.04 <br />
                    <span>총 9개월</span>
                  </time>
                </TitleWrap>
                <InfoDetail>
                  <h5 className="title">주요 업무</h5>
                  <DetailList>
                    <li>
                      협업 시 필요한 퍼블리싱 가이드를 작성하고 관리하는 역할을
                      담당
                    </li>
                    <li>
                      이전 흥국화재 구축 프로젝트에서 만든 컴포넌트들을 재사용
                      가능하도록 정리하고, 새로운 디자인에 맞춰 적용하는 업무를
                      담당하여 <Point>작업시간을 크게 단축</Point> 시키는데
                      기여함
                    </li>
                  </DetailList>
                </InfoDetail>
                <InfoDetail>
                  <h5 className="title">사용 기술</h5>
                  <StackList>
                    <li>ES6</li>
                    <li>jQuery</li>
                    <li>Pug</li>
                    <li>SCSS</li>
                    <li>Gulp</li>
                    <li>Webpack</li>
                    <li>Babel</li>
                    <li>JSDoc</li>
                    <li>Git</li>
                    <li>Framer</li>
                  </StackList>
                </InfoDetail>
              </li>
              <li>
                <TitleWrap>
                  <h4 className="title">흥국화재 모바일 웹/앱 구축</h4>
                  <p className="sub-title">퍼블리셔 PA</p>
                  <time>
                    2021.03 ~ 2021.07 <br />
                    <span>총 5개월</span>
                  </time>
                </TitleWrap>

                <InfoDetail>
                  <h5 className="title">주요 업무</h5>
                  <DetailList>
                    <li>
                      자바스크립트{" "}
                      <ATag
                        href="https://github.com/kkomyoung/hk-component"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkIcon />
                        <span>모듈패턴으로 코딩</span>
                      </ATag>
                      하여 모달팝업, 아코디언과 같은 컴포넌트를 독립적으로
                      관리하고 재사용이 가능하도록 구현함
                    </li>
                    <li>
                      <ATag
                        href="https://kkomyoung.github.io/hk-component/jsDoc/gen/index.html"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkIcon />
                        <span>JSDoc으로 스크립트 가이드</span>
                      </ATag>
                      를 작성하여 개발자들이 화면을 쉽게 업데이트 할 수 있도록
                      함
                    </li>
                    <li>
                      <Point>9명의 퍼블리셔</Point>들이 동일한 마크업 구조로
                      작업 할 수 있도록 <Point>공통 컴포넌트를 관리</Point>하는
                      역할을 함
                    </li>
                    <li>
                      <Point>웹 접근성</Point> 검사를 토대로 수정 작업에 참여함
                    </li>
                  </DetailList>
                </InfoDetail>
                <InfoDetail>
                  <h5 className="title">사용 기술</h5>
                  <StackList>
                    <li>ES6</li>
                    <li>jQuery</li>
                    <li>Pug</li>
                    <li>SCSS</li>
                    <li>Gulp</li>
                    <li>Webpack</li>
                    <li>Babel</li>
                    <li>JSDoc</li>
                    <li>Git</li>
                  </StackList>
                </InfoDetail>
                <InfoDetail>
                  <h5 className="title">링크</h5>
                  <UrlTagList>
                    <li>
                      <UrlTag
                        href="https://www.love-document.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkIcon />
                        <span>흥국화재</span>
                      </UrlTag>
                    </li>
                  </UrlTagList>
                </InfoDetail>
              </li>
              <li className="hidden">
                <TitleWrap>
                  <h4 className="title">롯데리조트 트래브러리 메뉴 구축</h4>
                  <p className="sub-title">퍼블리셔 PL</p>
                  <time>
                    2021.08
                    <br />
                    <span>총 1개월</span>
                  </time>
                </TitleWrap>

                <InfoDetail>
                  <h5 className="title">주요 업무</h5>
                  <DetailList>
                    <li>메인 페이지 담당 작업</li>
                    <li>
                      GSAP와 ScrollTigger를 사용하여{" "}
                      <Point>스크롤 애니메이션</Point> 구현
                    </li>
                  </DetailList>
                </InfoDetail>
                <InfoDetail>
                  <h5 className="title">사용 기술</h5>
                  <StackList>
                    <li>HTML</li>
                    <li>SCSS</li>
                    <li>jQuery</li>
                    <li>GSAP</li>
                    <li>ScrollTrigger</li>
                    <li>Gulp</li>
                    <li>Git</li>
                    <li>Figma</li>
                  </StackList>
                </InfoDetail>
                <InfoDetail>
                  <h5 className="title">링크</h5>
                  <UrlTagList>
                    <li>
                      <UrlTag
                        href="https://www.lotteresort.com/main/ko/travelbrary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkIcon />
                        <span>트래브러리</span>
                      </UrlTag>
                    </li>
                  </UrlTagList>
                </InfoDetail>
              </li>
              <li>
                <TitleWrap>
                  <h4 className="title">롯데제과 반응형 웹 구축</h4>
                  <p className="sub-title">퍼블리셔 PA</p>
                  <time>
                    2020.11 ~ 2021.01 <br />
                    <span>총 3개월</span>
                  </time>
                </TitleWrap>

                <InfoDetail>
                  <h5 className="title">주요 업무</h5>
                  <DetailList>
                    <li>
                      GSAP와 ScrollTigger를 사용하여{" "}
                      <Point>스크롤 애니메이션</Point> 구현
                    </li>
                    <li>
                      <Point>모션 작업</Point>이 필요한 화면 위주로 담당하여
                      작업
                    </li>
                    <li>
                      주요 담당 페이지 :{" "}
                      <ATag
                        href="https://www.lottewellfood.com/brand/character"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkIcon />
                        <span>캐릭터스토리</span>{" "}
                      </ATag>
                      <ATag
                        href="https://www.lottewellfood.com/company/world/overseas"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkIcon />
                        <span>세계속의 롯데제과</span>{" "}
                      </ATag>
                      <ATag
                        href="https://www.lottewellfood.com/prcenter/gana"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkIcon />
                        <span>가나초콜릿체</span>
                      </ATag>
                    </li>
                  </DetailList>
                </InfoDetail>
                <InfoDetail>
                  <h5 className="title">사용 기술</h5>
                  <StackList>
                    <li>Pug</li>
                    <li>SCSS</li>
                    <li>jQuery</li>
                    <li>GSAP</li>
                    <li>ScrollTrigger</li>
                    <li>Gulp</li>
                    <li>Git</li>
                  </StackList>
                </InfoDetail>
                <InfoDetail>
                  <h5 className="title">링크</h5>
                  <UrlTagList>
                    <li>
                      <UrlTag
                        href="https://www.lottewellfood.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkIcon />
                        <span>롯데웰푸드 (구 롯데제과)</span>
                      </UrlTag>
                    </li>
                  </UrlTagList>
                </InfoDetail>
              </li>
              <li className="hidden">
                <TitleWrap>
                  <h4 className="title">동아제약 반응형 웹 구축</h4>
                  <p className="sub-title">퍼블리셔 PA</p>
                  <time>
                    2020.09 ~ 2020.11 <br />
                    <span>총 3개월</span>
                  </time>
                </TitleWrap>

                <InfoDetail>
                  <h5 className="title">주요 업무</h5>
                  <DetailList>
                    <li>
                      <Point>다국어</Point> 버전 사이트의 반응형 화면 구현
                    </li>
                    <li>
                      주요 담당 페이지 :{" "}
                      <ATag
                        href="http://www.dpharm.co.kr/noscarna/ko/story"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkIcon />
                        <span>노스카나</span>{" "}
                      </ATag>
                    </li>
                  </DetailList>
                </InfoDetail>
                <InfoDetail>
                  <h5 className="title">사용 기술</h5>
                  <StackList>
                    <li>jQuery</li>
                    <li>Pug</li>
                    <li>SCSS</li>
                    <li>Gulp</li>
                    <li>Git</li>
                  </StackList>
                </InfoDetail>
                <InfoDetail>
                  <h5 className="title">링크</h5>
                  <UrlTagList>
                    <li>
                      <UrlTag
                        href="http://www.dpharm.co.kr/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkIcon />
                        <span>동아제약</span>
                      </UrlTag>
                    </li>
                  </UrlTagList>
                </InfoDetail>
              </li>
              <li>
                <TitleWrap>
                  <h4 className="title">롯데정보통신 사이트 운영</h4>
                  <p className="sub-title">퍼블리셔 PA</p>
                  <time>
                    2020.06 ~ 2020.10 <br />
                    <span>총 5개월</span>
                  </time>
                </TitleWrap>

                <InfoDetail>
                  <h5 className="title">주요 업무</h5>
                  <DetailList>
                    <li>롯데 계열사 사이트를 유지 운영 및 고도화</li>
                    <li>
                      <Point>Jira로 할당된 많은 이슈</Point>들을 빠르고 정확하게
                      해결하는 것에 중점을 두고 업무를 담당함
                    </li>
                    <li>
                      다른 사람이 작성한 코드를 파악하고 문제를 해결하는 능력을
                      기를 수 있는 경험을 함
                    </li>
                  </DetailList>
                </InfoDetail>
                <InfoDetail>
                  <h5 className="title">운영 사이트 목록</h5>
                  <DetailList>
                    <li>롯데월드</li>
                    <li>서울스카이</li>
                    <li>롯데워터파크</li>
                    <li>롯데월드 아쿠아리움</li>
                    <li>나뚜루</li>
                    <li>롯데칠성</li>
                    <li>롯데케미칼</li>
                    <li>롯데제과</li>
                  </DetailList>
                </InfoDetail>
              </li>
              <li>
                <TitleWrap>
                  <h4 className="title">도화엔지니어링 구축</h4>
                  <p className="sub-title">퍼블리셔 PA</p>
                  <time>
                    2020.08 ~ 2020.09 <br />
                    <span>총 2개월</span>
                  </time>
                </TitleWrap>

                <InfoDetail>
                  <h5 className="title">주요 업무</h5>
                  <DetailList>
                    <li>
                      진행 중인 프로젝트에 중도 참여하여{" "}
                      <Point>부정확하게 마크업된 반응형 화면을 수정</Point>하고,
                      일정에 맞추어 사이트가 성공적으로 오픈하도록 기여함
                    </li>
                    <li>
                      다국어(영어, 스페인어) 지원이 가능하도록 CSS 수정 작업
                    </li>
                  </DetailList>
                </InfoDetail>
                <InfoDetail>
                  <h5 className="title">사용 기술</h5>
                  <StackList>
                    <li>Pug</li>
                    <li>SCSS</li>
                    <li>jQuery</li>
                    <li>Gulp</li>
                    <li>Git</li>
                  </StackList>
                </InfoDetail>
                <InfoDetail>
                  <h5 className="title">링크</h5>
                  <UrlTagList>
                    <li>
                      <UrlTag
                        href="https://www.dohwa.co.kr/main?lang=ko"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkIcon />
                        <span>도화엔지니어링</span>
                      </UrlTag>
                    </li>
                  </UrlTagList>
                </InfoDetail>
              </li>
              <li>
                <TitleWrap>
                  <h4 className="title">김앤장 사이트 운영</h4>
                  <p className="sub-title">퍼블리셔 PL</p>
                  <time>
                    2020.02 ~ 2020.09 <br />
                    <span>총 8개월</span>
                  </time>
                </TitleWrap>

                <InfoDetail>
                  <h5 className="title">주요 업무</h5>
                  <DetailList>
                    <li>
                      반응형, 다국어(영어, 중국어, 일본어) 버전 사이트 유지보수
                      작업
                    </li>
                    <li>
                      Outlook을 포함한 여러 종류의 메일 서비스에 대응할 수 있는{" "}
                      <Point>뉴스레터 작업</Point>
                    </li>
                  </DetailList>
                </InfoDetail>
                <InfoDetail>
                  <h5 className="title">링크</h5>
                  <UrlTagList>
                    <li>
                      <UrlTag
                        href="https://www.kimchang.com/ko/main.kc"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkIcon />
                        <span>김앤장</span>
                      </UrlTag>
                    </li>
                  </UrlTagList>
                </InfoDetail>
              </li>
              <li>
                <TitleWrap>
                  <h4 className="title">LG화학 사이트 운영</h4>
                  <p className="sub-title">퍼블리셔 PL</p>
                  <time>
                    2020.02 ~ 2020.09 <br />
                    <span>총 8개월</span>
                  </time>
                </TitleWrap>

                <InfoDetail>
                  <h5 className="title">주요 업무</h5>
                  <DetailList>
                    <li>
                      SCSS mixin으로 px을 vw로 변환하여 반응형 페이지 작업
                    </li>
                    <li>다국어 버전 사이트 유지보수 작업</li>
                    <li>
                      <Point>웹 접근성 작업</Point> 참여
                    </li>
                  </DetailList>
                </InfoDetail>
                <InfoDetail>
                  <h5 className="title">링크</h5>
                  <UrlTagList>
                    <li>
                      <UrlTag
                        href="https://www.lgchem.com/main/index"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkIcon />
                        <span>LG화학</span>
                      </UrlTag>
                    </li>
                  </UrlTagList>
                </InfoDetail>
              </li>
              <li>
                <TitleWrap>
                  <h4 className="title">삼성자산운용 사이트 운영</h4>
                  <p className="sub-title">퍼블리셔 PL</p>
                  <time>
                    2020.02 ~ 2020.09 <br />
                    <span>총 8개월</span>
                  </time>
                </TitleWrap>

                <InfoDetail>
                  <h5 className="title">주요 업무</h5>
                  <DetailList>
                    <li>애니메이션이 강조된 이벤트 페이지 작업</li>
                    <li>
                      뉴스룸 메뉴 <Point>리뉴얼</Point> 작업 : iframe 반응형
                      작업
                    </li>
                  </DetailList>
                </InfoDetail>
                <InfoDetail>
                  <h5 className="title">링크</h5>
                  <UrlTagList>
                    <li>
                      <UrlTag
                        href="https://www.samsungfund.com/fund/main.do"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkIcon />
                        <span>삼성자산운용</span>
                      </UrlTag>
                    </li>
                  </UrlTagList>
                </InfoDetail>
              </li>
              <li className="hidden">
                <TitleWrap>
                  <h4 className="title">농민신문 메인 페이지 리뉴얼</h4>
                  <p className="sub-title">퍼블리셔 PL</p>
                  <time>
                    2020.04 ~ 2020.06 <br />
                    <span>총 2개월</span>
                  </time>
                </TitleWrap>

                <InfoDetail>
                  <h5 className="title">주요 업무</h5>
                  <DetailList>
                    <li>메인 페이지 담당 작업</li>
                    <li>
                      여러 웹 브라우저에서 일관된 그리드를 유지하기 위해 Can I
                      use 사이트를 활용하여 <Point>크로스브라우징 </Point>
                      테스트하여 화면 구현
                    </li>
                  </DetailList>
                </InfoDetail>
                <InfoDetail>
                  <h5 className="title">사용 기술</h5>
                  <StackList>
                    <li>Jade</li>
                    <li>Less</li>
                    <li>jQuery</li>
                    <li>Gulp</li>
                    <li>Git</li>
                  </StackList>
                </InfoDetail>
                <InfoDetail>
                  <h5 className="title">링크</h5>
                  <UrlTagList>
                    <li>
                      <UrlTag
                        href="https://www.nongmin.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkIcon />
                        <span>농민신문</span>
                      </UrlTag>
                    </li>
                  </UrlTagList>
                </InfoDetail>
              </li>
              <li className="hidden">
                <TitleWrap>
                  <h4 className="title">GS칼텍스 반응형 웹 구축</h4>
                  <p className="sub-title">퍼블리셔 PA</p>
                  <time>
                    2020.02 <br />
                    <span>총 1개월</span>
                  </time>
                </TitleWrap>

                <InfoDetail>
                  <h5 className="title">주요 업무</h5>
                  <DetailList>
                    <li>반응형 퍼블리싱 작업</li>
                  </DetailList>
                </InfoDetail>
                <InfoDetail>
                  <h5 className="title">사용 기술</h5>
                  <StackList>
                    <li>Pug</li>
                    <li>SCSS</li>
                    <li>jQuery</li>
                    <li>Gulp</li>
                    <li>Git</li>
                  </StackList>
                </InfoDetail>
                <InfoDetail>
                  <h5 className="title">링크</h5>
                  <UrlTagList>
                    <li>
                      <UrlTag
                        href="https://www.gscaltex.com/kr/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkIcon />
                        <span>GS칼텍스</span>
                      </UrlTag>
                    </li>
                  </UrlTagList>
                </InfoDetail>
              </li>
              <li className="hidden">
                <TitleWrap>
                  <h4 className="title">한화아쿠아플라넷 웹 구축</h4>
                  <p className="sub-title">퍼블리셔 PA</p>
                  <time>
                    2020.01 <br />
                    <span>총 1개월</span>
                  </time>
                </TitleWrap>

                <InfoDetail>
                  <h5 className="title">주요 업무</h5>
                  <DetailList>
                    <li>적응형 퍼블리싱 작업</li>
                  </DetailList>
                </InfoDetail>
                <InfoDetail>
                  <h5 className="title">사용 기술</h5>
                  <StackList>
                    <li>Pug</li>
                    <li>SCSS</li>
                    <li>jQuery</li>
                    <li>Gulp</li>
                    <li>Git</li>
                  </StackList>
                </InfoDetail>
                <InfoDetail>
                  <h5 className="title">링크</h5>
                  <UrlTagList>
                    <li>
                      <UrlTag
                        href="https://www.aquaplanet.co.kr/index.do"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkIcon />
                        <span>한화아쿠아플라넷</span>
                      </UrlTag>
                    </li>
                  </UrlTagList>
                </InfoDetail>
              </li>
            </InfoList>
          </InfoSection>
          <InfoSection>
            <div className="category">
              <h3>사이드 프로젝트</h3>
              <p className="txt">
                📌 더 자세한 내용은
                <br />
                포트폴리오을 확인해주세요
              </p>
            </div>
            <InfoList>
              <li>
                <TitleWrap>
                  <h4 className="title">
                    데일리데브
                    <span>
                      유명 IT 기업의 기술 관련 글을 모아보고 구독하는 서비스
                    </span>
                  </h4>
                  <p className="sub-title">FE 개발</p>
                  <time>2023.06 ~ ing</time>
                </TitleWrap>

                <InfoDetail>
                  <h5 className="title">주요 작업</h5>
                  <DetailList>
                    <li>
                      <Point>GitHub Issue</Point>를 사용하여 프로젝트의 추가
                      기능, 개선사항, 버그 등을 효율적으로 관리함
                    </li>
                    <li>
                      <Point>페이지네이션(더보기) 구현</Point> : 초기에 데이터를
                      모두 호출한 뒤 클라이언트 단에서 가공하는 방식을 사용하여
                      페이지 전환을 빠르게 하고 사용성을 높임
                    </li>
                    <li>
                      React-Hook-Form을 사용하여 로그인, 회원가입 폼의 코드를
                      줄이고 <Point>유효성 검사를 단순화</Point>함
                    </li>
                  </DetailList>
                </InfoDetail>
                <InfoDetail>
                  <h5 className="title">사용 기술</h5>
                  <StackList>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Recoil</li>
                    <li>React-Query</li>
                    <li>React-Hook-Form</li>
                    <li>TailwindCSS</li>
                  </StackList>
                </InfoDetail>
                <InfoDetail>
                  <h5 className="title">링크</h5>
                  <UrlTagList>
                    <li>
                      <UrlTag
                        href="http://daily-dev-news.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkIcon />
                        <span>데일리데브</span>
                      </UrlTag>
                    </li>
                    <li>
                      <UrlTag
                        href="https://github.com/TEAM-KN/daily_dev_front"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <IconGithub />
                        <span>깃허브</span>
                      </UrlTag>
                    </li>
                  </UrlTagList>
                </InfoDetail>
              </li>
              <li>
                <TitleWrap>
                  <h4 className="title">
                    연애서류합
                    <span>소개팅 상대와의 궁합을 알아보는 서비스</span>
                  </h4>
                  <p className="sub-title">기획 / FE 개발</p>
                  <time>
                    2023.01 ~ 2023.06
                    <br />
                    <span>총 6개월</span>
                  </time>
                </TitleWrap>

                <InfoDetail>
                  <h5 className="title">주요 작업</h5>
                  <DetailList>
                    <li>
                      배포 전 반복된 기능 테스트를 통해{" "}
                      <Point>20개 이상의 오류사항</Point>을 발견하고 수정
                    </li>
                    <li>
                      <Point>공통 컴포넌트</Point> 담당 구현 : 헤더, 모달,
                      토스트 팝업, 로딩, 버튼 등
                    </li>
                    <li>
                      <Point>유저 관련 기능</Point> 담당 구현 : 로그인,
                      회원가입, 회원정보 수정 등
                    </li>
                    <li>질문지 생성 및 편집 기능 담당 구현</li>
                  </DetailList>
                </InfoDetail>
                <InfoDetail>
                  <h5 className="title">사용 기술</h5>
                  <StackList>
                    <li>React</li>
                    <li>Recoil</li>
                    <li>React-Query</li>
                    <li>Styled-Component</li>
                    <li>Lottie</li>
                  </StackList>
                </InfoDetail>
                <InfoDetail>
                  <h5 className="title">링크</h5>
                  <UrlTagList>
                    <li>
                      <UrlTag
                        href="https://www.love-document.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkIcon />
                        <span>연애서류합</span>
                      </UrlTag>
                    </li>
                    <li>
                      <UrlTag
                        href="https://github.com/kkomyoung/love-document-client"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <IconGithub />
                        <span>깃허브</span>
                      </UrlTag>
                    </li>
                  </UrlTagList>
                </InfoDetail>
              </li>
            </InfoList>
          </InfoSection>
          <InfoSection>
            <div className="category">
              <h3>학력</h3>
            </div>
            <InfoList>
              <li>
                <TitleWrap>
                  <h4 className="title">한국방송통신대학교</h4>
                  <p className="sub-title">컴퓨터과학과</p>
                  <time>
                    2020.03 ~ 2024.02 <br />
                    <span>총 4년</span>
                  </time>
                  <span className="txt">3.7 / 4.5 학점</span>
                </TitleWrap>
              </li>
              <li>
                <TitleWrap>
                  <h4 className="title">동양미래대학교</h4>
                  <p className="sub-title">시각정보디자인과</p>
                  <time>
                    2016.03 ~ 2018.02 <br />
                    <span>총 2년</span>
                  </time>
                  <span className="txt">4.02 / 4.5 학점</span>
                </TitleWrap>
                <InfoDetail>
                  <DetailList>
                    <li>UI/UX 웹 디자인 과목 수료</li>
                  </DetailList>
                </InfoDetail>
              </li>
            </InfoList>
          </InfoSection>
          <InfoSection>
            <div className="category">
              <h3>수상</h3>
            </div>
            <InfoList>
              <li>
                <TitleWrap>
                  <h4 className="title">웹 퍼블리셔 과정 최우수상</h4>
                  <p className="sub-title">하이미디어컴퓨터학원</p>
                  <time>2019</time>
                </TitleWrap>
                <InfoDetail>
                  <DetailList>
                    <li>
                      6개월의 단위평가에서 가장 우수한 성적을 받은 학생에게
                      수여하는 상
                    </li>
                  </DetailList>
                </InfoDetail>
              </li>
            </InfoList>
          </InfoSection>
          <InfoSection>
            <div className="category">
              <h3>자격증</h3>
            </div>
            <InfoList>
              <li>
                <TitleWrap>
                  <h4 className="title">웹디자인기능사</h4>
                  <time>2019</time>
                </TitleWrap>
              </li>
              <li>
                <TitleWrap>
                  <h4 className="title">GTQ 인디자인 1급</h4>
                  <time>2019</time>
                </TitleWrap>
              </li>
              <li>
                <TitleWrap>
                  <h4 className="title">GTQ 포토샵 1급</h4>
                  <time>2018</time>
                </TitleWrap>
              </li>
            </InfoList>
          </InfoSection>
          <InfoSection>
            <div className="category">
              <h3>포트폴리오</h3>
            </div>
            <InfoList as="div">
              <div className="link-list">
                <UrlTag
                  href="https://kkomyoung.github.io/fe-portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkIcon />
                  <span>포트폴리오</span>
                </UrlTag>
              </div>
            </InfoList>
          </InfoSection>
          <InfoSection>
            <div className="category">
              <h3>ETC</h3>
            </div>
            <InfoList as="div">
              <ul className="link-list">
                <li>
                  <UrlTag
                    href="https://github.com/kkomyoung"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconGithub />
                    <span>깃허브</span>
                  </UrlTag>
                </li>
                <li>
                  <UrlTag
                    href="https://velog.io/@kya754"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconVelog />
                    <span>블로그</span>
                  </UrlTag>
                </li>
              </ul>
            </InfoList>
          </InfoSection>
        </InfoWrap>
      </article>
      <SideButtonWrap headerStyle={headerStyle} handlePrint={handlePrint} />
    </MotionWrapper>
  );
}
