import React, { Component } from 'react';

import Dropdown from '../components/Dropdown'
import Header from '../components/Header'
import Form from '../components/Form'

const menu=[
{
	link:'/articles',
	label:'Articles'
},
{
	link:'/contacts',
	label:'Contacts'
},
{
	link:'/posts',
	label:'Posts'
}
]


class App1 extends Component{
	render(){
		return(
			<div>
			 
			  <Dropdown />
			  <Header items={menu} />
			  <Form />
			  
			</div>
			
		);
	}
}


export default App1;