/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

// light: 100
// semilihgt: 300
// normal : 400
// bold: 500
// extrabold : 700

export const HeadSection = styled.section`
  margin-bottom: 6rem;

  @media print {
    margin-bottom: 4rem;
  }

  h1 {
    font-size: 4.2rem;
    font-weight: 500;
  }
  p {
    font-size: 2.4rem;
    font-weight: 300;
  }

  .name {
    margin-bottom: 2.4rem;

    &:after {
      margin-top: 2.4rem;
      content: "";
      display: block;
      width: 6.4rem;
      height: 0.1rem;
      background: #212121;
    }
  }

  .contact {
    font-size: 1.6rem;
    font-weight: 300;
    margin-bottom: 1.2rem;

    span + span {
      &:before {
        margin: 0 0.6rem;
        content: "·";
        display: inline-block;
      }
    }
  }
`;

export const IntroSection = styled.section`
  .title {
    font-size: 2.8rem;
    font-weight: 400;
  }

  .desc {
    margin-top: 2.2rem;
    font-size: 1.6rem;
    font-weight: 300;

    @media print {
      margin-top: 1.5rem;
    }
  }
`;

export const InfoWrap = styled.div`
  margin-top: 6.8rem;
  border-bottom: 0.1rem solid #ddd;
`;

export const InfoSection = styled.section`
  /* padding: 3.4rem 0; */
  border-top: 0.2rem solid #212121;
  display: flex;

  .category {
    flex: 1;
    padding: 3.4rem 0;
  }

  h3 {
    font-size: 2rem;
    font-weight: 500;
  }

  .txt {
    margin-top: 1rem;
    font-size: 1.2rem;
    font-weight: 300;
    color: #5a5a5a;
  }
`;

export const InfoList = styled.ul`
  flex: 3;
  @media print {
    flex: 4;
  }

  .hidden {
    display: none;
  }

  .sub-list {
    padding-left: 2rem;
  }

  & > .link-list {
    padding: 3.4rem 0;

    li + li {
      margin-top: 1rem;
    }
  }

  & > li {
    position: relative;
    padding: 3.4rem 0;

    & + li {
      border-top: 0.1rem solid #ddd;
    }
  }

  h4.title {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 2rem;
    font-weight: 500;

    span {
      font-size: 1.9rem;
      font-weight: 300;

      &:before {
        content: "·";
        margin: 0 0.5rem;
      }
    }
  }

  h5.title {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 1.8rem;
    font-weight: 500;

    span {
      font-size: 1.9rem;
      font-weight: 300;

      &:before {
        content: "·";
        margin: 0 0.5rem;
      }
    }
  }

  .sub-title {
    font-size: 1.6rem;
    font-weight: 300;
  }

  time {
    position: absolute;
    top: 3.4rem;
    right: 0;
    font-size: 1.5rem;
    font-weight: 400;
    text-align: right;
    span {
      margin-left: 0.3rem;
      font-weight: 300;
    }
  }

  .txt {
    display: block;
    font-size: 1.5rem;
    font-weight: 300;
  }
`;

export const TitleWrap = styled.div`
  @media print {
    page-break-inside: avoid;
  }
`;

export const InfoDetail = styled.div`
  width: 100%;
  max-width: 74rem;
  margin-top: 3rem;
  word-break: keep-all;

  @media print {
    margin-top: 1.8rem;
    page-break-inside: avoid;
    max-width: 85%;
  }

  h5.title {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 0.3rem;
  }
`;

export const DetailList = styled.ul`
  font-size: 1.5rem;
  font-weight: 300;

  li {
    position: relative;
    padding-left: 1.2rem;

    & + li {
      margin-top: 0.3rem;
    }

    &:before {
      position: absolute;
      left: 0;
      top: 1rem;
      content: "";
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
      background: #212121;
    }
  }
`;

export const Point = styled.strong`
  color: #8b5cf6;
  font-weight: 500;
`;

export const StackList = styled.ul`
  margin: -0.2rem;
  & + ul {
    margin-top: 0.6rem;
  }
  li {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 300;
    height: 3rem;
    border: 0.1rem solid #ddd;
    padding: 0 1.6rem;
    border-radius: 1.5rem;
    margin: 0.2rem;

    &.point {
      background: #212121;
      color: white;
      border: none;
    }

    &.tool {
      background: #eee;
      /* color: white; */
      border: none;
    }
  }
`;

export const ATag = styled.a`
  svg {
    position: relative;
    top: 0.2rem;
    display: inline-block;
    width: 1.5rem;
    margin-right: 0.2rem;
  }
  span {
    /* border-bottom: 1px solid #212121; */
    text-decoration: underline;
  }

  &:hover {
    background: #f5f6f8;
    border-radius: 0.6rem;
    transition: 0.2s;
  }
`;

export const UrlTag = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0 1rem;
  height: 3.8rem;

  svg {
    display: block;
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 0.8rem;
  }

  span {
    font-size: 1.5rem;
    color: #8b5cf6;
    text-decoration: underline;
  }

  &:hover {
    background: #f5f6f8;
    border-radius: 0.6rem;
    transition: 0.2s;
  }
`;

export const UrlTagBasic = styled.a`
  display: inline-flex;
  align-items: center;
  height: 3.8rem;
  margin-right: 2.6rem;

  svg {
    display: block;
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 0.8rem;
  }

  span {
    font-size: 1.5rem;
    color: #8b5cf6;
    text-decoration: underline;
  }
`;

export const UrlTagList = styled.ul`
  display: flex;
  align-items: center;
`;
