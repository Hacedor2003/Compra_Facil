import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import store from "./Data/Store/Store";
import { Provider } from "react-redux";
import { Index } from "./App/index";
import { registerSW } from "virtual:pwa-register";
import { Container } from "react-bootstrap";

registerSW({ immediate: true });

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <Container fluid={true}>
                <Index />
            </Container>
        </Provider>
    </React.StrictMode>
);
