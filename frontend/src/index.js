import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from "redux";
import checkInsReducer from './reducers/checkInsReducer';
import symptomsReducer from './reducers/symptomsReducer';
import statusReducer from './reducers/statusReducer';

const rootReducer = combineReducers({
  checkIns: checkInsReducer,
  symptoms: symptomsReducer,
  status: statusReducer
});

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
