import "./App.css";
import { PizzaProvider } from "./context/pizzaContext";
import Order from "./pages/Order";

function App() {
  return (
    <>
      <PizzaProvider>
        <Order/>
      </PizzaProvider>
    </>
  );
}

export default App;
