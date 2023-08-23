/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { textList } from "../../styles/style.text";
import ImgFeature06 from "../../assets/images/feature06_love_document.png";
import InViewMotion from "../../components/InViewMotion";

export default function Feature06() {
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
          width: 70%;
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
            <img src={ImgFeature06} alt="도착한 답변 분석 화면" />
          </figure>
          <div
            css={css`
              flex: 1;
              margin-top: 10rem;
              margin-left: -5rem;
            `}
          >
            <h3>회원 정보 수정</h3>
            <p>
              닉네임과 비밀번호 변경, 회원탈퇴가 가능합니다.
              <br />
              기존에 생성했던 질문지의 카테고리와 이상형 기준을 편집할 수
              있습니다.
            </p>

            <dl>
              <dt>기능 구현</dt>
              <dd>
                내 질문지 편집
                <ul className="subList">
                  <li>
                    내 카테고리 편집 API 호출하여 변경사항이 있을 경우에만
                    저장함
                  </li>
                </ul>
              </dd>
              <dd>
                닉네임
                <ul className="subList">
                  <li>validate 유틸 함수를 사용하여 유효성 체크 후 API 호출</li>
                </ul>
              </dd>
              <dd>
                비밀번호
                <ul className="subList">
                  <li>저장 버튼 클릭 시 현재 비밀번호 검증 진행</li>
                  <li>
                    검증이 완료되면 모달 창이 띄워지고 확인 버튼 클릭 시 API
                    호출{" "}
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
        </div>
      </InViewMotion>
    </li>
  );
}
