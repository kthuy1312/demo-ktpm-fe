import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/error.jsx';
import 'nprogress/nprogress.css';
import HomePage from './pages/home.jsx';
import './styles/global.css'
import DetailProductPage from './pages/detailProduct.jsx';
import CartPage from './pages/cart.jsx';
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/product/:id",
        element: <DetailProductPage />
      },
      {
        path: "/cart",
        element: <CartPage />
      },
      // {
      //   path: "/books",
      //   element: (
      //     <PrivateRoute>
      //       <BookPage />
      //     </PrivateRoute>
      //   )
      // }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <AuthWrapper>
  <RouterProvider router={router} />
  // </AuthWrapper>
  // </React.StrictMode>,
)
