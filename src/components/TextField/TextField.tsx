import React, { useId } from "react";
import {
  ErrorText,
  Icon,
  Input,
  InputWrapper,
  Label,
  TextFieldRoot,
} from "./TextField.styles";

type TextFieldProps = {
  label: string;
  placeholder?: string;
  error?: boolean;
  errorText?: string;
  search?: boolean
};

export const TextField = ({
  label,
  placeholder,
  error,
  errorText,
  search = false
}: TextFieldProps) => {
  const id = useId();

  return (
    <TextFieldRoot>
      <Label htmlFor={id}>{label}</Label>
      <InputWrapper>
        <Icon>🔍</Icon>
        <Input id={id} placeholder={placeholder} />
      </InputWrapper>
      <ErrorText>{error && errorText}</ErrorText>
    </TextFieldRoot>
  );
};
