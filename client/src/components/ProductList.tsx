const products = [
    {
      id: 1,
      name: 'Isaac Bag',
      price: 300,
    },
    {
      id: 2,
      name: 'Ommy Bag',
      price: 300,
    },
    {
      id: 3,
      name: 'Rosemary Bag',
      price: 300,
    },
    {
      id: 4,
      name: 'New Bag',
      price: 300,
    },
  ];
  
  function ProductList() {
    return (
      <div>
        {products.map((product) => (
          <div key={product.id} className="product">
            <a href="#">
              <img src="./assets/react.svg" alt={product.name} className="product-image" />
            </a>
            <div className="details">
              <h2>{product.name}</h2>
              <h3>${product.price}</h3>
              <div className="add-to-cart">
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default ProductList;
  