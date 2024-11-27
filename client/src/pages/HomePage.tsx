import AboutPage from "./AboutPage"
import ProductsPage from "./ProductsPage"


function HomePage() {
  return (
    <div className="home">
        <ProductsPage/>
        <AboutPage/>
    </div>
  )
}

export default HomePage