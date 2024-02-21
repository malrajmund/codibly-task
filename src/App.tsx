import { Provider } from "react-redux";
import store from "./redux/store";
import ProductTemplate from "./components/templates/ProductTemplate/ProductTemplate";

function App() {
  return (
    <Provider store={store}>
      <ProductTemplate />
    </Provider>
  );
}

export default App;
