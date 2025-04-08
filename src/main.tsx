import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import Counter from "./App";
import { store } from "./Store";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Counter />
  </Provider>
);
