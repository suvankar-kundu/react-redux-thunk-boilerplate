import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import configureStore from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
    <Provider store={configureStore()}>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);