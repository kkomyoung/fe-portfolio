import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function InViewMotion({ children, as }) {
  const Tag = as || "div";
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-80px 0px",
  });

  return (
    <Tag
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)",
      }}
    >
      {children}
    </Tag>
  );
}
