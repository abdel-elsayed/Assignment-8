import React, { Component } from 'react';

class TableCell extends Component {
	constructor(props){
		super(props);
		this.state={
			currColor: null
		}
	}
	onClick = () => {
		this.setState({currColor: this.props.selectedColor});
	}
	render(){
		let style= {"background-color":this.state.currColor};
		return(<td className="cell" style={style} onClick={this.onClick}></td>);
	}
}
export default TableCell;