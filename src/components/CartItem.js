import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './CartItem.css';

const cartItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
})


export default class CartItem extends Component {
  render() {
    const { name, price } = this.props

    return (
      <li className="CartItem">
        <p className="name">{name}</p>
        <p className="price">{price}</p>
      </li>
    )
  }
}
