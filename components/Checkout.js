import React, { Component, PropTypes } from 'react';
import { getNestedObj } from '../helpers/utils'

let initState = {
    name: "Steven",
    lastname: "Fry",
    email: "steven.fry@rambler.ru",
    country: "UK",
    address: "Flat 67, Exeter House, Putney Heath",
    zipcode: "SW153SX",
    phone: "07888888888"
}

export default class Checkout extends Component {

    static propTypes = {
        checkoutSubmitted: PropTypes.func.isRequired
    };

    constructor(props, context) {
        super(props, context);
        this.state = this.props.state || initState;
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.checkoutSubmitted(this.state, this.props.checkoutState)
    }

    handleChange(e) {
        let {name, value} = e.target
        this.state[name] = value
        this.setState(this.state)
    }

    render() {
        let {name, lastname, email, country, address, zipcode, phone} = this.state
        let errors = this.props.checkoutState.response.delivery_address || {}

        return (
            <div className="checkout">
                <h5>Checkout:</h5>
                <form>
                    <div>
                        <input type='text' value={name} name='name' placeholder='Name' onChange={::this.handleChange}/>
                        <span className='error'>{errors.name}</span>
                    </div>
                    <div>
                        <input type='text' value={lastname} name='lastname' placeholder='Lastname'
                               onChange={::this.handleChange}/>
                        <span className='error'>{errors.lastname}</span>
                    </div>
                    <div>
                        <input type='text' value={email} name='email' placeholder='Email'
                               onChange={::this.handleChange}/>
                        <span className='error'>{errors.email}</span>
                    </div>
                    <div>
                        <input type='text' value={country} name='country' placeholder='Country'
                               onChange={::this.handleChange}/>
                        <span className='error'>{errors.country}</span>
                    </div>
                    <div>
                        <input type='text' value={address} name='address' placeholder='Address'
                               onChange={::this.handleChange}/>
                        <span className='error'>{errors.address}</span>
                    </div>
                    <div>
                        <input type='text' value={zipcode} name='zipcode' placeholder='Zipcode'
                               onChange={::this.handleChange}/>
                        <span className='error'>{errors.zipcode}</span>
                    </div>
                    <div>
                        <input type='text' value={phone} name='phone' placeholder='Phone'
                               onChange={::this.handleChange}/>
                        <span className='error'>{errors.phone}</span>
                    </div>

                    <input type='submit' onClick={::this.handleSubmit}/>
                </form>
            </div>
        );
    }
}
