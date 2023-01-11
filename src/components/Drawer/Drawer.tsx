import { Portal } from "components/Portal";
import { Backdrop, DrawerContent, DrawerRoot } from "./Drawer.styles";
import { usePreventScroll } from "hooks/userPreventScroll";
import { useMountTransition } from "hooks/useMountTransition";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  position?: "left" | "right" | "top" | "bottom";
  children: JSX.Element;
};

export const Drawer = ({
  isOpen,
  onClose,
  position = "left",
  children,
}: DrawerProps) => {
  usePreventScroll({ active: isOpen });

  const isTransitioning = useMountTransition({
    isMount: isOpen,
    delay: 300,
  });

  return (
    <Portal wrapperId="drawer">
      {(isTransitioning || isOpen) && (
        <DrawerRoot aria-hidden={isOpen}>
          <Backdrop show={isOpen} isTransitioning={isTransitioning} />
          <DrawerContent
            role="dialog"
            open={isOpen}
            isTransitioning={isTransitioning}
          >
            {children}
          </DrawerContent>
        </DrawerRoot>
      )}
    </Portal>
  );
};
