import { render, RenderOptions } from "@testing-library/react";
import { PropsWithChildren, ReactElement } from "react";

const Providers = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render };
