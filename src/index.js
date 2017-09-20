import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import routes from './routes/routes';

let onUpdateRouter = () => {
  window.scrollTo(0, 0);
};

const Root = ({store}) => (
    <LocaleProvider locale={enUS}>
      <Router history={browserHistory} routes={routes} onUpdate={onUpdateRouter} />
    </LocaleProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));