import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';

import Checkout from '../components/Checkout';
import * as CheckoutActions from '../actions/CheckoutActions';

import Basket from '../components/Basket';
import * as BasketActions from '../actions/BasketActions';

@connect(state => state) //@todo
export default class CheckoutApp extends Component {
    render() {
        let {dispatch, checkout} = this.props

        return (
            <div className='layout'>
                <div>
                    <Basket {...bindActionCreators(BasketActions, dispatch)} checkoutState={checkout}  />
                </div>
                <div>
                    <Checkout {...bindActionCreators(CheckoutActions, dispatch)} checkoutState={checkout} />
                </div>
            </div>
        );
    }
}
