import { useState } from "react";
import { usePizza } from "../hooks/usePizza";
import OptionSelector from "../components/OptionSelector";
import OrderModal from "../components/OrderModal";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Order = () => {
  const [isModalOpen, setModalOpen] = useState(false);

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
    <div className="font-pizzaria bg-neutralBackground min-h-screen text-chalkboard flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4">
        <header className="bg-pizzariaRed text-white text-center py-4 rounded-t-lg">
          <h1 className="text-2xl">😋 Bem-vindo à Pizzaria 🍕</h1>
        </header>

        <div className="mt-4">
          {currentStep === 0 && (
            <OptionSelector
              title="Selecione o Tamanho"
              options={["pequena", "média", "grande"]}
              selectedOption={currentOrder?.size || ""}
              onSelectOption={(size) => updateCurrentOrder({ size })}
              isMultiSelect={false}
            />
          )}

          {currentStep === 1 && (
            <OptionSelector
              title="Selecione o Sabor"
              options={["calabresa", "marguerita", "portuguesa"]}
              selectedOption={currentOrder?.flavor || ""}
              onSelectOption={(flavor) => updateCurrentOrder({ flavor })}
              isMultiSelect={false}
            />
          )}

          {currentStep === 2 && (
            <OptionSelector
              title="Selecione as Customizações"
              options={["extra bacon", "sem cebola", "borda recheada"]}
              selectedOptions={currentOrder?.customizations || []}
              onAddOption={(customization) =>
                updateCurrentOrder({
                  customizations: [
                    ...(currentOrder?.customizations || []),
                    customization,
                  ],
                })
              }
              onRemoveOption={(customization) =>
                updateCurrentOrder({
                  customizations:
                    currentOrder?.customizations.filter(
                      (item) => item !== customization
                    ) || [],
                })
              }
              isMultiSelect={true}
            />
          )}
        </div>

        <div className="flex justify-between space-x-4 mt-4">
          <button
            onClick={previousStep}
            disabled={currentStep === 0}
            className="bg-pizzariaGreen text-white py-2 px-4 rounded hover:bg-pizzariaRed transition duration-200 disabled:opacity-50 w-full"
          >
            Anterior
          </button>
          {currentStep < 2 ? (
            <button
              onClick={nextStep}
              disabled={!isStepValid()}
              className="bg-pizzariaGreen text-white py-2 px-4 rounded hover:bg-pizzariaRed transition duration-200 disabled:opacity-50 w-full"
            >
              Próximo
            </button>
          ) : (
            <button
              onClick={() => {
                if (currentOrder) addOrder(currentOrder);
                setModalOpen(true); // Abre o modal ao adicionar pedido
              }}
              disabled={!isStepValid()}
              className="bg-pizzariaGreen text-white py-2 px-4 rounded hover:bg-pizzariaRed transition duration-200 disabled:opacity-50 w-full"
            >
              Adicionar Pedido
            </button>
          )}
        </div>

        <button
          onClick={() => setModalOpen(true)}
          disabled={orders.length === 0}
          className="bg-pizzariaGreen text-white py-2 px-4 rounded hover:bg-pizzariaRed transition duration-200 disabled:opacity-50 w-full flex mt-4 justify-center items-center gap-1"
        >
          <HiOutlineShoppingCart />
          Ver Pedidos
        </button>

        <OrderModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          orders={orders}
        />
      </div>
    </div>
  );
};

export default Order;
