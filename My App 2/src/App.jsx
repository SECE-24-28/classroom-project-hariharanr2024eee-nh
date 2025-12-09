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
    img: "https://images.unsplash.com/photo-1637160151663-a410315e4e75?q=80&w=687&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Nike Sneakers",
    price: "$99.99",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: "$29.99",
    img: "https://images.unsplash.com/photo-1632160871990-be30194885aa?q=80&w=765&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Sunglasses",
    price: "$19.99",
    img: "https://images.unsplash.com/photo-1732139637220-15346842a9fd?q=80&w=736&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Backpack",
    price: "$34.99",
    img: "https://images.unsplash.com/photo-1642375352634-ad952121fdb3?q=80&w=687&auto=format&fit=crop&w=800&q=80"
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
