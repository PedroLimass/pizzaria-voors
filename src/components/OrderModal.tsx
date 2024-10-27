import React from "react";
import OrderSummary from "./OrderSummary";
import { usePizza } from "../hooks/usePizza";
import { OrderModalProps } from "../types";
import { IoCloseOutline } from "react-icons/io5";

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const { orders } = usePizza();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl mx-4 p-6 overflow-y-auto">
        <header className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">🍕 Detalhes dos Pedidos</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-black">
            <IoCloseOutline width={"1rem"} />
          </button>
        </header>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {orders.length > 0 ? (
            orders.map((order) => (
              <div key={order.id} className="relative">
                <OrderSummary order={order} />
              </div>
            ))
          ) : (
            <p className="col-span-full text-center p-12">
              Nenhum pedido foi feito ainda.
            </p>
          )}
        </div>

        <footer className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-pizzariaGreen text-white py-2 px-4 rounded hover:bg-pizzariaRed transition duration-200"
          >
            Fechar
          </button>
        </footer>
      </div>
    </div>
  );
};

export default OrderModal;
