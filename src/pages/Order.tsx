import { usePizza } from "../hooks/usePizza";
import PizzaSizeSelector from "../components/PizzaSizeSelector";
import FlavorSelector from "../components/FlavorSelector";
import CustomizationSelector from "../components/CustomizationSelector";
import OrderSummary from "../components/OrderSummary";

const Order = () => {
  const {
    currentOrder,
    currentStep,
    nextStep,
    previousStep,
    isStepValid,
    addOrder,
    updateCurrentOrder,
    orders,
  } = usePizza();

  return (
    <div>
      <h1>😋 Monte a sua PIZZA 🍕</h1>

      {currentStep === 0 && (
        <PizzaSizeSelector
          onSelectSize={(size) => updateCurrentOrder({ size })}
          selectedSize={currentOrder?.size || ""}
        />
      )}

      {currentStep === 1 && (
        <FlavorSelector
          onSelectFlavor={(flavor) => updateCurrentOrder({ flavor })}
          selectedFlavor={currentOrder?.flavor || ""}
        />
      )}

      {currentStep === 2 && (
        <CustomizationSelector
          onAddCustomization={(customization) =>
            updateCurrentOrder({
              customizations: [
                ...(currentOrder?.customizations || []),
                customization,
              ],
            })
          }
          onRemoveCustomization={(customization) =>
            updateCurrentOrder({
              customizations:
                currentOrder?.customizations.filter(
                  (item) => item !== customization
                ) || [],
            })
          }
          selectedCustomizations={currentOrder?.customizations || []}
        />
      )}

      <div>
        <button onClick={previousStep} disabled={currentStep === 0}>
          Previous
        </button>
        {currentStep < 2 ? (
          <button onClick={nextStep} disabled={!isStepValid()}>
            Next
          </button>
        ) : (
          <button
            onClick={() => currentOrder && addOrder(currentOrder)}
            disabled={!isStepValid()}
          >
            Adicionar Pedido
          </button>
        )}
      </div>

      <h2>🍕 Pedidos ✅</h2>
      {orders.map((order) => (
        <OrderSummary key={order.id} order={order} />
      ))}
    </div>
  );
};

export default Order;
