import React, { Component } from 'react';



class Dropdown extends Component{
	constructor(props){
		super(props);
		this.state={isOpened:false}
	}
	toggleState(){
		this.setState({isOpened:!this.state.isOpened});
	}
	render(){
		console.log('isOpened',this.state.isOpened)
		let dropdowntext;
		if(this.state.isOpened){
			dropdowntext=<div>Here is what is shown in dropdown</div>
		}
		return(
			<div onClick={this.toggleState.bind(this)}>
			 
			  Hello from Dropdown
			  {dropdowntext}
			  
			</div>
			
		);
	}
}


export default Dropdown;