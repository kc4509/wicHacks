import './App.css';
import React from 'react';
import Header from "./Components/header"
import Homepage from "./Components/homepage"
import Tracker from "./Components/tracker"

function App() {
  return (
    <div className="App">
      <Header/>
      <Homepage/>
      <Tracker/>
    </div>
  );
}

export default App;
