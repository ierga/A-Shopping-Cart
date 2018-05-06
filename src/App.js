import React, { Component } from 'react'
import CartItem from './components/CartItem'
import Clock from 'react-live-clock'
import './App.css'

const products = [
    { id: 1, name: "Prada Shoes", price: 570 },
    { id: 2, name: "Rolex Watch", price: 649 },
    { id: 3, name: "Paper clips", price: 0.1 } ]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">A Shopping Cart</h1>
        </header>
        <Clock format={'HH:mm'} ticking={true} timezone={'Europe/Amsterdam'} />
        <ul>
          {products.map((product, index) => (<CartItem key={index} { ...product } /> ))}
        </ul>
      </div>
    );
  }

  incrementQuantity(productId) {

  }
}

export default App;
