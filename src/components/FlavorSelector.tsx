import React from "react";

interface FlavorSelectorProps {
  selectedFlavor: string;
  onSelectFlavor: (flavor: string) => void;
}

const FlavorSelector: React.FC<FlavorSelectorProps> = ({
  selectedFlavor,
  onSelectFlavor,
}) => {
  const flavors = ["calabresa", "marguerita", "portuguesa"];

  return (
    <div>
      <h2>Selecione o Sabor</h2>
      {flavors.map((flavor) => (
        <button
          key={flavor}
          onClick={() => onSelectFlavor(flavor)}
          style={{
            padding: "10px",
            margin: "5px",
            backgroundColor: selectedFlavor === flavor ? "#FFD700" : "#EEE",
          }}
        >
          {flavor}
        </button>
      ))}
    </div>
  );
};

export default FlavorSelector;
