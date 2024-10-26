import React from "react";

interface PizzaSizeSelectorProps {
  selectedSize: string;
  onSelectSize: (size: string) => void;
}

const PizzaSizeSelector: React.FC<PizzaSizeSelectorProps> = ({
  selectedSize,
  onSelectSize,
}) => {
  const sizes = ["small", "medium", "large"];

  return (
    <div>
      <h2>Selecione o Tamanho</h2>
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onSelectSize(size)}
          style={{
            padding: "10px",
            margin: "5px",
            backgroundColor: selectedSize === size ? "#FFD700" : "#EEE",
          }}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default PizzaSizeSelector;
