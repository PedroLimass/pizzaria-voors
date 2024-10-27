import React from "react";
import { OptionSelectorProps } from "../types";

const OptionSelector: React.FC<OptionSelectorProps> = ({
  title,
  options,
  selectedOption,
  selectedOptions = [],
  onSelectOption,
  onAddOption,
  onRemoveOption,
  isMultiSelect = false,
}) => {
  const handleToggleOption = (option: string) => {
    if (isMultiSelect) {
      if (selectedOptions.includes(option)) {
        onRemoveOption?.(option);
      } else {
        onAddOption?.(option);
      }
    } else {
      onSelectOption?.(option);
    }
  };

  return (
    <div className="text-center mb-6">
      <h2 className="text-xl font-bold text-pizzariaRed mb-4">{title}</h2>
      <div className="flex justify-center space-x-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleToggleOption(option)}
            className={`px-4 py-2 rounded-lg text-capitalize flex-1 capitalize transition-colors duration-200 ${
              (
                isMultiSelect
                  ? selectedOptions.includes(option)
                  : selectedOption === option
              )
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OptionSelector;
