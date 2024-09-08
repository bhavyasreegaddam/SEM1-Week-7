const ShoppingCart = () => {
    const [cart, setCart] = useState([]);
  
    // Sample products data (usually fetched from an API)
    const products = [
      { id: 1, name: 'The Harry Potter', price: 40 },
      { id: 2, name: 'The Jungle Book', price: 50 },
      { id: 3, name: 'Aesop\'s Fables', price: 45 },
      { id: 4, name: 'Aladdin', price: 76 },
    ];
  
    // Function to add a product to the cart
    const addToCart = (product) => {
      setCart([...cart, product]);
    };
  
    // Function to remove a product from the cart by its id
    const removeFromCart = (productId) => {
      setCart(cart.filter(item => item.id !== productId));
    };
    return (
      <div>
        <h2>Products</h2>
        <div>
          {products.map(product => (
            <div key={product.id}>
              <span>{product.name} - ${product.price}</span>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
  
        <h2>Shopping Cart</h2>
        <div>
          {cart.length === 0 ? (
            <p>The cart is empty.</p>
          ) : (
            cart.map(item => (
              <div key={item.id}>
                <span>{item.name} - ${item.price}</span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };
  export default ShoppingCart