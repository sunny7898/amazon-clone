import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="checkout" element={<h1>This is checkout page!</h1>} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
