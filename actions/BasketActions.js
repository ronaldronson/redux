import { BASKET_CHANGED } from '../constants/CheckoutTypes';

export function basketChanged(items) {
    return {
        type: BASKET_CHANGED,
        items: items
    };
}
