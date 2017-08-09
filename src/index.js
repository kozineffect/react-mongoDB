import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './config/routes';
import './css/index.css';
import './css/Form.css';
import './css/App.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();