/** @jsxImportSource @emotion/react */
import React, { useRef } from "react";
import { css } from "@emotion/react";
import { InnerArea } from "../../styles/style.layout";
import Button from "../../components/Button";
import { motion, useInView } from "framer-motion";

export default function MainBanner({ data }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -300px 0px",
  });

  const {
    banner,
    title,
    subDesc,
    link: { demo, video },
  } = data[0];

  return (
    <section
      ref={ref}
      css={css`
        background: url(${banner});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 600px;
      `}
    >
      <div
        css={css`
          ${InnerArea}
          height: 500px;
        `}
      >
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 80 }}
          transition={{
            delay: 0.1,
            duration: 0.15,
            ease: "easeIn",
            type: "spring",
            stiffness: 100,
          }}
          css={css`
            font-size: 6rem;
            line-height: 1.4;

            span {
              display: block;
              font-weight: 100;
              font-size: 3.1rem;
            }
          `}
        >
          <span>{subDesc}</span>
          <strong>{title}</strong>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 80 }}
          transition={{
            delay: 0.1,
            duration: 0.15,
            ease: "easeIn",
            type: "spring",
            stiffness: 100,
          }}
          css={css`
            margin-top: 12rem;
          `}
        >
          <Button href={demo} text="체험하기" type="line" />
          <Button href={video} text="데모영상" />
        </motion.div>
      </div>
    </section>
  );
}
