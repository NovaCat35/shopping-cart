import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import shoppingCart from "../assets/shopping_cart.svg";
import { Link } from "react-router-dom";

function ShoppingCart() {
	const { cartItems } = useContext(CartContext);

	return (
		<Link to={`/checkout`}>
			<img src={shoppingCart} alt="shopping cart" />
			{cartItems.length > 0 && <p className="cart-count">{cartItems.length}</p>}
		</Link>
	);
}

export default ShoppingCart;
