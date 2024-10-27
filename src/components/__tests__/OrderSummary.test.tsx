import { render, screen, fireEvent } from "@testing-library/react";
import { PizzaProvider } from "../../context/pizzaContext";
import { usePizza } from "../../hooks/usePizza";
import OrderSummary from "../OrderSummary";
import { vi } from "vitest";
import { ReactNode } from "react";

vi.mock("../../hooks/usePizza");

describe("OrderSummary Component", () => {
  const mockDeleteOrder = vi.fn();

  beforeEach(() => {
    (usePizza as jest.Mock).mockReturnValue({
      deleteOrder: mockDeleteOrder,
    });
  });

  const mockOrder = {
    id: 1,
    size: "grande",
    flavor: "calabresa",
    customizations: ["extra queijo"],
    price: 30,
    preparationTime: 15,
  };

  const renderWithContext = (ui: ReactNode) => {
    return render(<PizzaProvider>{ui}</PizzaProvider>);
  };

  it("must render the size, flavor and customizations of the order", () => {
    renderWithContext(<OrderSummary order={mockOrder} />);
    expect(screen.getByText(/Tamanho:/i)).toBeInTheDocument();
    expect(screen.getByText("grande")).toBeInTheDocument();
    expect(screen.getByText(/Sabor:/i)).toBeInTheDocument();
    expect(screen.getByText("calabresa")).toBeInTheDocument();
    expect(screen.getByText(/Personalizações:/i)).toBeInTheDocument();
    expect(screen.getByText("extra queijo")).toBeInTheDocument();
  });

  it("must display time and price correctly", () => {
    renderWithContext(<OrderSummary order={mockOrder} />);
    expect(screen.getByText(/Total:/i)).toBeInTheDocument();
    expect(screen.getByText(/30\.00/i)).toBeInTheDocument();
  });

  it("must call deleteOrder when clicking the delete button", () => {
    renderWithContext(
      <OrderSummary order={mockOrder} deleteOrder={mockDeleteOrder} />
    );
    const deleteButton = screen.getByTestId("delete-button");

    fireEvent.click(deleteButton);

    expect(mockDeleteOrder).toHaveBeenCalled();
  });

  it("should display 'None' when there are no customizations", () => {
    const orderWithoutCustomizations = { ...mockOrder, customizations: [] };
    renderWithContext(<OrderSummary order={orderWithoutCustomizations} />);
    expect(screen.getByText(/Personalizações:/i)).toBeInTheDocument();
    expect(screen.getByText("Nenhuma")).toBeInTheDocument();
  });
});
