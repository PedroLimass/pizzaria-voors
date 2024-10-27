import { createContext, useState, ReactNode } from "react";
import { calculatePrice, calculatePreparationTime } from "../utils";
import { PizzaContextType, PizzaOrder, OrderData } from "../types";

export const PizzaContext = createContext<PizzaContextType | undefined>(
  undefined
);

export const PizzaProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<PizzaOrder[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentOrder, setCurrentOrder] = useState<PizzaOrder | null>({
    id: Date.now(),
    size: "",
    flavor: "",
    customizations: [],
    price: 0,
    preparationTime: 0,
  });

  const updateCurrentOrder = (updatedOrder: Partial<PizzaOrder>) => {
    setCurrentOrder((prevOrder) => {
      if (!prevOrder) return null;
      return { ...prevOrder, ...updatedOrder };
    });
  };

  const isStepValid = () => {
    if (!currentOrder) return false;
    switch (currentStep) {
      case 0:
        return currentOrder.size !== "";
      case 1:
        return currentOrder.flavor !== "";
      case 2:
        return true;
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (isStepValid()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const addOrder = (orderData: OrderData) => {
    if (currentOrder && isStepValid()) {
      const newOrder: PizzaOrder = {
        ...currentOrder,
        id: Date.now(),
        price: calculatePrice(orderData),
        preparationTime: calculatePreparationTime(orderData),
      };
      setOrders([...orders, newOrder]);
      setCurrentOrder({
        id: Date.now(),
        size: "",
        flavor: "",
        customizations: [],
        price: 0,
        preparationTime: 0,
      });
      setCurrentStep(0);
    }
  };

  const deleteOrder = (orderId: number) => {
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderId)
    );
  };

  return (
    <PizzaContext.Provider
      value={{
        orders,
        currentOrder,
        currentStep,
        addOrder,
        updateCurrentOrder,
        nextStep,
        previousStep,
        isStepValid,
        deleteOrder,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};
