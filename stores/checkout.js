import { SUBMIT_CHECKOUT, BASKET_CHANGED, SUBMIT_CHECKOUT_FALIED } from '../constants/CheckoutTypes';

const initState = {
    request: {
        "delivery_address": {
            "address": {} // insert checkout here
        },
        "payment": {
            "method": {
                "name": "Online"
            },
            "gateway_opts": {
                "device_data": "yyyyy",
                "response_nonce": "zzzzzz"
            }
        },
        "delivery_method": "delivery",
        "delivery_time": "ASAP",
        "general": {
            "restaurant_id": "12634",
            "menu_id": "323232"
        },
        "operation": "final",
        "sections": [
            {
                "items": [], // insert basket here
                "id": "37225775"
            }
        ]
    },
    response: {}
}

export default function checkout(state = initState, action = '') {
    switch (action.type) {
        case SUBMIT_CHECKOUT:
        {
            alert(JSON.stringify(action))

            let newState = {...state}
            newState.response = action.body.validity
            return newState;
        }

        case SUBMIT_CHECKOUT_FALIED:
        {
            let newState = {...state}
            newState.response = action.body.errors
            return newState;
        }

        case BASKET_CHANGED:
        {
            let newState = {...state}
            newState.request.sections[0].items = action.items
            return state;
        }

        default:
            return state;
    }
}
