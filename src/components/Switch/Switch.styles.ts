import { styled } from "@stitches/react";

export const SwitchInputRoot = styled("div", {
  display: "flex",
  alignItems: "center",
});

export const SwitchRoot = styled("div", {
  display: "flex",
  alignItems: "center",
  position: "relative",
});

export const Toggle = styled("span", {
  display: "inline-block",
  position: "relative",
  alignItems: "center",
  borderRadius: "20px",
  backgroundColor: "#eee",
  width: "40px",
  height: "20px",
  padding: "2px",
  cursor: "pointer",
  pointerEvents: 'none',

  "&:after": {
    content: '""',
    position: "absolute",
    width: "20px",
    height: "20px",
    backgroundColor: "#FAFAFA",
    borderRadius: "50%",
    transition: "transform 200ms ease-in-out, color 200ms ease-in-out",
  },
});

export const SwitchInput = styled("input", {
  display: "inline-block",
  width: "100%",
  height: "100%",
  margin: 0,
  position: "absolute",
  opacity: 0,

  [`&:checked + ${Toggle}:after`]: {
    transform: "translateX(100%)",
    backgroundColor: "rgb(48, 120, 198)",
  },

  [`&:checked + ${Toggle}`]: {
    backgroundColor: "rgba(48, 120, 198, 0.2)",
  },
});

export const Label = styled("label", {});
