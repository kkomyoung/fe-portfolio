/** @jsxImportSource @emotion/react */
import React, { useState, useRef, useEffect } from "react";
import Header from "../layouts/Header";
import handleHeaderStyle from "../utils/handleHeaderStyle";
import AnchorSection from "../components/AnchorSection";
import getAnchorPoints from "../utils/getAnchorPoints";
import SideButtonWrap from "../components/SideButtonWrap";
import MotionWrapper from "../components/MotionWrapper";
import { PROJECT_DATA } from "../data/projectData";
import MainBanner from "../layouts/projects/MainBanner";
import OverViewSection from "../layouts/projects/OverviewSection";
import IntroSection from "../layouts/projects/IntroSection";
import FeatureSection from "../layouts/projects/FeatureSection";
import Feature01 from "../layouts/dailydev/Feature01";
import Feature02 from "../layouts/dailydev/Feature02";
import Feature03 from "../layouts/dailydev/Feature03";
import ReviewSection from "../layouts/projects/ReviewSection";
import Reviews from "../layouts/dailydev/Reviews";
import InViewMotion from "../components/InViewMotion";

const color = "#4b43e0";
const data = PROJECT_DATA.filter((data) => data.id === "dailydev");

export default function DailyDevPage() {
  const [headerStyle, setHeaderStyle] = useState("absolute");
  const [anchorPoints, setAnchorPoints] = useState([0, 0, 0]);
  const firstSection = useRef(null);
  const secondSection = useRef(null);
  const thirdSection = useRef(null);

  const handlePrint = () => {
    const url =
      "https://drive.google.com/file/d/1FyFQMvGSQXF2aL9xhoF9fDLMDFJkC_Jh/view?usp=sharing";
    window.open(url);
  };

  useEffect(() => {
    const points = getAnchorPoints([firstSection, secondSection, thirdSection]);

    setAnchorPoints(points);
    handleHeaderStyle(points[0], setHeaderStyle);
  }, []);

  return (
    <MotionWrapper>
      <Header
        headerStyle={headerStyle}
        anchorPoints={anchorPoints}
        type="dailydev"
      />
      <article>
        <MainBanner data={data} />

        <AnchorSection refName={firstSection}>
          <OverViewSection data={data} color={color} />
          <IntroSection color={color}>
            <InViewMotion>
              <p>
                <strong>
                  데일리데브는 유명 IT 기업의 기술 블로그와 뉴스를 한곳에서 모아
                  볼 수 있는 서비스입니다.
                </strong>
                <br />
                회원가입 후에 원하는 기업을 선택하면 매일 아침 10시에 구독한
                글을 보내드립니다. <br />웹 사이트를 방문하시면 모든 기업의 글을
                한 곳에서 편하게 볼 수 있습니다.
              </p>
            </InViewMotion>
          </IntroSection>
        </AnchorSection>
        <AnchorSection refName={secondSection}>
          <FeatureSection color={color}>
            <Feature01 />
            <Feature02 />
            <Feature03 />
          </FeatureSection>
        </AnchorSection>
        <AnchorSection refName={thirdSection}>
          <ReviewSection Reviews={Reviews} color={color} />
        </AnchorSection>
      </article>

      <SideButtonWrap headerStyle={headerStyle} handlePrint={handlePrint} />
    </MotionWrapper>
  );
}
