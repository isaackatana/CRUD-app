const products = [
  {
    id: 1,
    image: './assets/react.svg',
    name: 'Ommy Bag',
    price: 1000,
  },
  {
    id: 1,
    image: './assets/react.svg',
    name: 'Isaac Bag',
    price: 2500,
  },
  {
    id: 1,
    image: './assets/react.svg',
    name: 'Rasta Bag',
    price: 300,
  },
  {
    id: 1,
    image: './assets/react.svg',
    name: 'Rosemary Bracelet',
    price: 400,
  },
];

function ProductList() {
  return (
      <>
      {products.map((product) => (
        <div className="product" key={product.id}>
          <a href="#">
            <img src={product.image} alt={product.name} className="product-image" />
          </a>
          <div className="details">
            <h2>{product.name}</h2>
            <h3>Ksh. {product.price}</h3>
            <div>
              <button className="add-to-cart">+</button>
            </div>
          </div>
        </div>
      ))}
      </>
  );
}

export default ProductList;