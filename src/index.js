import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {makeServer} from "./server";
import {ContextProducts} from "./context/ContextProducts";
import {PlaylistProvider} from "./context/PlaylistProvider";
import {LikedProvider} from "./context/LikedProvider";
import {HistoryProvider} from "./context/HistoryProvider";
import {WatchProvider} from "./context/WatchProvider";
import {AuthProvider} from "./context/AuthProvider";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ContextProducts>
          <PlaylistProvider>
            <LikedProvider>
              <HistoryProvider>
                <WatchProvider>
                  <App />
                </WatchProvider>
              </HistoryProvider>
            </LikedProvider>
          </PlaylistProvider>
        </ContextProducts>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
