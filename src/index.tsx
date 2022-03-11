import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import NavigationDemoScreen from './Demo/Navigation';
import reportWebVitals from './reportWebVitals';
import UrlNotFoundScreen from './Modules/UrlNotFound/Screens/index';
import TypographyDemoScreen from './Demo/Typography/index';
import CustomIconDemoScreen from './Demo/Iconography/index';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="navigationDemo" element={<NavigationDemoScreen />} />
        <Route path="typographyDemo" element={<TypographyDemoScreen />} />
        <Route path="iconographyDemo" element={<CustomIconDemoScreen/>} />
        <Route path="*" element={<UrlNotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
