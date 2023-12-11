import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "swiper/css/navigation";
import "swiper/css";
import "./i18n/index";

export default App;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
