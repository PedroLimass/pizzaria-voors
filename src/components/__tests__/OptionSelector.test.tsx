import { render, screen, fireEvent } from "@testing-library/react";
import OptionSelector from "../OptionSelector";
import { vi } from "vitest";

describe("OptionSelector Component", () => {
  const title = "Select Your Options";
  const options = ["Option 1", "Option 2", "Option 3"];
  const onSelectOption = vi.fn();
  const onAddOption = vi.fn();
  const onRemoveOption = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders with the title and options", () => {
    render(
      <OptionSelector
        title={title}
        options={options}
        selectedOption=""
        onSelectOption={onSelectOption}
      />
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it("handles single select correctly", () => {
    render(
      <OptionSelector
        title={title}
        options={options}
        selectedOption="Option 1"
        onSelectOption={onSelectOption}
      />
    );

    const option1Button = screen.getByText("Option 1");
    fireEvent.click(option1Button);

    expect(onSelectOption).toHaveBeenCalledWith("Option 1");
  });

  it("applies correct styling for selected single option", () => {
    render(
      <OptionSelector
        title={title}
        options={options}
        selectedOption="Option 1"
        onSelectOption={onSelectOption}
      />
    );

    const option1Button = screen.getByText("Option 1");
    expect(option1Button).toHaveClass("bg-yellow-500 text-white");

    const option2Button = screen.getByText("Option 2");
    expect(option2Button).toHaveClass("bg-gray-200 text-black");
  });

  it("handles multi-select correctly", () => {
    render(
      <OptionSelector
        title={title}
        options={options}
        selectedOptions={["Option 1"]}
        onAddOption={onAddOption}
        onRemoveOption={onRemoveOption}
        isMultiSelect={true}
      />
    );

    const option1Button = screen.getByText("Option 1");
    fireEvent.click(option1Button);

    expect(onRemoveOption).toHaveBeenCalledWith("Option 1");

    const option2Button = screen.getByText("Option 2");
    fireEvent.click(option2Button);

    expect(onAddOption).toHaveBeenCalledWith("Option 2");
  });

  it("applies correct styling for selected multi-select options", () => {
    render(
      <OptionSelector
        title={title}
        options={options}
        selectedOptions={["Option 1", "Option 2"]}
        onAddOption={onAddOption}
        onRemoveOption={onRemoveOption}
        isMultiSelect={true}
      />
    );

    const option1Button = screen.getByText("Option 1");
    expect(option1Button).toHaveClass("bg-yellow-500 text-white");

    const option2Button = screen.getByText("Option 2");
    expect(option2Button).toHaveClass("bg-yellow-500 text-white");

    const option3Button = screen.getByText("Option 3");
    expect(option3Button).toHaveClass("bg-gray-200 text-black");
  });

  it("does not trigger onSelectOption in multi-select mode", () => {
    render(
      <OptionSelector
        title={title}
        options={options}
        selectedOptions={["Option 1"]}
        onAddOption={onAddOption}
        onRemoveOption={onRemoveOption}
        onSelectOption={onSelectOption}
        isMultiSelect={true}
      />
    );

    const option2Button = screen.getByText("Option 2");
    fireEvent.click(option2Button);

    expect(onSelectOption).not.toHaveBeenCalled();
    expect(onAddOption).toHaveBeenCalledWith("Option 2");
  });
});
