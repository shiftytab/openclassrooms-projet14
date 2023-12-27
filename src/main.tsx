import List from '@/pages/List';
import NewElement from '@/pages/NewElement';
import store from '@/store/index';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/new" element={<NewElement />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
