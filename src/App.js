import React from 'react';
import './App.css';

function App() {

  const cells = [];
  for (let x = 0; x < 3990; x++) {
    cells.push(<div className="cell" key={x}></div>)
  }

  const colors = ['white', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black']
  const controls = [];
  for (let color of colors) {
    controls.push(<button id={color} className={color} key={color}>{color}</button>)
  }


  return (
    <div className="App" id="pad">
        <h1>Sketchpad in React</h1>
        <div className="buttons">{controls}</div>
        <div id="pad">{cells}</div>
    </div>
  );
}

export default App;
