import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <h1>Hi this is checkout!</h1>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
