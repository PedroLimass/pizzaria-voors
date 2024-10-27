// Tipagem para o tamanho da pizza
export interface Size {
  id: number;
  name: string;
  price: number;
  preparationTime: number;
}

// Tipagem para o sabor da pizza
export interface Flavor {
  id: number;
  name: string;
  additionalPreparationTime?: number;
}

export interface Customization {
  id: number;
  name: string;
  additionalPrice?: number;
  additionalPreparationTime?: number;
}

// Tipagem para o pedido de uma única pizza
export interface PizzaOrder {
  id: number;
  size: Size;
  flavor: Flavor;
  customizations?: Customization[];
  totalPrice: number;
  totalPreparationTime: number;
}

// Tipagem para um pedido completo (com múltiplas pizzas)
export interface Order {
  id: number;
  pizzas: PizzaOrder[];
  totalOrderPrice: number;
  totalOrderPreparationTime: number;
}