import React from "react";
import "./App.css";

import Header from "./components/Header";
import Body from "./components/Banner";

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Body />
      <div className='dummy'>Hello</div>
    </div>
  );
}

export default App;
