/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { textList } from "../../styles/style.text";
import ImgFeature03 from "../../assets/images/feature03_daily_dev.png";
import ImgFeature04 from "../../assets/images/feature04_daily_dev.png";
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

        & > figure {
          flex: 1;

          img {
            width: 100%;
            display: block;
            margin: 0 auto;
          }
        }
      `}
    >
      <InViewMotion>
        <div
          css={css`
            display: flex;
            position: relative;
          `}
        >
          <figure>
            <img src={ImgFeature03} alt="메인 컨텐츠" />
          </figure>
          <div
            css={css`
              flex: 1.5;
              margin-left: 6rem;
            `}
          >
            <div>
              <h3>메인 컨텐츠</h3>
              <p>
                데일리데브의 모든 컨텐츠를 볼 수 있고, 탭 메뉴를 이용해 기업별로
                글을 분류하여 볼 수 있습니다.
              </p>
              <dl>
                <dt>기능 구현</dt>
                <dd>
                  초기에 모든 컨텐츠 데이터를 불러온 뒤, 클라이언트 단에서
                  가공하는 방식을 사용하여 페이지 전환을 빠르게 하고 사용성을
                  높임
                </dd>
              </dl>
              <dl>
                <dt>문제 상황</dt>
                <dd>
                  한번에 볼 수 있는 데이터 수를 제한하여 페이지네이션 UI로
                  구현했지만, 페이지 인덱스가 늘어나 작은 디바이스에서 화면이
                  틀어지는 문제가 발생함
                </dd>
              </dl>
              <dl>
                <dt>해결 방법</dt>
                <dd>
                  페이지네이션을 더 보기 버튼으로 변경하여 컨텐츠를 볼 수 있도록
                  함
                </dd>
              </dl>
            </div>
            <div
              css={css`
                position: absolute;
                right: 0;
                bottom: 10rem;
                text-align: center;
                width: 50%;

                h3 {
                  display: inline-block;
                  margin-bottom: 2rem;
                }

                figure {
                  img {
                    width: 100%;
                    display: block;
                  }
                }
              `}
            >
              <h3>📮 매일 10시 뉴스레터 발송</h3>
              <figure>
                <img src={ImgFeature04} alt="뉴스레터" />
              </figure>
            </div>
          </div>
        </div>
      </InViewMotion>
    </li>
  );
}
