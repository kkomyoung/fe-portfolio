// globalMenu 클릭 시 스크롤 이동할 위치 구하는 함수
export default function getAnchorPoints(sectionArray) {
  const anchorPoints = sectionArray.map((section) => {
    return section.current.getBoundingClientRect().top + window.scrollY;
  });

  return anchorPoints;
}
