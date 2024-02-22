import { Provider } from "react-redux";
import store from "./redux/store";
import ProductTemplate from "./components/templates/ProductTemplate/ProductTemplate";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <Provider store={store}>
      <ProductTemplate />
    </Provider>
  );
}

export default App;
