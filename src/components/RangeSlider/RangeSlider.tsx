import { ChangeEvent } from "react";
import {
  ControlWrapper,
  InnerRail,
  Input,
  Rail,
  RangeSliderRoot,
  Thumb,
} from "./RangeSlider.styles";
import { useState } from "react";

type RangeSliderProps = {
  min: number;
  max: number;
  step?: number;
  onChange: ({ min, max }: { min: number; max: number }) => void;
};

export const RangeSlider = ({ min, max, step = 1 }: RangeSliderProps) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const onChangeMin = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value = target.valueAsNumber;

    value > maxValue ? setMinValue(maxValue - step) : setMinValue(value);
  };

  const onChangeMax = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value = target.valueAsNumber;

    value < minValue ? setMaxValue(minValue + step) : setMaxValue(value);
  };

  const minPos = ((minValue - min) / (max - min)) * 100;

  const maxPos = ((maxValue - min) / (max - min)) * 100;

  return (
    <RangeSliderRoot>
      <Input
        type="range"
        min={min}
        max={max}
        step={step}
        value={minValue}
        onChange={onChangeMin}
      />
      <Input
        type="range"
        min={min}
        max={max}
        step={step}
        value={maxValue}
        onChange={onChangeMax}
      />
      <ControlWrapper>
        <Thumb css={{ left: `${minPos}%` }} />
        <Rail>
          <InnerRail css={{ left: `${minPos}%`, right: `${100 - maxPos}%` }} />
        </Rail>
        <Thumb css={{ left: `${maxPos}%` }} />
      </ControlWrapper>
    </RangeSliderRoot>
  );
};
