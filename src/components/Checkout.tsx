import { useContext, useState } from "react";
import { CartContext } from "../contexts/cartContext";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function Checkout() {
	const { cartItems, addItemToCart, addQuantity, subtractQuantity, deleteItem } = useContext(CartContext);
	const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

	const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>, itemId: number) => {
		const value = parseInt(e.target.value);
		setQuantities((prevQuantities) => ({
			...prevQuantities,
			[itemId]: value,
		}));

		addItemToCart({ newItem: cartItems.find((item) => item.id === itemId)!, newQuantity: value });
	};

	return (
		<>
			<Navigation />
			<div className="max-w-4xl mx-auto px-4">
				<h1 className="text-3xl font-bold mb-4">Checkout</h1>
				{cartItems &&
					cartItems.map((item) => (
						<div key={item.id} className="flex items-center justify-between border-b border-gray-300 py-4">
							<Link to={`/shop/${item.id}`} className="flex items-center space-x-4">
								<img className="w-24 h-24 rounded-md" src={item.image} alt="item picture" />
								<div>
									<h2 className="text-lg font-semibold">{item.title}</h2>
									<div className="text-gray-600">${item.price}</div>
								</div>
							</Link>
							<div className="flex items-center space-x-4">
								<button type="button" onClick={() => subtractQuantity(item.id)} className="text-gray-600 hover:text-gray-800 focus:outline-none">
									-
								</button>
								<input onChange={(e) => handleQuantityChange(e, item.id)} className="w-16 text-center border border-gray-400" value={quantities[item.id] || 0} />
								<button type="button" onClick={() => addQuantity(item.id)} className="text-gray-600 hover:text-gray-800 focus:outline-none">
									+
								</button>
							</div>
							<button type="button" onClick={() => deleteItem(item.id)}>
								Remove
							</button>
						</div>
					))}
				<Link to="/shop" className="block mt-8 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
					Continue Shopping
				</Link>
			</div>
		</>
	);
}

export default Checkout;
