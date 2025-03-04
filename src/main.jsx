import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Ensure this file exists
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="relative min-h-screen w-full bg-white flex items-center justify-center">
      {/* Background Grid */}
      <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

      {/* App Component */}
      <div className="relative z-10 sm:m-10">
        <App />
      </div>
    </div>
  </StrictMode>
);
