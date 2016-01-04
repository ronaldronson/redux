import { SUBMIT_CHECKOUT, SUBMIT_CHECKOUT_FALIED } from '../constants/CheckoutTypes';
import request from 'superagent'

export function success(data) {
    return {
        type: SUBMIT_CHECKOUT,
        data: data
    };
}

export function error(err, body) {
    return {
        type: SUBMIT_CHECKOUT_FALIED,
        error: err,
        body: body
    };
}

export function checkoutSubmitted(addresses, checkoutState) {
    return dispatch => {
        checkoutState.request.delivery_address.address = addresses
        request
            .post('https://api.uk-dev-robert1.heroeslabs.net/orders')
            //.put('https://private-660be-hungryhouse.apiary-mock.com/orders/')
            //.set('Prefer', '201')
            .send(checkoutState.request)
            .end((err, res) => {
                console.log(err, res)
                dispatch(err ? error(err, res.body) : success(res))
            })
    }
}
