import React, { Component, PropTypes } from 'react';
import BasketItem from './BasketItem'


const initState = [{
        "name": "Spring rolls",
        "quantity": 1,
        "id": "2110330"
    }, {
        "name": "Summer rolls",
        "quantity": 1,
        "id": "2110331"
    }
]

export default class Basket extends Component {

    static propTypes = {
        basketChanged:PropTypes.func.isRequired
    };

    constructor(props, context) {
        super(props, context)
        this.state = this.props.state || {items: initState}
        this.props.basketChanged(this.state.items)
    }

    basketOnChange() {
        this.setState({items: this.state.items})
        this.props.basketChanged(this.state.items)
    }

    itemChanged(newItem) {
        this.state.items = this.state.items.map(item =>
            item.id == newItem.id ? newItem : item
        )
        this.basketOnChange()
    }

    itemRemoved(id) {
        this.state.items = this.state.items.filter(item => item.id != id)
        this.basketOnChange()
    }

    render() {
        let errors = this.props.checkoutState.response.items || []

        const getErr = (id) => errors.filter(err => err.id == id).pop()

        let elems = this.state.items.map(item => {
            return (
                <BasketItem item={item}
                            itemUpdated={::this.itemChanged}
                            itemRemoved={::this.itemRemoved}
                            error={getErr(item.id)}
                    />
            )
        })

        return (
            <div className="basket">
                <h5>Basket:</h5>
                <ul>{elems}</ul>
            </div>
        );
    }
}
