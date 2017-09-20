import React from 'react';
import intl from 'react-intl-universal';

import 'assets/styles/fonts.css';
import 'assets/fontcustom/_fontcustom.scss';
import 'style/main.scss';

const locales = {
  'en-US': require('../locales/en-US.json'),
  'es-MX': require('../locales/es-MX.json'),
};

class App extends React.Component {

  state = {initDone: false}

  componentDidMount() {
    this.loadLocales();
  }

  loadLocales() {
    intl.init({ currentLocale: 'es-MX', locales })
    .then(() => {
      this.setState({initDone: true});
    });
  }

  render() {
    return (
      this.state.initDone &&
      <div>
        {this.props.children}
      </div>
    );
  }
};

export default App;