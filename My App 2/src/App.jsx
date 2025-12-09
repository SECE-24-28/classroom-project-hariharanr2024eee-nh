import React from "react";
import "./App.css";

export default function App() {
  const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$49.99",
    img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$79.99",
    img: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Nike Sneakers",
    price: "$99.99",
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: "$29.99",
    img: "https://images.unsplash.com/photo-1587202372775-a5adcbf03b3b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Sunglasses",
    price: "$19.99",
    img: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Backpack",
    price: "$34.99",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
  }
];


  return (
    <div className="home-root">

      {/* HERO BANNER */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-text">
          <h1>Upgrade Your Style</h1>
          <p>Trending products with the best prices</p>
          <button>Shop Now</button>
        </div>
      </section>

      {/* PRODUCT LIST */}
      <section className="products-section">
        <h2>Featured Products</h2>
        
        <div className="product-grid">
          {products.map((item) => (
            <div className="product-card" key={item.id}>
              <img src={item.img} alt={item.name} />

              <div className="product-details">
                <h3>{item.name}</h3>
                <p className="price">{item.price}</p>
                <button className="add-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
