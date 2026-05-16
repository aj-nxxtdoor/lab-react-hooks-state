import { useState } from "react";

const sampleProducts = [
  { id: 1, name: "Apple", price: 1.00, category: "Fruits", inStock: true },
  { id: 2, name: "Milk", price: 2.50, category: "Dairy", inStock: false },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [category, setCategory] = useState("all");
  const [cart, setCart] = useState([]);

  const filteredProducts = category === "all"
    ? sampleProducts
    : sampleProducts.filter(p => p.category === category);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>🛒 Shopping App</h1>

      {/* Dark mode toggle — name must match /toggle/i */}
      <button onClick={() => setDarkMode(prev => !prev)}>
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>

      <label>
        Filter by Category:{" "}
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </label>

      <div>
        <h2>Available Products</h2>
        {filteredProducts.length === 0 ? (
          <p>No products available</p>
        ) : (
          filteredProducts.map(product => (
            <div
              key={product.id}
              className={`card ${product.inStock ? "" : "outOfStock"}`}
            >
              <h3>{product.name}</h3>
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>Status: {product.inStock ? "In Stock" : "Out of Stock"}</p>
              <button
                data-testid={`product-${product.id}`}
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>

      {/* Cart section — tests look for "shopping cart" and "{name} is in your cart" */}
      {cart.length > 0 && (
        <div>
          <h2>Shopping Cart</h2>
          {cart.map((item, i) => (
            <p key={i}>{item.name} is in your cart</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;