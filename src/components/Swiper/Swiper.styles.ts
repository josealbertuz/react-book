import { styled } from "@stitches/react";

export const SwiperContainerRoot = styled("div", {
  cursor: "grab",
  height: "100%",
  overflow: "hidden",
});

export const SwipperContent = styled("div", {
  display: "flex",
  height: "100%",
  transition: "transform 500ms ease",

  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "-ms-overflow-style": "none",
});

export const SwipperContentWrapper = styled("div", {
  flexShrink: 0,
  flexGrow: 1,
  height: "100%",
  width: "100%",
  display: 'grid',
  placeItems: 'center'
});
