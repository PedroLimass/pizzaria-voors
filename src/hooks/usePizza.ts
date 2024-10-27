import { useContext } from "react";
import { PizzaContext } from "../context/pizzaContext"

export const usePizza = () => {
  const context = useContext(PizzaContext);

  if (!context) {
    throw new Error("usePizza must be used within a PizzaProvider");
  }

  return context;
};
