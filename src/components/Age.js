//components-Age.js

import React, { Component } from 'react';


class Age extends Component {
	constructor(props){
		super(props)
		this.onBtnClick=this.onBtnClick.bind(this);
	}
	
	
  onBtnClick(event){
	return this.props.setAge(event.target.textContent)  
  }	
	
  render() {
    return (
      <div >
       <button onClick={this.onBtnClick}>20</button>
	   <button onClick={this.onBtnClick}>30</button>
	   <button onClick={this.onBtnClick}>40</button>
	   
	   <p>This age has been chosen-{this.props.age}</p>
	   
      </div>
    );
  }
}

export default Age;