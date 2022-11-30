import { useState } from "react";
import { Marquee } from "./components/Marquee";
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

const ITEMS: JSX.Element[] = [
  <span>Sprigatito</span>,
  <span>Floragato</span>,
  <span>Meowscarada</span>,
  <span>Fuecoco</span>,
  <span>Crocalor</span>,
  <span>Skeledirge</span>,
  <span>Quaxly</span>,
  <span>Quaxwell</span>,
  <span>Quaquaval</span>,
];

function App() {
  const [selectValue, setSelectValue] = useState(0);

  const displayFormatter = (value?: number) =>
    OPTIONS.find(({ value: option }) => option === value)?.label ?? "";

  return (
    <div>
      <Select
        label="Numbers"
        value={selectValue}
        options={OPTIONS}
        onChange={setSelectValue}
        onClear={() => setSelectValue(0)}
        displayFormatter={displayFormatter}
        isSelected={(value) => value === selectValue}
      />
      <Marquee items={ITEMS} />
    </div>
  );
}

export default App;
