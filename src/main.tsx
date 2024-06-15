import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';


import React from "react";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </MantineProvider>
);
