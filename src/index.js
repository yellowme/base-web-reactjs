import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import routes from './routes/routes';

// redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducers from './store/appReducers';

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

const store = createStore(
  appReducers, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));