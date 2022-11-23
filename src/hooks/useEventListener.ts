import { useEffect } from "react";

type EventListenerHook = (
  event: keyof WindowEventMap,
  listener: EventListenerOrEventListenerObject
) => void;

export const useEventListener: EventListenerHook = (event, listener) => {
  useEffect(() => {
    addEventListener(event, listener);

    return () => removeEventListener(event, listener);
  }, []);
};
