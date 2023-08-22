import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Learn from "./pages/learn/Learn";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/game" element={<Learn />}></Route>
      </Routes>
    </div>
  );
}

export default App;
