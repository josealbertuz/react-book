import { useState } from "react";
import { Select } from "./components/Select";
import { SelectOption } from "./components/Select/Select";
import "./index.css";

const OPTIONS: SelectOption<number>[] = [
  { label: "One", value: 1 },
  { label: "Two", value: 2 },
  { label: "Three", value: 3 },
  { label: "Four", value: 4 },
  { label: "Five", value: 5 },
  { label: "Six", value: 6 },
  { label: "Seven", value: 7 },
  { label: "Eight", value: 8 },
  { label: "Nine", value: 9 },
  { label: "Ten", value: 10 },
];

function App() {
  const [selectValue, setSelectValue] = useState(0);

  const displayFormatter = (value?: number) =>
    OPTIONS.find(({ value: option }) => option === value)?.label ?? "";

  return (
    <Select
      label="Numbers"
      value={selectValue}
      options={OPTIONS}
      onChange={setSelectValue}
      onClear={() => setSelectValue(0)}
      displayFormatter={displayFormatter}
      isSelected={(value) => value === selectValue}
    />
  );
}

export default App;
