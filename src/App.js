import React from 'react';
import './App.css';

function App() {

  // this should be changed by changeColor
  let bgColor = 'black';
  let isDrawing = false;

  const startDrawing = () => {
    isDrawing = true;
  } 

  const keepDrawing = (e) => {
    e.preventDefault();
    if (isDrawing) {
      e.target.style.backgroundColor = bgColor;
    }
  }

  const stopDrawing = () => {
    isDrawing = false;
  }

  const changeColor = () => {
    bgColor = 'yellow';
    console.log(`A click! is this doing anything? what's the ${bgColor}`)
  }

  const cells = [];
  for (let x = 0; x < 3990; x++) {
    cells.push(<div className="cell" key={x} onMouseDown={ startDrawing } onMouseMove={ keepDrawing }  onMouseUp={ stopDrawing }></div>)
  }

  const colors = ['white', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black']
  const controls = [];
  for (let color of colors) {
    controls.push(<button id={color} className={color} key={color} onClick={ changeColor }>{color}</button>)
  }

  return (
    <div className="App">
      
      <div id="pad">
        <h1>Sketchpad in React</h1>
        <div className="buttons" >{controls}</div>
        <div id="pad">{cells}</div>
      </div>
    </div>
  );
}

export default App;
