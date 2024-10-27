import { describe, it, expect } from "vitest";
import { calculatePreparationTime } from "../calculatePreparationTime";
import { OrderData } from "../../types";

describe("calculatePreparationTime", () => {
  it("must return 15 minutes for a small pizza without customizations", () => {
    const orderData: OrderData = { size: "pequena", flavor: "mussarela", customizations: [] };
    expect(calculatePreparationTime(orderData)).toBe(15);
  });

  it("should return 20 minutes for a medium pizza without customizations", () => {
    const orderData: OrderData = { size: "média", flavor: "calabresa", customizations: [] };
    expect(calculatePreparationTime(orderData)).toBe(20);
  });

  it("must return 25 minutes for a large pizza without customizations", () => {
    const orderData: OrderData = { size: "grande", flavor: "quatro queijos", customizations: [] };
    expect(calculatePreparationTime(orderData)).toBe(25);
  });

  it("should add 5 minutes for a Portuguese pizza", () => {
    const orderData: OrderData = { size: "média", flavor: "portuguesa", customizations: [] };
    expect(calculatePreparationTime(orderData)).toBe(25);
  });

  it("should add 5 minutes for a pizza with a stuffed edge", () => {
    const orderData: OrderData = { size: "média", flavor: "calabresa", customizations: ["borda recheada"] };
    expect(calculatePreparationTime(orderData)).toBe(25);
  });

  it("you should add 10 minutes for a Portuguese pizza with stuffed edge", () => {
    const orderData: OrderData = { size: "grande", flavor: "portuguesa", customizations: ["borda recheada"] };
    expect(calculatePreparationTime(orderData)).toBe(35);
  });
});
