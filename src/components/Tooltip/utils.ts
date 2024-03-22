import { CSSProperties } from "react";
import { TooltipPositions } from "./Tooltip";

type TooltipPositionFnProps = {
  triggerRect: DOMRect;
  popoverRect: DOMRect;
  position: TooltipPositions;
  offset: number;
};

export const setTooltipPosition = ({
  triggerRect,
  popoverRect,
  position,
  offset,
}: TooltipPositionFnProps) => {
  const horizontalAlign = `translateX(calc(-50% + ${triggerRect.width / 2}px))`;
  const verticalAlign = `translateY(calc(-50% + ${triggerRect.height / 2}px))`;

  const positions: Record<TooltipPositions, CSSProperties> = {
    top: {
      top: `${triggerRect.top - popoverRect.height - offset}px`,
      left: `${triggerRect.left}px`,
      transform: horizontalAlign,
    },
    bottom: {
      top: `${triggerRect.bottom + offset}px`,
      left: `${triggerRect.left}px`,
      transform: horizontalAlign,
    },
    left: {
      top: `${triggerRect.top}px`,
      left: `${triggerRect.left - popoverRect.width + offset}px`,
      transform: verticalAlign,
    },
    right: {
      top: `${triggerRect.top}px`,
      left: `${triggerRect.right + offset}px`,
      transform: verticalAlign,
    },
  };

  return positions[position];
};

type CollisionDetectionFnProps = {
  triggerRect: DOMRect;
  popoverRect: DOMRect;
  position: TooltipPositions;
};

export const collisionDetection = ({
  triggerRect,
  popoverRect,
  position,
}: CollisionDetectionFnProps): TooltipPositions => {
  const { innerWidth, innerHeight } = window;

  const collision = {
    top: triggerRect.top - popoverRect.height < 0 ? "bottom" : position,
    bottom:
      triggerRect.bottom + popoverRect.height > innerHeight ? "top" : position,
    left: triggerRect.left - popoverRect.width < 0 ? "right" : position,
    right:
      triggerRect.right + popoverRect.width > innerWidth ? "left" : position,
  };

  return collision[position];
};
