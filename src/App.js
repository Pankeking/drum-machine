import React from 'react';
import './App.css';
import MainComp from './components/MainComp.js';
import { Provider } from 'react-redux';
import store from "./store";

function App() {
  return (
    <Provider store={store}>
        <MainComp />
    </Provider>
  );
}

export default App;