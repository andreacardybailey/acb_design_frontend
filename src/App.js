import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/App.scss';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Header from './components/Header';

function App() {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);

  const addProductToCart = (product) => {
    const exist = cartItems.find((cartItem) => cartItem.id === product.id);
    if (exist) {
      alert("Cannot add duplicate item to cart!");
    } else {
      setCartItems([...cartItems, { ...product }]);
    }
  }
  const removeProductFromCart = (product) => {
    const productToRemove = cartItems.find((item) => item.id === product.id);
    setCartItems(
      cartItems.filter((item) => {
        if (item.id !== productToRemove.id) {
          return item;
        }
      })
    );
  }

  useEffect(() => {
    // update localStorage after state is updated
    localStorage.setItem("cartItems", JSON.stringify([...cartItems]));
  }, [cartItems]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main data-testid="main">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products addProductToCart={addProductToCart} />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart cartItems={cartItems} removeProductFromCart={removeProductFromCart} />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
