export interface OrderData {
  size: string;
  flavor: string;
  customizations: string[];
}

export const calculatePreparationTime = (orderData: OrderData): number => {
  let baseTime = 0;

  switch (orderData.size) {
    case "small":
      baseTime = 15;
      break;
    case "medium":
      baseTime = 20;
      break;
    case "large":
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
