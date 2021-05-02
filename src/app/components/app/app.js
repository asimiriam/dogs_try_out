import React from 'react';
import Header from '../header';
import Dogs from '../dogs';
import './app.scss';

function App() {
  return (
    <React.Fragment>
      <Header className="app-header" />
      <Dogs />
    </React.Fragment>
  );
}

export default App;
