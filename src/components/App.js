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
      selectedColor: "#f0e3ff"
    }
  }
  addRow = () => {
    this.setState({numRows: this.state.numRows+1})
    //console.log(this.state.numRows);

  }
  addCol = () => {
    this.setState({numCols: this.state.numCols+1})

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
      <button className="add-row-button" onClick={this.addRow}>Add Row</button>
      <button className="add-col-button" onClick={this.addCol}>Add Col</button>
      <select onChange ={this.changeColor}>
        <option value="#f0e3ff">purple1</option>
        <option value="limegreen">limegreen</option>
        <option value="hotpink">hotpink</option>
        <option value="PowderBlue">powderblue</option>
      </select>
      <Table numRows={this.state.numRows} numCols={this.state.numCols} 
       currentColor={this.state.currentColor} selectedColor={this.state.selectedColor} changeColor={this.changeColor} setCurrentColor={this.setCurrentColor}/>
      </div>
    );
  }
}

export default App;







