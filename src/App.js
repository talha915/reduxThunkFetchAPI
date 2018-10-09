import React, { Component } from 'react';
import './App.css';
import {applyMiddleware, createStore} from 'redux';
import {logger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import Main from './component/Main';

const store = createStore(
    rootReducer,
    applyMiddleware(logger, thunkMiddleware)
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    );
  }
}

export default App;
