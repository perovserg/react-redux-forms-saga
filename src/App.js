import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import Root from './components/Root';
import store from './redux';
import history from './history';

import './config';

class App extends React.Component {
  render(){
    return (
        <Provider store = {store}>
            <ConnectedRouter history = {history}>
                <Root/>
            </ConnectedRouter>
        </Provider>
    )
  }
}

export default App;
