import React from 'react';
import './App.css';

import Header from "../Header";
import Trainer from "../Trainer";
import Statistics from "../Statistics";

function App() {
  return (
    <div className="container app">
      <Header />
      <div className="trainer-container d-flex p-3 bg-white border border-white rounded">
          <Trainer />
          <Statistics />
      </div>

    </div>
  );
}

export default App;
