import React from "react";
import App from "./App.jsx";
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from "./providers/UserContext/UserContext.js";
import { ContactProvider } from "./providers/UserContext/ContactContext.tsx/ContactContext.js";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ContactProvider>
          <App />
        </ContactProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);