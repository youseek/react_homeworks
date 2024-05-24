import React from 'react';
import Slider from './Slider';

function App() {
  const images = [
    require("./images/first.jpg"),
    require("./images/second.jpg"),
    require("./images/third.webp")
  ];

  return (
      <div className="App">
        <Slider images={images} />
      </div>
  );
}

export default App;
