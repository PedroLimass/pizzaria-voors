import React from "react";
import { usePizza } from "../hooks/usePizza";
import { FaRegTrashAlt } from "react-icons/fa";
import { OrderSummaryProps } from "../types";

const OrderSummary: React.FC<OrderSummaryProps> = ({ order }) => {
  const { deleteOrder } = usePizza();
  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4 shadow-md bg-white">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold text-pizzariaRed ">✅ Pedido </h3>
        <button
          onClick={() => deleteOrder(order.id)}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          <FaRegTrashAlt />
        </button>
      </div>
      <p className="mb-1">
        <strong className="text-pizzariaGreen">Tamanho:</strong>{" "}
        <span className="capitalize">{order.size}</span>
      </p>
      <p className="mb-1">
        <strong className="text-pizzariaGreen">Sabor:</strong>{" "}
        <span className="capitalize">{order.flavor}</span>
      </p>
      <p className="mb-1">
        <strong className="text-pizzariaGreen">Personalizações:</strong>{" "}
        <span className="capitalize">
          {order.customizations.length > 0
            ? order.customizations.join(", ")
            : "Nenhuma"}
        </span>
      </p>
      <p className="mb-1">
        <strong className="text-pizzariaGreen">Tempo:</strong>{" "}
        <span className="capitalize">{order.preparationTime}</span> min
      </p>
      <p className="mt-2 font-semibold">
        <strong className="text-pizzariaGreen">Total:</strong> R${" "}
        <span className="capitalize">{order.price.toFixed(2)}</span>
      </p>
    </div>
  );
};

export default OrderSummary;
