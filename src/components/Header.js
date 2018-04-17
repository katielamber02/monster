import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Header extends Component{
	static propTypes={
		items:PropTypes.array.isRequired,
		isLoading:PropTypes.bool//должна быть булевого типа но не обязательно быть
	    
	};
	render(){
		console.log('items',this.props.items);
		return(
			<div>
			{this.props.items.map((item,index)=>
			  <a href={item.link} key={index}>{item.label}</a>
			)}
			  
			</div>
			
		);
	}
}


export default Header;