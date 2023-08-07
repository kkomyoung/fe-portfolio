/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

// light: 100
// semilihgt: 300
// normal : 400
// bold: 500
// extrabold : 700

export const HeadSection = styled.section`
  margin-bottom: 6rem;
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
      height: 1px;
      background: #212121;
    }
  }

  .contact {
    font-size: 1.6rem;
    font-weight: 300;

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
  }
`;

export const InfoWrap = styled.div`
  margin-top: 6.8rem;
  border-bottom: 1px solid #ddd;
`;

export const InfoSection = styled.section`
  padding: 3.4rem 0;
  border-top: 2px solid #212121;

  h3 {
    font-size: 2.4rem;
    font-weight: 500;
  }
`;
