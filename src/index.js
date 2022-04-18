import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {makeServer} from "./server";
import {ContextProducts} from "./context/ContextProducts";
import {PlaylistProvider} from "./context/CartProvider";
import {LikedProvider} from "./context/LikedProvider";
import {HistoryProvider} from "./context/HistoryProvider";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProducts>
        <PlaylistProvider>
          <LikedProvider>
            <HistoryProvider>
              <App />
            </HistoryProvider>
          </LikedProvider>
        </PlaylistProvider>
      </ContextProducts>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
