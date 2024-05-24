import React from 'react';
import Collapse from './Collapse';

function App() {
  const text = 'collapse me';

  return (
      <div className="App">
        <Collapse text={text} opened={false} />
      </div>
  );
}

export default App;
