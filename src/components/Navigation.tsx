import { Link } from "react-router-dom";

function Navigation() {
	return (
		<nav className="bg-gray-800 px-3 py-3">
			<Link to="/" className="text-white px-4 py-2">
				Home
			</Link>
			<Link to="/shop" className="text-white px-4 py-2">
				Shop
			</Link>
		</nav>
	);
}

export default Navigation;
