import React, { Component } from 'react';
import Table from './Table.js';
import '../App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      numRows: 0,
      numCols: 1,
      currColor: "black",
      selectedColor: "#8A2BE2"
    }
  }
  addRow = () => {
    this.setState({numRows: this.state.numRows+1})
    //console.log(this.state.numRows);

  }
  addCol = () => {
    this.setState({numCols: this.state.numCols+1})

  }

  remCol = () => {
    this.setState({numCols: this.state.numCols-1})
  }

  remRow = () => {
    this.setState({numRows: this.state.numRows-1})
  }

  changeColor = (e) => {
    this.setState({selectedColor:e.target.value});
  }

  setCurrentColor = (value) => {
    console.log("value before: ", this.state.currentColor )
    this.setState({currentColor: this.state.selectedColor })
    console.log("value after: ", this.state.currentColor )
  }
  render() {
    return (
      <div className="App">
      <button className="button1" onClick={this.addRow}>Add Row</button>
      <button  className="button1" onClick={this.addCol}>Add Col</button>
      <button  className="button1" onClick={this.remCol}>Remove Column</button>
      <button  className="button1" onClick={this.remRow}>Remove Row</button>
      <select onChange ={this.changeColor}>
        <option value="#8A2BE2">Purple</option>
        <option value="#00FF00">Limegreen</option>
        <option value="#FFFF00">Yellow</option>
        <option value="#FF1493">Pink</option>
      </select>
      <Table numRows={this.state.numRows} numCols={this.state.numCols} 
       currentColor={this.state.currentColor} selectedColor={this.state.selectedColor} changeColor={this.changeColor} setCurrentColor={this.setCurrentColor}/>
      </div>
    );
  }
}

export default App;







