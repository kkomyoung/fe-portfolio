/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { textList } from "../../styles/style.text";
import ImgFeature01 from "../../assets/images/feature01_love_document.png";
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
          margin-bottom: 6rem;
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
            <img src={ImgFeature01} alt="질문지 생성 화면" />
          </figure>
          <div
            css={css`
              flex: 1;
              margin-top: 6rem;
              margin-left: 3rem;
            `}
          >
            <div>
              <h3>질문지 생성</h3>
              <p>
                상대방에게 궁금한 이상형 카테고리를 선택하고 아이디와 비밀번호를
                입력하여 질문지를 생성할 수 있습니다.
              </p>
              <dl>
                <dt>기능 구현</dt>
                <dd>질문 카테고리 API 호출하여 input checkbox 구현</dd>
                <dd>
                  회원가입 폼 유효성 검사
                  <ul className="subList">
                    <li>
                      닉네임 : 중복체크, 공백과 특수문자를 제외한 1~10자 이내
                      문자열 허용
                    </li>
                    <li>비밀번호 : 공백을 제외한 4~20자 이내 문자열 허용</li>
                    <li>조건을 만족하지 못할 경우 에러 메세지 출력</li>
                  </ul>
                </dd>
                <dd>회원가입 성공시 로그인 Token을 localStorage에 저장</dd>
              </dl>
              <dl>
                <dt>문제 상황</dt>
                <dd>
                  코드의 가독성이 떨어짐 : 여러 페이지에서 닉네임, 비밀번호의
                  유효성 검사 코드를 별도로 작성하여 컴포넌트 내의 코드가
                  중복되어 작성됨
                </dd>
              </dl>
              <dl>
                <dt>해결 방법</dt>
                <dd>
                  utils/validate.jsx 파일을 만들어 벨리데이션 체크를 할 수 있는
                  공통 유틸 함수를 만들고 재사용함
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </InViewMotion>
    </li>
  );
}
