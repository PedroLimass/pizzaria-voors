import React from "react";

interface OrderSummaryProps {
  order: {
    id: number;
    size: string;
    flavor: string;
    customizations: string[];
    price: number;
    preparationTime: number;
  };
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ order }) => {
  return (
    <div
      style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}
    >
      <h3>Pedido</h3>
      <p>
        <strong>Tamanho:</strong> {order.size}
      </p>
      <p>
        <strong>Sabor:</strong> {order.flavor}
      </p>
      <p>
        <strong>Personalizações:</strong>{" "}
        {order.customizations.join(", ") || "None"}
      </p>
      <p>
        <strong>Tempo:</strong> {order.preparationTime}
      </p>
      <p>
        <strong>Total:</strong> R$ {order.price.toFixed(2)}
      </p>
    </div>
  );
};

export default OrderSummary;
