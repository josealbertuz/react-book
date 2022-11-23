import { Select } from "components/Select";
import { render, userEvent, screen, waitFor } from "test/testUtils";
import { SelectOption } from "./Select";

const SIMPLE_OPTIONS: SelectOption<number>[] = [
  { label: "One", value: 1 },
  { label: "Two", value: 2 },
  { label: "Three", value: 3 },
  { label: "Four", value: 4 },
  { label: "Five", value: 5 },
];

type BlendColors = { color1: string; color2: string };

const COMPLEX_OPTIONS: SelectOption<BlendColors>[] = [
  { label: "Orange", value: { color1: "Yellow", color2: "Red" } },
  { label: "Green", value: { color1: "Yellow", color2: "Blue" } },
  { label: "Violet", value: { color1: "Blue", color2: "Red" } },
];

const onClear = vi.fn();
const onChange = vi.fn();
const isSelected = vi.fn();
const label = "Select";

describe("Select (simple options)", () => {
  const displayFormatter = (currentValue?: number) =>
    SIMPLE_OPTIONS.find(({ value }) => value === currentValue)?.label ?? "";

  it("Should render", async () => {
    render(
      <Select
        label={label}
        options={SIMPLE_OPTIONS}
        onChange={onChange}
        onClear={onClear}
        displayFormatter={displayFormatter}
        isSelected={isSelected}
      />
    );

    userEvent.click(screen.getByText(label));

    await waitFor(() => {
      for (const { label } of SIMPLE_OPTIONS) {
        expect(screen.getByText(label)).toBeInTheDocument();
      }
    });
  });

  it("Should change value on select", async () => {
    render(
      <Select
        label={label}
        options={SIMPLE_OPTIONS}
        onChange={onChange}
        onClear={onClear}
        displayFormatter={displayFormatter}
        isSelected={isSelected}
      />
    );

    userEvent.click(screen.getByText(label));

    userEvent.click(await screen.findByText(SIMPLE_OPTIONS[0].label));

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(SIMPLE_OPTIONS[0].value);
    });
  });

  it("should call onClear on press clear button", async () => {
    render(
      <Select
        label={label}
        options={SIMPLE_OPTIONS}
        onChange={onChange}
        onClear={onClear}
        displayFormatter={displayFormatter}
        isSelected={isSelected}
      />
    );

    userEvent.click(screen.getByRole("button", { name: "X" }));

    await waitFor(() => {
      expect(onClear).toHaveBeenCalled();
    });
  });
});

describe("Select (complex options)", () => {
  const displayFormatter = (colors?: BlendColors) => {
    return (
      COMPLEX_OPTIONS.find(
        ({ value }) =>
          value.color1 === colors?.color1 && value.color2 === colors.color2
      )?.label ?? ""
    );
  };

  it("Should render", async () => {
    render(
      <Select
        label={label}
        options={COMPLEX_OPTIONS}
        onChange={onChange}
        onClear={onClear}
        displayFormatter={displayFormatter}
        isSelected={isSelected}
      />
    );

    userEvent.click(screen.getByText(label));

    await waitFor(() => {
      for (const { label } of COMPLEX_OPTIONS) {
        expect(screen.getByText(label)).toBeInTheDocument();
      }
    });
  });

  it("Should change value on select", async () => {
    render(
      <Select
        label={label}
        options={COMPLEX_OPTIONS}
        onChange={onChange}
        onClear={onClear}
        displayFormatter={displayFormatter}
        isSelected={isSelected}
      />
    );

    userEvent.click(screen.getByText(label));

    userEvent.click(await screen.findByText(COMPLEX_OPTIONS[0].label));

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(COMPLEX_OPTIONS[0].value);
    });
  });
});
