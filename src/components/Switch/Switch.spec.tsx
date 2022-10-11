import { render, screen } from "test/testUtils"
import { Switch } from "./Switch";

const label = 'toggle'
const onChange = vi.fn()

describe("Switch", () => {
  it("should be checked", () => {
    render(<Switch checked={true} label={label} onChange={onChange} />)

    expect(screen.getByLabelText(label)).toBeChecked()
  });

  it("should not be checked", () => {
    render(<Switch checked={false} label={label} onChange={onChange} />);

    expect(screen.getByLabelText(label)).not.toBeChecked();
  });

  it('should render label', () => {
    render(<Switch checked={false} label={label} onChange={onChange} />);

    expect(screen.getByText(label)).toBeInTheDocument()
  })
});
