import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./service/i18n";
import store from "./redux/store";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>
);
