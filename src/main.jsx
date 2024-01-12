import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import store from "./Data/Store/Store";
import { Provider } from "react-redux";
import { Index } from "./App/index";
import { registerSW } from "virtual:pwa-register";

registerSW({ immediate: true });

const updateSW = registerSW({
    onOfflineReady() {},
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <Index />
        </Provider>
    </React.StrictMode>
);
