import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage.tsx'
import HomePage from './pages/HomePage.tsx'
import AboutPage from './pages/AboutPage.tsx'
import ProductDetail from './pages/ProductDetail.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: 'page not found',

    children:[
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path: '/store',
        element: <ProductsPage/>
      },
      {
        path: '/store/:id',
        element: <ProductDetail/>
      },
      {
        path: '/about',
        element: <AboutPage/>
      },
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
