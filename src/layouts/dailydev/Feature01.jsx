/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { textList } from "../../styles/style.text";
import ImgFeature01 from "../../assets/images/feature01_daily_dev.png";
import InViewMotion from "../../components/InViewMotion";

export default function Feature01() {
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
          margin-bottom: 3rem;
        }

        dt {
          font-size: 1.5rem;
          font-weight: 500;
          margin-top: 1.4rem;
          text-decoration: underline;
        }

        dd {
          word-break: keep-all;
          font-size: 1.5rem;
          font-weight: 300;
          ${textList}
        }

        dl {
          flex: 1;
          & + dl {
            margin-left: 10rem;
          }
        }

        figure {
          margin-bottom: 4rem;
        }
        img {
          width: 100%;
          display: block;
          margin: 0 auto;
        }
      `}
    >
      <InViewMotion>
        <figure>
          <img src={ImgFeature01} alt="회원가입 & 로그인 화면" />
        </figure>
        <h3>회원가입 & 로그인</h3>
        <p>
          이메일, 닉네임, 비밀번호와 함께 구독하고 싶은 서비스를 선택할 수
          있습니다.
        </p>

        <div
          css={css`
            display: flex;
          `}
        >
          <dl>
            <dt>문제 상황</dt>
            <dd>
              한 페이지에서 처리해야 할 form 항목이 늘어날 때마다 개별적으로
              유효성 검사 조건을 추가하고 에러 처리를 하는데 어려움을 느낌
            </dd>
          </dl>
          <dl>
            <dt>해결 방법</dt>
            <dd>
              React-Hook Form 라이브러리 도입 (React 유효성 검사와 폼 관리를
              단순화)
            </dd>
          </dl>
        </div>
      </InViewMotion>
    </li>
  );
}
