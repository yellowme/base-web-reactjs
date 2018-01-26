import Home              from './Home';
import Login             from './Login';
import Logout            from './Logout';
import SignUp            from './SignUp';
import Recovery          from './Recovery';
import Main              from './Main';
import App               from 'app/App';
import GenericNotFound   from './GenericNotFound';
import ServerMaintenance from './ServerMaintenance';
import Validation        from 'utils/validation.js';

export default {
  component: App,
  childRoutes: [
    {
      childRoutes: [ Home, Main, Logout ],
    },
    {
      onEnter: Validation.redirectToDashboard,
      childRoutes: [ Login, SignUp, Recovery ],
    },
    ServerMaintenance,
    GenericNotFound,
  ],
};
