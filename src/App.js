import React, { Component } from 'react';
import Card from './Card';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Card title="First Card Title" />
          <Card text="Some quick example text for the second card." />
          <Card title="Third Card Title" text="Some quick example text for the third card." />
        </div>
    );
  }
}

export default App;