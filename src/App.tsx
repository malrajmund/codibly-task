import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return <Provider store={store}>App</Provider>;
}

export default App;
