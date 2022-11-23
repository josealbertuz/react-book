import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { useEventListener } from "hooks/useEventListener";
import { Portal } from "../Portal/Portal";
import {
  ClearButton,
  Option,
  OptionsList,
  SelectedValue,
  SelectRoot,
} from "./Select.styles";

export type SelectOption<T> = {
  label: string;
  value: T;
};

type SelectProps<T> = {
  label: string
  value?: T;
  placeholder?: string
  options: SelectOption<T>[];
  onChange: (value: T) => void;
  onClear: () => void;
  displayFormatter: (value?: T) => string;
  isSelected: (value: T) => boolean;
};

export function Select<T>({
  label,
  placeholder,
  value,
  options,
  onChange,
  onClear,
  displayFormatter,
  isSelected,
}: SelectProps<T>) {
  const selectRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<DOMRect>();
  const [isOpen, setIsOpen] = useState(false);


  const getCurrentBoundingClientRect = () => {
    const rect = selectRef.current?.getBoundingClientRect();

    setCoords(rect);
  };

  const onValueChange = (value: T) => {
    onChange(value);
    setIsOpen(false);
  };

  const onEnterPress = (e: KeyboardEvent<HTMLDivElement>) => {
    e.key === "Enter" && setIsOpen(!isOpen);
  };

  useEventListener("resize", getCurrentBoundingClientRect);

  useEffect(() => {
    getCurrentBoundingClientRect();
  }, []);

  return (
    <>
      <span onClick={() => setIsOpen(!isOpen)}>{label}</span>
      <SelectRoot
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={onEnterPress}
        ref={selectRef}
      >
        <SelectedValue>{value ? displayFormatter(value) : placeholder}</SelectedValue>
        <ClearButton onClick={onClear}>X</ClearButton>
      </SelectRoot>
      {isOpen && (
        <Portal wrapperId="select">
          <OptionsList
            css={{
              transform: `translate(${coords?.left}px, ${coords?.bottom}px)`,
              width: coords?.width,
            }}
          >
            {options.map(({ label, value }) => (
              <Option
                key={label}
                selected={isSelected(value)}
                onClick={() => onValueChange(value)}
              >
                {label}
              </Option>
            ))}
          </OptionsList>
        </Portal>
      )}
    </>
  );
}
