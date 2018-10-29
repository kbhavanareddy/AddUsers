import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//
import App from './components/App';

//for routing-----same as router-outlet
import { BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

//redux--creating store
import { createStore } from 'redux';
//to make state---initialAppState available in store
// import reducer from './reducers/rusers';
import reducer from './reducers/appReducer'

//react-redux
import { Provider } from 'react-redux';


//to make state---initialAppState available in store-------------
//extension---redux devtools
var createstore = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


console.log(createstore.getState());




ReactDOM.render(
    <Provider  store={createstore} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
