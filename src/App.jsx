import { useState } from "react";
import "./App.css";
import Contenido from "./components/Contenido";
import Header from "./components/Header";

function App() {
  return (
    <div className="App" style={{ marginTop: "50px" }}>
      <Header></Header>
      <Contenido></Contenido>
    </div>
  );
}

export default App;
