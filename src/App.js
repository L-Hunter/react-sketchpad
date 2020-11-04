import React, { useState } from 'react';
import './App.css';

function App() {

  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setColor] = useState("black");


  const startDrawing = () => {
    setIsDrawing(true);
  } 

  const keepDrawing = (e) => {
    e.preventDefault();
    if (isDrawing) {
      e.target.style.backgroundColor = currentColor;
    }
  }

  const stopDrawing = () => {
    setIsDrawing(false);
  }

  const changeColor = (color) => {
    setColor(color);
  }

  const cells = [];
  for (let x = 0; x < 3990; x++) {
    cells.push(<div className="cell" key={x} onMouseDown={ startDrawing } onMouseMove={ keepDrawing }  onMouseUp={ stopDrawing }></div>)
  }

  const colors = ['white', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black'];
  const controls = [];
  for (let color of colors) {
    controls.push(<button id={color} className={color} key={color} onClick={() => changeColor(color)}>{color}</button>);
  }

  return (
    <div className="App">
      <div className="wrapper">
        <div id="pad">
          <h1>Sketchpad in React</h1>
          <div className="buttons" >{controls}</div>
          <div id="pad">{cells}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
