import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import {
  onIncrementActionCreator,
  onDecrementActionCreator
} from './redux/action/actions'

import {
  fetchRetailToMailActionCreator
} from './retailToMail/redux/actions/index';

import rootReducer from './rootReducer';
import Counter from './Counter'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)

const incre = () => {
    store.dispatch(onIncrementActionCreator({
      count: 1
    }));
}

const decre = () => {
    store.dispatch(onDecrementActionCreator({
      count: 1
    }));
}

const getRetailToMailContent = () => {
    store.dispatch(fetchRetailToMailActionCreator());
};

// store.dispatch(fetchRetailToMailActionCreator());

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState().counter}
      tealium={store.getState().analytics}
      pageContent={store.getState().retailToMailContent}
      onIncrement={() => incre()}
      onDecrement={() => decre()}
      getContent={() => getRetailToMailContent()}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}/>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)