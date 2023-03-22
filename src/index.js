import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import Routers from "./routes/Routers"
import { HelmetProvider } from "react-helmet-async"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)