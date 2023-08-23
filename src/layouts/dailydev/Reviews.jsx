import React from "react";

function Review01() {
  return (
    <ul>
      <li>
        <strong>
          별도의 디자인 없이 TailwindCSS를 사용하여 페이지 단위로 작업을
          하다보니 중복 코드가 많고 가독성이 떨어집니다.
        </strong>
        <span>Atomic 디자인 패턴을 적용하여 리팩토링을 진행하고 있습니다.</span>
      </li>
      <li>
        <strong>
          TypeSciprt를 도입했음에도 계획된 일정을 지키고자 타입을 더 명확하게
          지정해 주지 못한 부분이 아쉽습니다.
        </strong>
        <span>
          타입 명시성을 높이는 것을 우선적인 목표로 삼고, 리팩토링을 진행하고
          있습니다.
        </span>
      </li>
    </ul>
  );
}

function Review02() {
  return (
    <ul>
      <li>
        <strong>Github Issue를 활용</strong>하여 요구사항, 이슈별 브랜치, 버그
        등을 효율적으로 관리할 수 있었습니다.
      </li>
      <li>
        각 용도에 맞게 main, develop, feature 브랜치를 분리해서 사용하며,{" "}
        <br></br>프로젝트에 맞는 <strong>Git 브랜치 전략에 대해 고민</strong>해
        볼 수 있었고 <strong>Git을 익숙하게 사용</strong>할 수 있게 되었습니다.
      </li>
      <li>
        이전 프로젝트에서는 직접 구현했던 폼 유효성 검사 기능을 React-Hook-Form
        라이브러리로 대체해 보며,<br></br>폼 관리에 대한 이해를 높이고{" "}
        <strong>
          라이브러리 사용에 대한 장점과 단점에 대해 생각해 볼 수 있는 계기
        </strong>
        가 되었습니다.
      </li>
    </ul>
  );
}

const Reviews = {
  Review01,
  Review02,
};

export default Reviews;
