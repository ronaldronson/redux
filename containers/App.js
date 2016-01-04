import React, { Component } from 'react';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';

import CheckoutApp from './CheckoutApp';
import * as stores from '../stores';

const redux = createRedux(stores);

export default class App extends Component {
    render() {
        return (
            <Provider redux={redux}>
                {() => <CheckoutApp />}
            </Provider>
        );
    }
}
