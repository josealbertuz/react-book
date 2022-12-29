import { styled } from "@stitches/react";

export const BadgeRoot = styled("div", {
  position: "relative",
  width: "fit-content",
});

export const Content = styled("span", {
  position: "absolute",
  color: 'white',
  transform: 'translate(50%, -50%)',
  top: 0,
  right: 0,
  variants: {
    invisible: {
      true: {
        opacity: 0,
      },
    },
    showMax: {
      true: {
        "&::after": {
          content: '"+"',
        },
      },
    },
    variant: {
      dot: {
        width: "8px",
        height: "8px",
        borderRadius: "10px",
        backgroundColor: "#4156F7",
      },
      counter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 6px',
        minWidth: '20px',
        height: '20px',
        borderRadius: "10px",
        backgroundColor: "#4156F7",
      },
      custom: {
        
      }
    },
  }
});