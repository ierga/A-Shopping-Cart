import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './CartItem.css';

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
