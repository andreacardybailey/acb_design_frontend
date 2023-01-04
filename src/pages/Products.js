import React, { useState, useEffect } from 'react'; 
import axios from "axios";
import '../css/Products.scss';

function Products({addProductToCart}) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/")
    .then(response => {
      setProducts(response.data);
    });
  }, [products]); // Pass [] to only apply the effect once
  return (
    <div className="Products" data-testid="products">
      <h1>All Products</h1>
      <nav className="products-sidenav">
        <ul>
          <li>All Products</li>
          <li>Gift Boxes</li>
          <li>Envelopes</li>
          <li>Paper Lanterns</li>
          <li>Original Artwork</li>
          <li>Fine Art Prints</li>
        </ul>
      </nav>
      <section className="product-container">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <h2>{product.name}</h2>
          <img src={`${process.env.PUBLIC_URL}/images/products/${product.image}`} alt={product.name} className="product-image" />
          <p>{product.price}</p>
          <p>{product.description}</p>
          <button type="button" data-testid="add-to-cart" onClick={() => addProductToCart(product)}>Add to Cart</button>
        </div>
      ))}
      </section>
    </div>
  );
}

export default Products;