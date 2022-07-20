import "./App.css";
import React, {useEffect} from "react";
import Navbar from "./componentes/navbar";
import Api from "./api";
function App() {
  return (
    
    <div>
      <Navbar/>
      <Api/>
      <div className="App"></div>
    </div>
  );
}

export default App;
