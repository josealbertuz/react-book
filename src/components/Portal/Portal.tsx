import { PropsWithChildren, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

type PortalProps = PropsWithChildren<{
  wrapperId: string;
}>;


const createElement = (
  id: string,
) => {
  const element = document.createElement("div");
  element.setAttribute("id", id);
  document.body.append(element);
  return element;
};

const elementExists = (id: string) => document.getElementById(id);

const removeElement = (id: string) => {
  document.getElementById(id)?.remove();
};

export const Portal = ({ children, wrapperId }: PortalProps) => {
  const [wrapper, setWrapper] = useState<HTMLDivElement>()

  useLayoutEffect(() => {
    if (elementExists(wrapperId)) return;

    const element = createElement(wrapperId);

    setWrapper(element)

    return () => removeElement(wrapperId)
  }, [wrapperId]);

  return wrapper ? createPortal(children, wrapper) : null;
};
