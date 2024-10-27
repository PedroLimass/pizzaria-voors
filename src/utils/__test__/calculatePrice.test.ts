import { describe, it, expect } from "vitest";
import { calculatePrice } from "../calculatePrice";
import { OrderData } from "../../types";

describe("calculatePrice", () => {
  it("should return 20.2 for a small pizza without customizations", () => {
    const orderData: OrderData = { size: "pequena", flavor: "mussarela", customizations: [] };
    expect(calculatePrice(orderData)).toBe(20.2);
  });

  it("should return 30.3 for a medium pizza without customizations", () => {
    const orderData: OrderData = { size: "média", flavor: "calabresa", customizations: [] };
    expect(calculatePrice(orderData)).toBe(30.3);
  });

  it("should return 40.0 for a large pizza without customizations", () => {
    const orderData: OrderData = { size: "grande", flavor: "quatro queijos", customizations: [] };
    expect(calculatePrice(orderData)).toBe(40.0);
  });

  it("must add 3.0 for a pizza with extra bacon", () => {
    const orderData: OrderData = { size: "média", flavor: "mussarela", customizations: ["extra bacon"] };
    expect(calculatePrice(orderData)).toBe(33.3);
  });

  it("deve adicionar 5.0 para uma pizza com borda recheada", () => {
    const orderData: OrderData = { size: "média", flavor: "calabresa", customizations: ["borda recheada"] };
    expect(calculatePrice(orderData)).toBe(35.3);
  });

  it("should add 8.0 for a pizza with stuffed edges and extra bacon", () => {
    const orderData: OrderData = { size: "grande", flavor: "portuguesa", customizations: ["borda recheada", "extra bacon"] };
    expect(calculatePrice(orderData)).toBe(48.0);
  });
});
