import {
  cloneElement,
  forwardRef,
  useId,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import styles from "./Tooltip.module.css";
import { createPortal } from "react-dom";
import { collisionDetection, setTooltipPosition } from "./utils";

export type TooltipPositions = "top" | "bottom" | "left" | "right";

type TooltipProps = {
  children: React.ReactNode;
  trigger: JSX.Element;
  position?: TooltipPositions;
  offset?: number;
  renderMode?: "portal" | "popover";
};

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      trigger,
      children,
      position = "bottom",
      offset = 0,
      renderMode = "popover",
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const popoverRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLElement>(null);
    const id = useId();

    useImperativeHandle(ref, () => popoverRef.current as HTMLDivElement, []);

    const onHover = () => {
      renderMode === "popover" && popoverRef.current?.togglePopover();
      setOpen(!open);
    };

    useLayoutEffect(() => {
      const triggerRect = triggerRef.current?.getBoundingClientRect();
      const popoverRect = popoverRef.current?.getBoundingClientRect();

      if (!triggerRect || !popoverRect || !popoverRef.current) return;

      Object.assign(popoverRef.current.style, {});

      Object.assign(
        popoverRef.current.style,
        setTooltipPosition({
          triggerRect,
          popoverRect,
          position: collisionDetection({ triggerRect, popoverRect, position }),
          offset,
        })
      );
    }, [position, offset]);

    return (
      <>
        {/* @ts-ignore */}
        {cloneElement(trigger, {
          ref: triggerRef,
          onMouseEnter: onHover,
          onMouseLeave: onHover,
          ...(renderMode === "popover" && { popovertarget: id, })
        })}

        {renderMode === "popover" ? (
          <div
            className={styles.tooltipPopover}
            id={id}
            ref={popoverRef}
            role="tooltip"
            /* @ts-ignore */
            popover="manual"
          >
            {children}
          </div>
        ) : (
          createPortal(
            <div id={id} className={styles.tooltipPortal} ref={popoverRef} role="tooltip" data-state={open}>
              {children}
            </div>,
            document.body
          )
        )}
      </>
    );
  }
);
