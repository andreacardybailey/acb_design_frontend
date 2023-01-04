import NP from 'number-precision';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import '../css/Cart.scss';
import { useEffect } from 'react';
function Cart({cartItems, removeProductFromCart}) {
  const calculateSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach(item => {
      let price = Number((item.price).replace(/\$/g, ''));
      subtotal = NP.plus(subtotal, price);
    })
    return (subtotal);
  }
  return (
    <div className="cart" data-testid="cart">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="item" key={item.id}>
            <h3>{item.name}</h3>
            <img src={`${process.env.PUBLIC_URL}/images/products/${item.image}`} alt={item.name} className="item-image" />
            <p>{item.price}</p>
            <button type="button" onClick={() => removeProductFromCart(item)}>Remove</button>
          </div>
        ))}
      </div>
      <h2>Subtotal: ${calculateSubtotal().toFixed(2)}</h2>
      <PayPalScriptProvider options={{ "client-id": "AUGvIuJQmeB8A7RSTuwGEbY5Voh0Zi-JCFdEONpy3JyeYK5s4iPbS6KGXY_eOtguOYaKZAWizuADipsX" }}/>
    </div>
  );
}

Cart.defaultProps = { cartItems: [] };

export default Cart;