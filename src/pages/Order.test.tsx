import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Order from "./Order";
import { usePizza } from "../hooks/usePizza";

vi.mock("../hooks/usePizza");

describe("Order Component", () => {
  const mockNextStep = vi.fn();
  const mockAddOrder = vi.fn();
  const mockUpdateCurrentOrder = vi.fn();

  beforeEach(() => {
    // Mocka o hook para o estado inicial
    (usePizza as jest.Mock).mockReturnValue({
      currentOrder: { customizations: [], price: 0 },
      currentStep: 0,
      nextStep: mockNextStep,
      previousStep: vi.fn(),
      isStepValid: vi.fn().mockReturnValue(true),
      addOrder: mockAddOrder,
      updateCurrentOrder: mockUpdateCurrentOrder,
      orders: [],
    });
  });

  it("should render the page title", () => {
    render(<Order />);
    expect(screen.getByText("😋 Bem-vindo à Pizzaria 🍕")).toBeInTheDocument();
  });

  it("should show the option to select size in step 0", () => {
    render(<Order />);
    expect(screen.getByText("Selecione o Tamanho")).toBeInTheDocument();
  });

  it("must call the nextStep function when clicking the 'Next' button", () => {
    render(<Order />);
    const nextButton = screen.getByText("Próximo");
    fireEvent.click(nextButton);
    expect(mockNextStep).toHaveBeenCalled();
  });

  it("You must open the order modal by clicking on the 'Add Order' button", () => {
    (usePizza as unknown as jest.Mock).mockReturnValueOnce({
      currentOrder: { size: "pequena", customizations: [], price: 0 },
      currentStep: 1,
      nextStep: vi.fn(),
      isStepValid: vi.fn().mockReturnValue(true),
      addOrder: mockAddOrder,
      updateCurrentOrder: mockUpdateCurrentOrder,
      orders: [],
    });
    render(<Order />);
    fireEvent.click(screen.getByTestId("next-button"));

    (usePizza as unknown as jest.Mock).mockReturnValueOnce({
      currentOrder: {
        size: "pequena",
        flavor: "calabresa",
        customizations: [],
        price: 0,
      },
      currentStep: 2,
      nextStep: vi.fn(),
      isStepValid: vi.fn().mockReturnValue(true),
      addOrder: mockAddOrder,
      updateCurrentOrder: mockUpdateCurrentOrder,
      orders: [],
    });
    render(<Order />);
    fireEvent.click(screen.getByTestId("next-button"));

    (usePizza as unknown as jest.Mock).mockReturnValueOnce({
      currentOrder: {
        size: "pequena",
        flavor: "calabresa",
        customizations: [],
        price: 0,
      },
      currentStep: 3,
      nextStep: vi.fn(),
      isStepValid: vi.fn().mockReturnValue(true),
      addOrder: mockAddOrder,
      updateCurrentOrder: mockUpdateCurrentOrder,
      orders: [],
    });
    render(<Order />);

    const addOrderButton = screen.getAllByText(/adicionar pedido/i)[0];
    fireEvent.click(addOrderButton);

    expect(mockAddOrder).toHaveBeenCalled();
    expect(screen.getByText("🍕 Detalhes dos Pedidos")).toBeInTheDocument();
  });

  it("must open the modal when clicking on 'View Orders' if there are orders", () => {
    (usePizza as jest.Mock).mockReturnValue({
      ...usePizza(),
      orders: [
        {
          id: 1,
          size: "grande",
          flavor: "calabresa",
          customizations: [],
          price: 30,
        },
      ],
    });

    render(<Order />);
    fireEvent.click(screen.getByText("Ver Pedidos"));

    expect(screen.getByText("🍕 Detalhes dos Pedidos")).toBeInTheDocument();
  });
});
