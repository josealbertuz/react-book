import { keyframes, styled } from "@stitches/react";

export const scrollAnimation = keyframes({
  from: {
    transform: "translateX(0%)",
  },
  to: {
    transform: "translateX(calc(-100% - var(--gap)))",
  },
});

export const MarqueeContent = styled("ul", {
  display: "flex",
  justifyContent: "space-around",
  flexShrink: 0,
  minWidth: "100%",
  listStyle: "none",
  padding: 0,
  animation: `${scrollAnimation} 10s linear infinite`,
  animationFillMode: "backwards",

  variants: {
    reverse: {
      true: {
        animation: "reverse",
      },
    },
  },
});

export const MarqueeRoot = styled("div", {
  "--gap": "1rem",
  display: "flex",
  gap: "var(--gap)",
  userSelect: "none",
  overflow: "hidden",

  variants: {
    pauseOnHover: {
      true: {
        [`&:hover ${MarqueeContent}`]: {
          animationPlayState: 'paused'
        },
      },
    },
  },
});