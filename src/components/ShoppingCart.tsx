import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import shoppingCart from "../assets/shopping_cart.svg";
import { Link } from "react-router-dom";

function ShoppingCart() {
	const { cartItems } = useContext(CartContext);

	return (
		<Link to="/checkout" className="flex items-center text-white">
			<img src={shoppingCart} alt="shopping cart" className="w-6 h-6 mr-2" />
			{cartItems.length > 0 && (
				<p className="cart-count bg-blue-500 text-xs rounded-full px-2 py-1">
					{cartItems.length}
				</p>
			)}
		</Link>
	);
}

export default ShoppingCart;
