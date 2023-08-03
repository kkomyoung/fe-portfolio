/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      css={css`
        background: #212121;
        min-height: 100vh;
        position: relative;
        overflow: hidden;
      `}
    >
      <div
        css={css`
          position: relative;
          z-index: 2;
          margin: 0 auto;
          max-width: 1236px;
          padding: 0 40px;
          min-height: 100vh;
          display: flex;
          align-items: center;
        `}
      >
        <h1
          css={css`
            font-size: 90px;
            font-weight: 700;
            color: #fff;
            & span {
              display: block;
            }
          `}
        >
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.15,
              ease: "easeIn",
              type: "spring",
              stiffness: 70,
            }}
          >
            안녕하세요
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.15,
              ease: "easeIn",
              type: "spring",
              stiffness: 70,
            }}
          >
            프론트엔드 개발자
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.15,
              ease: "easeIn",
              type: "spring",
              stiffness: 70,
            }}
          >
            김영애입니다
          </motion.span>
        </h1>
      </div>
      <div
        css={css`
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform: rotate(-22deg);
        `}
      >
        <motion.div
          css={css`
            position: absolute;
            bottom: 0;
            width: 90vw;
            height: 23vw;
            border-radius: 400px;
            background: #8b5cf6;
          `}
          initial={{ left: "-92vw" }}
          animate={{ left: "-30vw" }}
          transition={{
            delay: 0.7,
            duration: 0.7,
            type: "spring",
            stiffness: 80,
          }}
        />
        <motion.div
          css={css`
            position: absolute;
            left: 65%;
            bottom: 0;
            width: 23vw;
            height: 23vw;
            border-radius: 50%;
            background: #8b5cf6;
          `}
          initial={{ opacity: 0, left: "50%" }}
          animate={{ opacity: 1, left: "65%" }}
          transition={{
            delay: 0.9,
            duration: 0.2,
            type: "spring",
            stiffness: 100,
          }}
        />
      </div>
    </section>
  );
}
