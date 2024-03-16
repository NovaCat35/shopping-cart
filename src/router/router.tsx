import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "../components/Shop";
import Home from "../components/Home";
import Checkout from "../components/Checkout";
import ErrorPage from "../components/ErrorPage";


const Router = () => {
   const router = createBrowserRouter([
      {
         path: "/",
         element: <Home />,
         errorElement: <ErrorPage />,
      },
      {
         path: "/shop/:id?",
         element: <Shop />
      },
      {
         path: "/checkout",
         element: <Checkout />
      }
   ])
   return <RouterProvider router={router} />;
}

export default Router;
