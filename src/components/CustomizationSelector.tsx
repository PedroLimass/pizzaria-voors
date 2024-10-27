import React from "react";
import OptionSelector from "./OptionSelector";
import { CustomizationSelectorProps } from "../types";

const CustomizationSelector: React.FC<CustomizationSelectorProps> = ({
  selectedCustomizations,
  onAddCustomization,
  onRemoveCustomization,
}) => {
  return (
    <OptionSelector
      title="Selecione as Customizações"
      options={["extra bacon", "sem cebola", "borda recheada"]}
      selectedOptions={selectedCustomizations}
      onAddOption={onAddCustomization}
      onRemoveOption={onRemoveCustomization}
    />
  );
};

export default CustomizationSelector;
