import { styled } from "@stitches/react";

const TRANSITION_DURATION_CSS_VARIABLE = "--drawer-transition-duration";

export const DrawerRoot = styled("div", {
  [`${TRANSITION_DURATION_CSS_VARIABLE}`]: "300ms",
});

export const DrawerContent = styled("div", {
  position: "fixed",
  backgroundColor: "white",
  maxWidth: "450px",
  height: "100%",
  transition: `transform var(${TRANSITION_DURATION_CSS_VARIABLE}) ease`,
  top: 0,
  left: 0,
  transform: 'translateX(-100%)',

  variants: {
    isTransitioning: {
      true: {
        transform: "translateX(0%)",
      }
    },
    open: {
      false: {
        transform: "translateX(-100%)",
      }
    },
  },
});

export const Backdrop = styled("div", {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "gray",
  opacity: 0,
  visibility: "hidden",
  width: "100%",
  height: "100%",
  transition: `opacity var(${TRANSITION_DURATION_CSS_VARIABLE}) ease, 
  visibility var(${TRANSITION_DURATION_CSS_VARIABLE}) ease`,
  pointerEvents: "none",

  variants: {
    isTransitioning: {
      true: {
        opacity: 0.5,
        visibility: 'visible'
      }
    },
    show: {
      false: {
        opacity: 0,
        visibility: 'hidden'
      }
    },
  }
});
