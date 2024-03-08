import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import styles from "./Dialog.module.css";

type DialogProps = {
  children: React.ReactNode;
  asModal?: boolean;
} & (
  | {
      trigger?: never;
      open: boolean;
      onOpenChange?: (open: boolean) => void;
    }
  | {
      trigger: React.ReactElement;
      open?: never;
      onOpenChange?: never;
    }
);

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  (
    { children, asModal, trigger, open, onOpenChange }: DialogProps,
    forwardRef
  ) => {
    const ref = useRef<HTMLDialogElement>(null);

    useImperativeHandle(forwardRef, () => ref.current as HTMLDialogElement);

    useEffect(() => {
      open ? ref.current?.showModal() : ref.current?.close();

    }, [open]);

    const onDialogToggle = () => {
      const isOpen = ref.current?.hasAttribute("open");

      onOpenChange?.(!isOpen);

      !isOpen ? ref.current?.showModal() : ref.current?.close();
    };

    const handleOutsideClick = useCallback(
      (event: MouseEvent) => {
        const nodeName = (event.target as Node)?.nodeName;
        if (nodeName !== "DIALOG" || asModal) return;

        onOpenChange?.(false);
        ref.current?.close();
      },
      [onOpenChange, asModal]
    );

    useEffect(() => {
      document.addEventListener("mousedown", handleOutsideClick);

      return () =>
        document.removeEventListener("mousedown", handleOutsideClick);
    }, [handleOutsideClick]);

    return (
      <>
        {trigger &&
          React.cloneElement(trigger, {
            onClick: onDialogToggle,
          })}
        <dialog className={styles.dialog} ref={ref}>
          <button className={styles.closeButton} onClick={onDialogToggle}>
            X
          </button>
          {children}
        </dialog>
      </>
    );
  }
);

Dialog.displayName = "Dialog";
