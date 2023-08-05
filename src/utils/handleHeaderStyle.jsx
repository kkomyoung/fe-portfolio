// 스크롤 위치에 따라 해더 스타일을 정해주는 함수
export default function handleHeaderStyle(changePoint, setHeaderStyle) {
  const handleScroll = () => {
    if (window.scrollY >= changePoint) {
      setHeaderStyle("fixed");
    } else {
      setHeaderStyle("absolute");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}
