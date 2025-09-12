import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/error.jsx';
import 'nprogress/nprogress.css';
import Home from './pages/home.jsx';
import './styles/global.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      // {
      //   path: "/users",
      //   element: <UserPage />
      // },
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
  // {
  //   path: "/login",
  //   element: <LoginPage />
  // },
  // {
  //   path: "/register",
  //   element: <RegisterPage />
  // }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <AuthWrapper>
  <RouterProvider router={router} />
  // </AuthWrapper>
  // </React.StrictMode>,
)
