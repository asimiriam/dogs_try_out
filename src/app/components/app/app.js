import React from 'react';
import Header from '../header';
import Dogs from '../dogs';
import './app.scss';

function App() {
  return (
    <div className="app">
      <Header className="app-header" />
      <div id="dog-card">
        <Dogs />
      </div>
    </div>
  );
}

export default App;
