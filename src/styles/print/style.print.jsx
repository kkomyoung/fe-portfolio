/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const PrintSection = styled.section`
  width: 297mm;
  height: 210mm;
  background: white;
  border: 1px solid #212121;
  box-sizing: border-box;

  /* margin: 50px; */

  @print {
    width: auto;
    height: auto;
    margin: 0;
  }

  dl {
    word-break: keep-all;
    & + dl {
      margin-top: 14px;
    }
  }

  dt {
    font-size: 13px;
    font-weight: 500;
  }

  dd {
    font-size: 12px;
    font-weight: 300;

    li {
      position: relative;
      padding-left: 8px;
      margin-top: 4px;
      /* & + li {
        margin-top: 5px;
      } */

      strong {
        font-weight: 500;
        color: #8b5cf6;
      }

      &:before {
        position: absolute;
        left: 0;
        top: 9px;
        content: "";
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: #212121;
      }
    }
  }
`;
