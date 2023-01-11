import { useEffect } from "react";
type PreventScrollProps = {
  active?: boolean;
  element?: HTMLElement;
};

export const usePreventScroll = ({
  active = true,
  element = document.body,
}: PreventScrollProps) => {
  useEffect(() => {
    element.style.overflow = active ? "hidden" : "";
  }, [active]);
};
