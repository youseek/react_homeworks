import React, { Component } from 'react';
import './App.css';
import Definitions from './Definitions';
import definitions from './data_for_definition_component';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Definitions data={definitions} />
            </div>
        );
    }
}

export default App;
