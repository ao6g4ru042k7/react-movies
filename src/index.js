import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import store from "./store";
import { renderRoutes } from "react-router-config";
import routers from "./router";
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
    //<React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <CssBaseline />
                {renderRoutes(routers)}
            </HashRouter>
        </Provider>
    //</React.StrictMode>
    ,
    document.getElementById("root")
);
reportWebVitals();
