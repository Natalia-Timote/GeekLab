import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home/page.jsx';
import Cart from './pages/Cart/page.jsx';
import Profile from './pages/Profile/page.jsx';
import Items from './pages/Items/page.jsx';
import Auth from './pages/Auth/page.jsx';

const pages = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/profile", element: <Profile /> },
      { path: "/items", element: <Items /> },
      { path: "/auth", element: <Auth /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={pages}></RouterProvider>
  </StrictMode>
)
