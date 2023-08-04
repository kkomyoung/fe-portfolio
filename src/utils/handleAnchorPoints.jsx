import React from "react";

export default function handleAnchorPoints(sectionArray) {
  const anchorPoints = sectionArray.map((section) => {
    return section.current.getBoundingClientRect().top + window.scrollY;
  });

  return anchorPoints;
}
