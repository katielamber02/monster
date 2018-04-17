import React, { Component } from 'react';


class User extends Component{
	render(){
		return(
			<div>
			  Hello from User {this.props.user}
			</div>
			
		);
	}
}

export default User;