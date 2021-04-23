import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";
import OpacityPic from "./components/Images/OpacityPic";
import Logo from "./components/Home/LoGo2.png";

function App() {
  return (
    <div className="App">
      <Navbar />
     

      <Home />
    </div>
  );
}

export default App;
