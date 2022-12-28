import { CSSProperties, styled } from "@stitches/react";

export const THUMB_CSS_VARIABLE_NAME = "--thumb-height";
export const TRACK_HEIGHT_CSS_VARIABLE_NAME = "--track-height";
export const ACCENT_COLOR_CSS_VARIABLE = "--accent-color";
export const BACKGROUND_COLOR_CSS_VARIABLE = "--background-color";

const thumbStyles: CSSProperties = {
    appearance: 'none',
    pointerEvents: 'all',
    height: `var(${THUMB_CSS_VARIABLE_NAME})`,
    width: `var(${THUMB_CSS_VARIABLE_NAME})`,
    backgroundColor: 'red',
    cursor: 'grab'
}

export const RangeSliderRoot = styled("div", {
  position: "relative",
  [`${THUMB_CSS_VARIABLE_NAME}`]: "16px",
  [`${TRACK_HEIGHT_CSS_VARIABLE_NAME}`]: "6px",
  [`${ACCENT_COLOR_CSS_VARIABLE}`]: "#0275FF",
  [`${BACKGROUND_COLOR_CSS_VARIABLE}`]: "#EFEFEF",
  marginTop: "250px",
});

export const InputWrapper = styled("div", {
  height: `var(${THUMB_CSS_VARIABLE_NAME})`,
  width: '100%',
});

export const Input = styled("input", {
  width: "100%",
  height: `var(${THUMB_CSS_VARIABLE_NAME})`,
  pointerEvents: "none",
  appearance: 'none',
  position : 'absolute',
  zIndex: 3,
  opacity: 0,
  margin: 0,

  "&::-webkit-slider-thumb": thumbStyles,
  "&::-moz-range-thumb": thumbStyles,
});

export const ControlWrapper = styled("div", {
  width: "100%",
  height: `var(${THUMB_CSS_VARIABLE_NAME})`,
  display: 'flex',
  alignItems: 'center'
});

export const Rail = styled("div", {
  position: "absolute",
  backgroundColor: `var(${BACKGROUND_COLOR_CSS_VARIABLE})`,
  height: `var(${TRACK_HEIGHT_CSS_VARIABLE_NAME})`,
  borderRadius: "10px",
  width: '100%'
});

export const InnerRail = styled("div", {
  position: "absolute",
  backgroundColor: `var(${ACCENT_COLOR_CSS_VARIABLE})`,
  borderRadius: "10px",
  height: "100%",
  opacity: 0.5,
});

export const Thumb = styled("div", {
  height: `var(${THUMB_CSS_VARIABLE_NAME})`,
  width: `var(${THUMB_CSS_VARIABLE_NAME})`,
  borderRadius: "50%",
  backgroundColor: `var(${ACCENT_COLOR_CSS_VARIABLE})`,
  position: "absolute",
  left: 0,
  marginLeft: `calc(var(${THUMB_CSS_VARIABLE_NAME}) / -2)`,
  zIndex: 2
});
