import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import Sagas from './sagas'
import 'normalize.css'
import 'semantic-ui-css/semantic.min.css';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

const token = localStorage.getItem('jwtToken');

// if (token !== null) {
//   store.dispatch(fetchUser());
// }

// then run the saga
sagaMiddleware.run(Sagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
