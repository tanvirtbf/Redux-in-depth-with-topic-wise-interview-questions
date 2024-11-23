import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CartPage from './components/CartPage.jsx'
import Wishlist from './components/Wishlist.jsx'
import Home from './components/home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children : [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/cart',
        element: <CartPage />
      },
      {
        path: '/wishlist',
        element: <Wishlist />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
