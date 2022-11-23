import { styled } from "@stitches/react";

export const SelectRoot = styled('div', {
    position: 'relative',
    padding: '1em',
    display: 'flex',
    alignItems: 'center',
    gap: '1em',
    height: '3.5em',
    border: '2px solid gray',
    borderRadius: '10px',
})

export const SelectedValue = styled('span', {
    flex: 1
})

export const ClearButton = styled('button', {
    border: 'none',
    background: 'transparent'
})

export const OptionsList = styled("ul", {
  position: "absolute",
  top: 0,
  left: 0,
  listStyle: "none",
  padding: '0.5em',
  marginTop: "0.5em",
  backgroundColor: "white",
  border: '2px solid gray',
  borderRadius: '10px',
  overflow: 'hidden',
  maxHeight: '20em',
  overflowY: 'auto',
});

export const Option = styled("li", {
  padding: "1em",
  cursor: "pointer",

  "&:not(:last-child)": {
    borderBottom: "1px solid black",
  },

  "&:hover": {
    color: "white",
    backgroundColor: "blue",
    backgroundClip: "padding-box",
  },

  variants: {
    selected: {
      true: {
        color: "white",
        backgroundColor: "blue",
      },
    },
  },
});