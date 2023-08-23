/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { textList } from "../../styles/style.text";
import ImgFeature05 from "../../assets/images/feature05_love_document.png";
import InViewMotion from "../../components/InViewMotion";

export default function Feature05() {
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
          flex: 1.3;
        }

        img {
          width: 36%;
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
            <img src={ImgFeature05} alt="로그인 화면" />
          </figure>
          <div
            css={css`
              flex: 1;
              margin-top: 10rem;
              margin-left: -16rem;
            `}
          >
            <h3>로그인</h3>
            <p>질문지 생성시 입력한 닉네임과 비밀번호로 로그인을 합니다.</p>
            <dl>
              <dt>기능 구현</dt>
              <dd>
                validateLogin 함수를 만들어 유효성 검사
                <ul className="subList">
                  <li>로그인 API 호출 실패 시 토스트 팝업 오픈</li>
                </ul>
              </dd>
              <dd>로그인 성공시 로그인 Token을 localStorage에 저장</dd>
              <dd>
                사용자가 권한이 없는 페이지에 접근할 경우 localStorage에서
                <br /> token 여부를 확인하여 로그인 페이지로 이동시킴
              </dd>
            </dl>
          </div>
        </div>
      </InViewMotion>
    </li>
  );
}
