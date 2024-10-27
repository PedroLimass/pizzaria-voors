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
}

export interface CustomizationSelectorProps {
  selectedCustomizations: string[];
  onAddCustomization: (customization: string) => void;
  onRemoveCustomization: (customization: string) => void;
}

export interface OptionSelectorProps {
  title: string;
  options: string[];
  selectedOption?: string; // Para seleção única
  selectedOptions?: string[]; // Para seleção múltipla
  onSelectOption?: (option: string) => void; // Callback para seleção única
  onAddOption?: (option: string) => void; // Callback para adicionar (seleção múltipla)
  onRemoveOption?: (option: string) => void; // Callback para remover (seleção múltipla)
  isMultiSelect?: boolean; // Flag para ativar seleção múltipla
}

export interface OrderSummaryProps {
  order: PizzaOrder;
}

export interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  orders: PizzaOrder[];
}