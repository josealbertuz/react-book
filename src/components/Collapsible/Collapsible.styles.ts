import { buttonReset } from "styles/resets";
import { styled } from "@stitches/react";

export const CONTENT_HEIGHT_CSS_VARIABLE = "--content-height";

export const CollapsibleRoot = styled("div", {
  border: "1px solid black",
  padding: "1em",
});

export const Trigger = styled("button", {
  ...buttonReset,
  width: "100%",
});

export const Content = styled("div", {
  overflow: "hidden",
  transition: 'max-height 100ms ease-out',
  variants: {
    animation: {
      open: {
        maxHeight: `var(${CONTENT_HEIGHT_CSS_VARIABLE})`,
      },
      close: {
        maxHeight: 0,
      },
    },
  },
});
