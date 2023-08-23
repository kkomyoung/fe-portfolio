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
import Feature01 from "../layouts/loveDocument/Feature01";
import Feature02 from "../layouts/loveDocument/Feature02";
import Feature03 from "../layouts/loveDocument/Feature03";
import Feature04 from "../layouts/loveDocument/Feature04";
import Feature05 from "../layouts/loveDocument/Feature05";
import Feature06 from "../layouts/loveDocument/Feature06";
import ReviewSection from "../layouts/projects/ReviewSection";
import Reviews from "../layouts/loveDocument/Reviews";
import InViewMotion from "../components/InViewMotion";

const color = "#F85675";
const data = PROJECT_DATA.filter((data) => data.id === "loveDocument");

export default function LoveDocPage() {
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
                  연애서류합은 소개팅 실패 확률을 줄일 수 있는 이상형 분석
                  서비스 입니다.
                </strong>
                <br />내 이상형 기준을 담은 질문지를 만들고 상대에게 공유해서
                답변을 받아보세요. <br />
                도착한 답변을 분석하여 서로의 궁합을 확인할 수 있어요!
              </p>
            </InViewMotion>
          </IntroSection>
        </AnchorSection>
        <AnchorSection refName={secondSection}>
          <FeatureSection color={color}>
            <Feature01 />
            <Feature02 />
            <Feature03 />
            <Feature04 />
            <Feature05 />
            <Feature06 />
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
