import React, { Component } from 'react';
import TableCell from './TableCell';

class TableRow extends Component {
	
	createCols = () => {
		let cols = [];
		for(let i = 0; i < this.props.numCols; i++){
			cols.push(<TableCell selectedColor={this.props.selectedColor} currentColor={this.props.currentColor} setCurrentColor={this.props.setCurrentColor}/>)
		}
		return cols;
	}
	render(){
		return(<tr>{this.createCols()}</tr>);
	}
}
export default TableRow;