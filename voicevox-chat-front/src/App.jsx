import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {HomePage} from "./components/HomePage";
import {WelcomePage} from "./components/WelcomePage";
import "./style/styles.css";

export function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#F6FFF8', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

