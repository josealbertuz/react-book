import "styles/index.css";

import { Marquee } from "components/Marquee";
import { Select } from "components/Select";
import { SelectOption } from "./components/Select/Select";
import { useState } from "react";
import { Collapsible } from "components/Collapsible";
import { RangeSlider } from "./components/RangeSlider";
import { Badge } from "./components/Badge";
import { Drawer } from "./components/Drawer";
import { Swiper } from "./components/Swiper";

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
  const [newMessages, setNewMessages] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  const displayFormatter = (value?: number) =>
    OPTIONS.find(({ value: option }) => option === value)?.label ?? "";

  return (
    <div style={{height: '100%'}}>
      {/* <Select
        label="Numbers"
        value={selectValue}
        options={OPTIONS}
        onChange={setSelectValue}
        onClear={() => setSelectValue(0)}
        displayFormatter={displayFormatter}
        isSelected={(value) => value === selectValue}
      />
      <Marquee items={ITEMS} />
      <Collapsible trigger={<span>Collapsible trigger</span>}>
        <div style={{ border: "1px solid black", height: "500px" }}>
          Collapsible content
        </div>
      </Collapsible>
      <RangeSlider min={0} max={100} onChange={() => {}} />
      <div style={{ padding: "100px" }}>
        <Badge>
          <span>New messages</span>
        </Badge>
        <button onClick={() => setNewMessages(newMessages + 1)}>
          increment
        </button>
      </div> */}

      {/* <Drawer isOpen={openDrawer} onClose={() => {}}>
        <ul>
          <li>element 1</li>
          <li>element 2</li>
          <li>element 3</li>
          <button onClick={() => setOpenDrawer(false)}>close drawer</button>
        </ul>
      </Drawer>
      <button onClick={() => setOpenDrawer(true)}>open drawer</button> */}
      <Swiper />
    </div>
  );
}

export default App;
