/**
 * Byte Forge Glow - Application Entry Point
 * Copyright (c) 2024 David Baum. All rights reserved.
 */

// react 18 createroot function for rendering app
import { createRoot } from "react-dom/client";
// main app component import
import App from "./App.tsx";
// global css styles import
import "./index.css";

// get root element from html and create react root then render app
createRoot(document.getElementById("root")!).render(<App />);
