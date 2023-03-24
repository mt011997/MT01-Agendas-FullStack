import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CadastroProvider } from "./contexts/contextCadastro";
import { DashBoardProvider } from "./contexts/contextDashBoard";
import { LoginProvider } from "./contexts/contextLogin";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CadastroProvider>
        <LoginProvider>
          <DashBoardProvider>
            <App />
          </DashBoardProvider>
        </LoginProvider>
      </CadastroProvider>
    </BrowserRouter>
  </React.StrictMode>
);
