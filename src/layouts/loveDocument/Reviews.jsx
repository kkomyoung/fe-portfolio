import React from "react";

function Review01() {
  return (
    <ul>
      <li>
        <strong>
          styled-component 사용 시 네이밍 규칙을 정하지 않아 일반 컴포넌트와의
          구분이 어려웠습니다.
        </strong>
        <span>
          모든 스타일 컴포넌트에 Styled 접두사를 붙이는 방식으로 수정할
          계획입니다.
        </span>
      </li>
      <li>
        <strong>
          모달 팝업과 토스트 팝업 컴포넌트를 각 페이지 내부에서 import하여
          사용하여 작업 효율이 떨어졌습니다.
        </strong>
        <span>
          모달 컴포넌트를 App.js에서 import 하고 전역 상태 관리 방식으로
          호출하여 수정할 계획입니다.
        </span>
      </li>
    </ul>
  );
}

function Review02() {
  return (
    <ul>
      <li>
        회원가입 - 로그인 - 유저 정보 변경 - 회원탈퇴 전 과정을 전담 작업하여
        <strong>토큰 기반의 로그인 인증 방식에 대해 경험</strong>해 볼 수
        있었고, <strong>라이브러리 없이 유효성 검사 코드를 작성</strong>해 볼 수
        있었습니다.
      </li>
      <li>
        React-Query를 사용하여 fetch, loading 등의 데이터 처리가 훨씬
        직관적이어서 편리했습니다.
        <br />
        하지만 편안함에 익숙해져 무분별하게 사용하는 것을 지양하고, 함께
        작업하는 팀원에게 해당 라이브러리를 사용해야하는 이유에 대해{" "}
        <strong>근거 있게 설득하는 방법을 고민할 수 있는 계기</strong>가
        되었습니다.
      </li>
    </ul>
  );
}

const Reviews = {
  Review01,
  Review02,
};

export default Reviews;
