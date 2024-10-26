export interface OrderData {
  size: string;
  flavor: string;
  customizations: string[];
}

export const calculatePrice = (orderData: OrderData): number => {
  let basePrice = 0;

  switch (orderData.size) {
    case "small":
      basePrice = 20.2;
      break;
    case "medium":
      basePrice = 30.3;
      break;
    case "large":
      basePrice = 40.0;
      break;
    default:
      break;
  }

  if (orderData.customizations.includes("extra bacon")) {
    basePrice += 3.0;
  }
  if (orderData.customizations.includes("borda recheada")) {
    basePrice += 5.0;
  }

  return basePrice;
};
