import ProductList from "./ProductList"

function ProductsPage() {
  return (
    <div className="products">
        <h2>Products</h2>
        <div className="container">
            <ProductList/>
        </div>
    </div>
  )
}

export default ProductsPage