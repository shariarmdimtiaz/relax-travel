import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Main from './layout/Main.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/phoneverify',
        element: <PhoneVerify></PhoneVerify>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: '/shopping',
        element:<Shop></Shop>
      },
      {
        path: '/orders',
        element: <Orders></Orders>
      },
      {
        path: '/checkout',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
