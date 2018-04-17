//containers - CarsList.js

import React, { Component } from 'react';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';

class CarsList extends Component{
	constructor(props){
		super(props);
		
	}
	
	
	
	render(){
		return(
			<ol>
			  <li>first</li>
			  <li>second</li>
			  <li>third</li>
			</ol>
			
		);
	}
}


function mapStateToProps(state){
	return{
	 cars:state.cars
	
	};
}

export default connect(mapStateToProps)(CarsList);