import React, { Component } from 'react'
import CartItem from './components/CartItem'
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
        <ul>
        </ul>
      </div>
    );
  }

  incrementQuantity(productId) {

  }
}

export default App;
