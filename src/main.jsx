import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { app } from './firebase';
import { getAnalytics } from 'firebase/analytics';

export const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
