import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import { TokenContextProvider } from "./Components/Store/TokenContext";
import { Provider} from "react-redux";
import store from "./Components/ReduxStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>

    <App />
  </Provider>
);
