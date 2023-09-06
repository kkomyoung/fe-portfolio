/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import SectionTitle from "../components/SectionTitle";
import ProjectItem from "../components/ProjectItem";
// import thumbLoveDocument from "../assets/images/thumb_love_document.jpg";
// import thumbDailyDev from "../assets/images/thumb_daily_dev.jpg";
import { sectionInner } from "../styles/style.layout";
import { PROJECT_DATA } from "../data/projectData";

export default function Project() {
  return (
    <section
      css={css`
        ${sectionInner};
        text-align: left;
      `}
    >
      <SectionTitle title={"Project"} />
      <ul
        css={css`
          & > li {
            margin-top: 9rem;
          }
        `}
      >
        {PROJECT_DATA.map((item, index) => (
          <ProjectItem key={index} data={item} />
        ))}
      </ul>
    </section>
  );
}
