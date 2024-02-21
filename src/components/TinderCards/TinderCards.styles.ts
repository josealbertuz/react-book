import { styled } from "@stitches/react";

export const TinderCardsRoot = styled("div", {
  position: "relative",
  width: "212px",
  height: "312px",
});

export const TinderCard = styled("article", {
  position: "absolute",
  display: "flex",
  alignItems: "flex-end",
  height: "100%",
  width: "100%",
  borderRadius: "12px",
  color: "white",
  padding: "12px",

  variants: {
    decision: {
      left: {
        transform: "translateX(-150%) rotate(-30deg)",
      },
      right: {
        transform: "translateX(150%) rotate(30deg)",
      },
      reset: {
        transform: "translateX(0) rotate(0)",
      },
      "": {
      }
    },
  }
});
