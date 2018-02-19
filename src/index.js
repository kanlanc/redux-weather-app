import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/index';
import ReduxPromise from 'redux-promise';





const createStoreWithMiddleware=applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(rootReducer)}>
<App /> 
</Provider>,

document.getElementById('root'));
registerServiceWorker();
