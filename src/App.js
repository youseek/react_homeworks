import React from 'react';
import Progress from './Progress';

function App() {
    return (
        <div className="App">
            <h1>Progress Bar Example</h1>
            <Progress percentage={40} />
        </div>
    );
}

export default App;
