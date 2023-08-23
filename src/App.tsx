import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Learn from "./pages/learn/Learn";
import Layout from "./layouts/Layout";
import Ending from "./pages/ending/Ending";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />}></Route>
        <Route element={<Layout />}>
          <Route path="/game" element={<Learn />} />
          <Route path="/ending" element={<Ending />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
