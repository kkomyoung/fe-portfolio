/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { textList } from "../../styles/style.text";
import ImgFeature02 from "../../assets/images/feature02_daily_dev.png";
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
          margin-bottom: 3rem;
        }

        dt {
          font-size: 1.5rem;
          font-weight: 500;
          margin-top: 1.4rem;
          text-decoration: underline;
        }

        dl {
          & + dl {
            margin-top: 2rem;
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
            @media (min-width: 800px) {
              display: flex;
            }
          `}
        >
          <figure>
            <img src={ImgFeature02} alt="마이페이지 화면" />
          </figure>
          <div
            css={css`
              flex: 1;
              margin-left: 3rem;
            `}
          >
            <div>
              <h3>마이페이지</h3>
              <p>
                회원 정보를 확인 할 수 있고 로그아웃과 회원탈퇴가 가능합니다.
              </p>
              <dl>
                <dt>기능 구현</dt>
                <dd>
                  회원정보를 담은 API를 호출하여 데이터를 Recoil로 저장하여
                  보여줌
                </dd>
                <dd>
                  localStorage에 저장된 token 정보를 삭제하여 로그아웃 처리
                </dd>
                <dd>회원 탈퇴 API 호출</dd>
              </dl>
              <dl>
                <dt>문제 상황</dt>
                <dd>Recoil로 저장한 회원정보가 페이지 새로고침 시 초기화 됨</dd>
              </dl>
              <dl>
                <dt>해결 방법</dt>
                <dd>
                  Recoil-persist를 설치하여 데이터가 localStorage에 저장되도록
                  함
                </dd>
              </dl>
            </div>
            <div
              css={css`
                margin-top: 5rem;
              `}
            >
              <h3>회원 정보 수정</h3>
              <p>
                닉네임, 비밀번호, 구독 서비스 변경과 구독 취소가 가능합니다.
              </p>
              <dl>
                <dt>기능 구현</dt>
                <dd>
                  수정 항목별로 각 컴포넌트를 생성하고 편집 상태에 따라 useState
                  변수를 전달하여 편집 가능한 컴포넌트 상태로 전환
                </dd>
                <dd>
                  비밀번호 수정 버튼 클릭 시, 현재 비밀번호를 입력할 수 있는
                  모달을 띄우고 API 호출을 통해 검증이 완료되면 편집 가능한
                  상태로 전환
                </dd>
              </dl>
              <dl>
                <dt>문제 상황</dt>
                <dd>
                  편집 항목이 각각의 컴포넌트로 모두 분리되어 있어 모달을
                  오픈하기 위해 전달해야 하는 prop 데이터 수가 증가함
                </dd>
              </dl>
              <dl>
                <dt>해결 방법</dt>
                <dd>
                  모달 컴포넌트를 App.tsx에 import 하고 Recoil로 모달에
                  전달해야하는 데이터를 관리하는 방식으로 수정함
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </InViewMotion>
    </li>
  );
}
