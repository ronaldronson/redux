import React, { Component, PropTypes } from 'react';

export default class BasketItem extends Component {

    static propTypes = {
        itemRemoved: PropTypes.func.isRequired,
        itemUpdated: PropTypes.func.isRequired
    };

    constructor(props, context) {
        super(props, context);
        this.state = this.props.item || {};
    }

    handleUpdate() {
        this.setState(this.state)
        this.props.itemUpdated(this.state)
    }

    handleIncrement() {
        this.state.quantity++
        this.handleUpdate()
    }

    handleDecrement() {
        this.state.quantity--
        this.handleUpdate()
    }

    handleRemove() {
        this.props.itemRemoved(this.state.id)
    }

    render() {
        let item = this.state
        let err = this.props.error ? this.props.error.error_message : ''

        return (
            <li>
                <span>{item.name}</span>
                { '  ' }
                <span>
                    <button onClick={::this.handleDecrement}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={::this.handleIncrement}>+</button>
                </span>
                <span><button onClick={::this.handleRemove}>X</button></span>
                <span className="error">{err}</span>
            </li>
        )
    }
}
