import thumbLoveDocument from "../assets/images/thumb_love_document.jpg";
import thumbDailyDev from "../assets/images/thumb_daily_dev.jpg";
import mainDailyDev from "../assets/images/main_daily_dev.jpg";
import mainLoveDoc from "../assets/images/main_love_document.jpg";
import { ReactComponent as IconGithub } from "../assets/icon/icon_github.svg";
import { ReactComponent as IconFigma } from "../assets/icon/icon_figma.svg";
import { ReactComponent as IconSwagger } from "../assets/icon/icon_swagger.svg";
import { ReactComponent as IconNotion } from "../assets/icon/icon_notion.svg";

export const PROJECT_DATA = [
  {
    id: "dailydev",
    thumb: { thumbDailyDev },
    banner: mainDailyDev,
    title: "데일리데브",
    subDesc: "매일 아침 만나는 최신 IT 뉴스",
    desc: "유명 IT 기업의 기술 관련 글을 모아보고 구독하는 서비스",
    duration: "2023.06 - 2023.08 (3개월) /  리팩토링 진행 중",
    team: "프론트엔드 1명, 백엔드 1명",
    contribution: "프론트엔드 개발 100%",
    tech: [
      "React",
      "TypeScript",
      "Recoil",
      "React-Query",
      "React-Hook-Form",
      "Tailwind",
    ],
    link: {
      more: "/daily-dev",
      demo: "http://daily-dev-news.com",
      video: "https://www.youtube.com/watch?v=OTiMhn4DVe0",
    },
    iconLink: [
      {
        github: {
          url: "https://github.com/TEAM-KN/daily_dev_front",
          icon: <IconGithub />,
        },
      },
      {
        notion: {
          url: "https://kkomyoung.notion.site/Daily-Dev-2b16a7710c434811906ef298a7bfb273?pvs=4",
          icon: <IconNotion />,
        },
      },
      {
        swagger: {
          url: "http://3.239.26.220:8080/dailyb/swagger-ui/index.html",
          icon: <IconSwagger />,
        },
      },
    ],
  },
  {
    id: "loveDocument",
    thumb: { thumbLoveDocument },
    banner: mainLoveDoc,
    title: "연애서류합",
    subDesc: "찰떡궁합 이상형 찾기",
    desc: "소개팅 상대와의 궁합을 알아보는 서비스",
    duration: "2023.01 - 2023.06 (6개월)",
    team: "프론트엔드 2명, 백엔드 1명, 디자인 3명",
    contribution: "기획 40%, 프론트엔드 개발 60%",
    tech: ["React", "Recoil", "React-Query", "Styled-Component", "Lottie"],
    link: {
      more: "/love-document",
      demo: "https://www.love-document.com/",
      video: "https://www.youtube.com/watch?v=cgInZd0eHeQ",
    },
    iconLink: [
      {
        github: {
          url: "https://github.com/kkomyoung/love-document-client",
          icon: <IconGithub />,
        },
      },
      {
        notion: {
          url: "https://minuxx.notion.site/937936def47141d892044394a7b7894d?pvs=4",
          icon: <IconNotion />,
        },
      },
      {
        swagger: {
          url: "https://api-dev.love-document.com/swagger-ui/index.html",
          icon: <IconSwagger />,
        },
      },
      {
        figma: {
          url: "https://www.figma.com/file/8qs7dpuzT5DClrdzIBblmh/%EA%B9%8C%EA%B9%8C%EB%93%A4?type=design&node-id=201-1038&mode=design&t=kXNiMfS1cT8k1E5V-0",
          icon: <IconFigma />,
        },
      },
    ],
  },
];
