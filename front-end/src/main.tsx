import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { SignUpProvider } from "./contexts/contextSignUp";
import { DashBoardProvider } from "./contexts/contextDashBoard";
import { LoginProvider } from "./contexts/contextLogin";
import "./index.css";
import { ModalProvider } from "./contexts/contextModalEditClient";
import { ModalCreateContactsProvider } from "./contexts/contextModalCreateContacts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <SignUpProvider>
        <LoginProvider>
          <DashBoardProvider>
            <ModalProvider>
              <ModalCreateContactsProvider>
                <App />
              </ModalCreateContactsProvider>
            </ModalProvider>
          </DashBoardProvider>
        </LoginProvider>
      </SignUpProvider>
    </BrowserRouter>
  </React.StrictMode>
);
