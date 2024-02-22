import { Provider } from "react-redux";
import store from "./redux/store";
import ProductTemplate from "./components/templates/ProductTemplate/ProductTemplate";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, Slide } from "react-toastify";

function App() {
  return (
    <Provider store={store}>
      <ProductTemplate />
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        hideProgressBar
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        transition={Slide}
        theme={"colored"}
      />
    </Provider>
  );
}

export default App;
