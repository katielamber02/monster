/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/index';


const store=createStore(rootReducer);

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>, 
document.getElementById('root'));
registerServiceWorker();
*/

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import {Provider} from 'react-redux'


//import rootReducer from './reducers/index';
import App1 from './containers/App1';

const store = createStore(()=>{})




ReactDOM.render(
    <Provider store={store}>
      <App1 />
    </Provider>,
    document.getElementById('root')
);