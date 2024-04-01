import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="mainContainer">
      <ToastContainer autoClose={2000} position="top-center" />
      <Header />
      <Home />
    </div>
  );
}

export default App;
