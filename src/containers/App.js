import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import {connect} from 'react-redux';
import User from '../components/User';
import Year from '../components/Year';
import Age from '../components/Age';
import setYearAction from '../actions/actionYear';
import setAgeAction from '../actions/actionAge';


class App extends Component{
	render(){
		return(
			<div>
			  <User user={this.props.user} />
			  <Year year={this.props.year}
                    setYear={this.props.setYearFunction}
			  />
			  <Age age={this.props.age} 
			       setAge={this.props.setAgeFunction}
			  />
			  
			
			  
			</div>
			
		);
	}
}


function mapStateToProps(state){
	return{
	user:state.userInfo.user,
	year:state.userInfo.year,
	age:state.userInfo.age,
	
	}
}

function mapDispatchToProps(dispatch){
	return{
		setYearFunction:year=>{
			dispatch(setYearAction(year));
			
		},
		setAgeFunction:age=>{
			dispatch(setAgeAction(age));
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
