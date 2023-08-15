/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const sectionInner = css`
  margin: 0 auto;
  max-width: 1236px;
  padding: 20rem 4rem;
  text-align: center;

  @media print {
    width: 210mm;
    padding: 0;
  }

  @page {
    size: A4;
    margin: 10mm;
  }
`;

export default sectionInner;
