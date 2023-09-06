/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { textList } from "../../styles/style.text";
import ImgFeature03 from "../../assets/images/feature03_love_document.png";
import InViewMotion from "../../components/InViewMotion";

export default function Feature02() {
  return (
    <li
      css={css`
        word-break: keep-all;
        h3 {
          font-size: 3rem;
          font-weight: 600;
        }

        p {
          font-size: 1.5rem;
          font-weight: 300;
          margin-bottom: 5rem;
        }

        dt {
          font-size: 1.5rem;
          font-weight: 500;
          margin-top: 1.4rem;
          text-decoration: underline;
        }

        dl {
          & + dl {
            margin-top: 6rem;
          }
        }

        dd {
          word-break: keep-all;
          font-size: 1.5rem;
          font-weight: 300;
          ${textList}
        }

        figure {
          margin-top: 4rem;
          @media (min-width: 800px) {
            margin-top: -17rem;
          }
        }

        img {
          width: 100%;
          display: block;
          margin: 0 auto;
        }
      `}
    >
      <InViewMotion>
        <div>
          <h3>질문지 답변하기</h3>
          <p>
            질문지 링크를 받은 상대방이 기본 정보와, 질문지에 대한 답변을 입력할
            수 있습니다.
            <br />
            답변이 완료되면 도착한 답변에 표시됩니다.
          </p>
          <dl>
            <dt>기능 구현</dt>
            <dd>
              질문자의 닉네임과 질문지 ID 정보를 담은 API 호출
              <ul className="subList">
                <li>답변하기 랜딩화면에 질문자의 닉네임을 표시함</li>
                <li>답변하기 버튼 클릭 시 질문지 ID 링크로 이동</li>
              </ul>
            </dd>
          </dl>
        </div>
        <figure>
          <img src={ImgFeature03} alt="질문지 답변하기 화면" />
        </figure>
      </InViewMotion>
    </li>
  );
}
