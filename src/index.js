import React from 'react';
import ReactDOM from 'react-dom';
import './less/index.less';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
