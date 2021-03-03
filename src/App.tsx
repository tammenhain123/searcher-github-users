import React from 'react';

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/header";
import Routes from "./routes";
import store from './store';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Header name="Teste" />
      <Routes />
    </BrowserRouter>
  </Provider>
  );
}

export default App;
