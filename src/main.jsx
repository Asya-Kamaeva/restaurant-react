import { createRoot } from "react-dom/client";
import { App } from "./components/app/App";
import "./normalize.css";
import "./global.scss";

createRoot(document.getElementById("root")).render(<App />);
