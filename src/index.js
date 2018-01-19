import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import routes from './routes/routes';

// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import appReducers from './store/appReducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'store/rootSaga';

let onUpdateRouter = () => {
  window.scrollTo(0, 0);
};

const Root = ({store}) => (
    <Provider store={store}>
      <LocaleProvider locale={enUS}>
        <Router history={browserHistory} routes={routes} onUpdate={onUpdateRouter} />
      </LocaleProvider>
    </Provider>
);

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  appReducers, /* preloadedState, */
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));