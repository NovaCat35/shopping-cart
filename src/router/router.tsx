import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "../components/Shop";
import Home from "../components/Home";
import Checkout from "../components/Checkout";
import ErrorPage from "../components/ErrorPage";
import ScrollToTop from "../components/ScrollToTop";

const Router = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<>
					<ScrollToTop /> 
					<Home />
				</>
			),
			errorElement: <ErrorPage />,
		},
		{
			path: "/shop/:id?",
			element: (
				<>
					<ScrollToTop /> 
					<Shop />
				</>
			),
			errorElement: <ErrorPage />,
		},
		{
			path: "/checkout",
			element: (
				<>
					<ScrollToTop />
					<Checkout />
				</>
			),
		},
	]);

	return <RouterProvider router={router} />;
};

export default Router;
