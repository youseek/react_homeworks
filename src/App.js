import React from 'react';
import Alert from './Alert';

function App() {
  return (
      <div className="App">
        <h1>Alert</h1>
        <Alert type="warning" text="What is love?" />
        <Alert type="success" text="Operation successful!" />
        <Alert type="danger" text="An error has occurred!" />
      </div>
  );
}

export default App;
