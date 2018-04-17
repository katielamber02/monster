//reducer-info.js


const initialState={
	user:'JOHN',
	year:2018,
	age:18
	}

function userInfo(state=initialState,action){
	switch(action.type){
		case 'SET_YEAR':
		  return {...state,year:action.payload};
		case 'SET_AGE':
          return {...state,age:action.payload};	
		
		default:
		  return state
	}
	
	
}

export default userInfo;