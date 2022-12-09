import React from "react";
import ReactDOM from "react-dom/client";

import AppRoutes from "./routes";
import { UserProvider } from "./context/userData";
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  </React.StrictMode>
);
