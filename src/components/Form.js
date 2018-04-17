import React, { Component } from 'react';



class Form extends Component{
	constructor(props){
		super(props);
		this.state={
			email:''
		};
	    this.hundleEmailChange=this.hundleEmailChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}
	handleSubmit(event){
		event.preventDefault();
		console.log('form is submitted.Email is:',this.state.email)
	}
	
	hundleEmailChange(event){
		console.log('email was changed',this);
		console.log(event.target.value);
		this.setState({email:event.target.value})
	}
	render(){
		return(
			<form onSubmit={this.handleSubmit}>
			 <input type="text" 
			        placeholder="e-mail"
					value={this.state.email}
					onChange={this.hundleEmailChange}

			 />
			
			  <button>Save</button>
			</form>
			
		);
	}
}


export default Form;