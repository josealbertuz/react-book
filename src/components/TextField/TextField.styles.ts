import { styled } from "@stitches/react";

export const TextFieldRoot = styled("div", {
  maxWidth: "320px",
  width: "100%",
});

export const Label = styled("label", {
  display: "inline-block",
  marginBottom: "4px",
});

export const Input = styled("input", {
  all: 'unset',
  display: 'inline-block',
  width: "100%",
});

export const InputWrapper = styled("div", {
  display: "flex",
  outline: "1px solid black",
  borderRadius: "5px",

  '&:focus-within': {
    outlineColor: 'blue'
  }
});

export const Icon = styled("span", {
    padding: '0 5px'
});


export const ErrorText = styled("span", {
  display: "inline-block",
  minHeight: "14px",
  color: "#DD3D57",
});
