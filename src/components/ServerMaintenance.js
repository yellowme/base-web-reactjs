import React from 'react';
import Footer from './Footer.js';
import {Link} from 'react-router';

class GenericNotFound extends React.Component {
  render() {
    return (
      <div>
        <div className='blue-gradient'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 left vcenter'>
                <h1>Disculpa las molestias.</h1>
                <p>Estamos actualizando el servidor, en unos minutos estaremos de vuelta.</p>
                <Link className='btn btn-red' to='/main' > Recargar</Link>
              </div>
              <div className='col-md-6 vcenter'>
              </div>
            </div>
          </div>
      </div>
      <Footer />
      </div>
    );
  }
};

export default GenericNotFound;

