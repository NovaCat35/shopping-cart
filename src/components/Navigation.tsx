import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";

function Navigation() {
	return (
		<nav className="bg-gray-800 px-3 py-3 flex justify-between items-center">
			<Link to="/" className="text-white px-4 py-2 hover:bg-gray-700">
				Home
			</Link>
			<Link to="/shop" className="text-white px-4 py-2 hover:bg-gray-700">
				Shop
			</Link>
			<ShoppingCart />
		</nav>
	);
}

export default Navigation;
