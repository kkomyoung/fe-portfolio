/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { textList } from "../../styles/style.text";
import ImgFeature04 from "../../assets/images/feature04_love_document.png";
import InViewMotion from "../../components/InViewMotion";

export default function Feature04() {
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
          margin-bottom: 4rem;
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
          flex: 1.6;
        }
        img {
          width: 100%;
          display: block;
          margin: 0 auto;
        }
      `}
    >
      <InViewMotion>
        <div
          css={css`
            @media (min-width: 800px) {
              display: flex;
            }
          `}
        >
          <figure>
            <img src={ImgFeature04} alt="도착한 답변 분석 화면" />
          </figure>
          <div
            css={css`
              flex: 1;
              margin-top: 5rem;

              @media (min-width: 800px) {
                margin-left: -12rem;
              }
            `}
          >
            <div>
              <h3>도착한 답변 분석</h3>
              <p>
                나의 이상형 기준과 상대방의 답변을 비교하여 얼마나 일치하는지
                확인할 수 있습니다. 주선자에게 소개팅 의사를 전달할 수 있는
                링크를 보낼 수 있습니다.
              </p>
              <dl>
                <dt>기능 구현</dt>
                <dd>답변자의 정보, 분석 결과를 담은 API 호출</dd>
                <dd>100% 일치할 경우와 아닌 경우를 나누어 궁합을 표시함</dd>
                <dd>내 기준과 일치하지 않은 답변은 나의 기준과 함께 표시함</dd>
                <dd>
                  주선자에게 알리기 버튼을 클릭하면 의사 전달 페이지 링크 복사됨
                </dd>
                <dd>
                  도착한 답변 삭제 버튼 클릭하면 모달창을 띄워 삭제 의사를 한번
                  더 확인함
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </InViewMotion>
    </li>
  );
}
