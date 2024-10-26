import { createContext, useState, ReactNode } from "react";
import { calculatePrice, calculatePreparationTime } from "../utils";
import { OrderData } from "../utils/calculatePreparationTime";

interface PizzaOrder {
  id: number;
  size: string;
  flavor: string;
  customizations: string[];
  price: number;
  preparationTime: number;
}

interface PizzaContextType {
  orders: PizzaOrder[];
  currentOrder: PizzaOrder | null;
  currentStep: number;
  addOrder: (orderData: OrderData) => void;
  updateCurrentOrder: (updatedOrder: Partial<PizzaOrder>) => void;
  nextStep: () => void;
  previousStep: () => void;
  isStepValid: () => boolean;
}

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
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};
