import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function Checkout() {
	const { cartItems } = useContext(CartContext);

	return (
		<>
			<Navigation />
			<h1>Checkout</h1>
			{cartItems &&
				cartItems.map((item) => (
					<Link className="border-2 px-5 py-10" key={item.id} to={`/shop/${item.id}`}>
						<h2>{item.title}</h2>
						<img className="w-40" src={item.image} alt="item picture" />
						<p>{item.price}</p>
					</Link>
				))}
			<Link to="/shop" className="px-4 py-2">Continue Shopping</Link>
		</>
	);
}

export default Checkout;
