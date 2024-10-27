import { OrderData } from "../types";

export const calculatePreparationTime = (orderData: OrderData): number => {
  let baseTime = 0;

  switch (orderData.size) {
    case "pequena":
      baseTime = 15;
      break;
    case "média":
      baseTime = 20;
      break;
    case "grande":
      baseTime = 25;
      break;
    default:
      break;
  }

  if (orderData.flavor === "portuguesa") {
    baseTime += 5;
  }

  if (orderData.customizations.includes("borda recheada")) {
    baseTime += 5;
  }

  return baseTime;
};
