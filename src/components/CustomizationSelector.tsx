import React from "react";

interface CustomizationSelectorProps {
  selectedCustomizations: string[];
  onAddCustomization: (customization: string) => void;
  onRemoveCustomization: (customization: string) => void;
}

const CustomizationSelector: React.FC<CustomizationSelectorProps> = ({
  selectedCustomizations,
  onAddCustomization,
  onRemoveCustomization,
}) => {
  const customizations = ["extra bacon", "sem cebola", "borda recheada"];

  const handleToggleCustomization = (customization: string) => {
    if (selectedCustomizations.includes(customization)) {
      onRemoveCustomization(customization);
    } else {
      onAddCustomization(customization);
    }
  };

  return (
    <div>
      {customizations.map((customization) => (
        <button
          key={customization}
          onClick={() => handleToggleCustomization(customization)}
          style={{
            padding: "10px",
            margin: "5px",
            backgroundColor: selectedCustomizations.includes(customization)
              ? "#FFD700"
              : "#EEE",
            color: "#000",
          }}
        >
          {customization}
        </button>
      ))}
    </div>
  );
};

export default CustomizationSelector;
