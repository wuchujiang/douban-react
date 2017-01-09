import React from 'react';
import { Provider } from 'react-redux';
import ReactDom from 'react-dom';

import createReduxStore from './state/app/';
import App from './components/app/';

let store = createReduxStore(window.__state);
ReactDom.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));