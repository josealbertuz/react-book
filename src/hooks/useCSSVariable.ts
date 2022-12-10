import { useState, useEffect, useCallback } from "react";

const getPropertyValue = (key: string) => document.documentElement.style.getPropertyValue(key)

const setPropertyValue = (key: string, value: string) => document.documentElement.style.setProperty(key, String(value))

export const useCSSVariable = <T>(
  name: string,
  defaultValue: T,
  transform: (value: string) => T
): [T, (value: T) => void] => {
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    const cssVariableValue = getPropertyValue(name);

    cssVariableValue ? setValue(transform(cssVariableValue)) : setPropertyValue(name, String(defaultValue))
  }, [name]);

  const setCssVariableValue = useCallback(
    (value: T) => {
      setPropertyValue(name, String(value));
      setValue(value);
    },
    [name]
  );

  return [value, setCssVariableValue];
};
