/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { textList } from "../../styles/style.text";
import ImgFeature02 from "../../assets/images/feature02_love_document.png";
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
          flex: 1.4;
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
            display: flex;
          `}
        >
          <figure>
            <img src={ImgFeature02} alt="질문지 링크 공유 화면" />
          </figure>
          <div
            css={css`
              flex: 1;
              margin-top: 5rem;
              margin-left: 3rem;
            `}
          >
            <div>
              <h3>질문지 링크 공유</h3>
              <p>생성된 질문지 링크를 상대방에게 공유할 수 있습니다.</p>
              <dl>
                <dt>기능 구현</dt>
                <dd>링크 복사 : 클립보드 복사가 완료되면 토스트 팝업 오픈</dd>
                <dd>
                  카톡 공유
                  <ul className="subList">
                    <li>카카오 링크 API 사용</li>
                    <li>
                      카톡 공유 버튼 컴포넌트를 만들고 메타데이터를 설정하여
                      구현
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
            <div
              css={css`
                margin-top: 10rem;
              `}
            >
              <h3>내 이상형 기준 입력</h3>
              <p>
                생성된 질문지에 대한 기준 답변을 입력할 수 있습니다.
                <br />
                입력한 값은 도착한 답변 분석에 사용됩니다.
              </p>
              <dl>
                <dt>기능 구현</dt>
                <dd>내 질문 카테고리, 내 기준 작성 API 호출</dd>
                <dd>input 타입을 5가지로 구분하여 컴포넌트 생성</dd>
                <dd>
                  컴포넌트 props 데이터 타입에 따라 복수, 단수 선택 여부 결정
                </dd>
                <dd>답변하지 않은 기준이 있을 경우 토스트 팝업 오픈</dd>
              </dl>
            </div>
          </div>
        </div>
      </InViewMotion>
    </li>
  );
}
