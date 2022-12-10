import { PropsWithChildren, useCallback } from "react";
import {
  CollapsibleRoot,
  Content,
  CONTENT_HEIGHT_CSS_VARIABLE,
  Trigger,
} from "./Collapsible.styles";
import { useState } from "react";
import { useCSSVariable } from "hooks/useCSSVariable";

type CollapsibleProps = PropsWithChildren<{
  trigger: JSX.Element;
  defaultOpen?: boolean;
}>;

export const Collapsible = ({
  trigger,
  defaultOpen = false,
  children,
}: CollapsibleProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const [contentHeight, setContentHeight] = useCSSVariable(
    CONTENT_HEIGHT_CSS_VARIABLE,
    0,
    Number
  );

  const animation = open ? "open" : "close";
  const maxHeight = open ? contentHeight : 0;

  const showContent = () => setOpen(!open);

  const getContentHeight = useCallback(
    (element: HTMLDivElement | null) => {
      if (!element) return;

      setContentHeight(element.scrollHeight);
    },
    [open]
  );

  return (
    <CollapsibleRoot tabIndex={0} aria-expanded={open}>
      <Trigger onClick={showContent}>{trigger}</Trigger>
      <Content animation={animation} css={{ maxHeight }} ref={getContentHeight}>
        {children}
      </Content>
    </CollapsibleRoot>
  );
};
