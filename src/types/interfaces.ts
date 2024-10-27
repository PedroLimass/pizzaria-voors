export interface PizzaOrder {
  id: number;
  size: string;
  flavor: string;
  customizations: string[];
  price: number;
  preparationTime: number;
}

export interface OrderData {
  size: string;
  flavor: string;
  customizations: string[];
}

export interface PizzaContextType {
  orders: PizzaOrder[];
  currentOrder: PizzaOrder | null;
  currentStep: number;
  addOrder: (orderData: OrderData) => void;
  updateCurrentOrder: (updatedOrder: Partial<PizzaOrder>) => void;
  nextStep: () => void;
  previousStep: () => void;
  isStepValid: () => boolean;
  deleteOrder: (orderId: number) => void;
  mockReturnValue?: unknown;
  mockReturnValueOnce?: unknown;
}

export interface CustomizationSelectorProps {
  selectedCustomizations: string[];
  onAddCustomization: (customization: string) => void;
  onRemoveCustomization: (customization: string) => void;
}

export interface OptionSelectorProps {
  title: string;
  options: string[];
  selectedOption?: string;
  selectedOptions?: string[];
  onSelectOption?: (option: string) => void;
  onAddOption?: (option: string) => void;
  onRemoveOption?: (option: string) => void;
  isMultiSelect?: boolean;
}

export interface OrderSummaryProps {
  order: PizzaOrder;
  deleteOrder?: (orderId: number) => void;
}

export interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  orders: PizzaOrder[];
}

export interface OrderSummaryProps {
  order: {
    id: number;
    size: string;
    flavor: string;
    customizations: string[];
    price: number;
    preparationTime: number;
  };
}
