import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/cartContext";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Checkout() {
	const { cartItems, addItemToCart, addQuantity, subtractQuantity, deleteItem } = useContext(CartContext);
	const [quantities, setQuantities] = useState<{ [key: number]: number }>(() => {
		// Initialize quantities state using reduce to create a map of item IDs to quantities
		return cartItems.reduce((acc, item) => {
			acc[item.id] = item.quantity;
			return acc;
		}, {} as { [key: number]: number });
	});

	useEffect(() => {
		// Update quantities state whenever cartItems change
		setQuantities((prevQuantities) => {
			const updatedQuantities = { ...prevQuantities };
			cartItems.forEach((item) => {
				updatedQuantities[item.id] = item.quantity;
			});
			return updatedQuantities;
		});
	}, [cartItems]);

	const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>, itemId: number) => {
		const value = parseInt(e.target.value);
		setQuantities((prevQuantities) => ({
			...prevQuantities,
			[itemId]: value,
		}));

		// Update cart new
		addItemToCart({ newItem: cartItems.find((item) => item.id === itemId)!, newQuantity: value });
	};

	return (
		<>
			<Navigation />
			<div className="max-w-4xl mx-auto px-4">
				<h1 className="text-3xl font-bold mt-10 mb-4">Checkout</h1>
				{cartItems.length > 0 ? (
					cartItems.map((item) => (
						<div key={item.id} className="flex items-center justify-between border-b border-gray-300 py-4">
							<Link to={`/shop/${item.id}`} className="flex items-center space-x-4">
								<img className="w-24 h-24 rounded-md" src={item.image} alt="item picture" />
								<div>
									<h2 className="text-lg font-semibold">{item.title}</h2>
									<div className="text-gray-600">Price: ${item.price}</div>
									<div className="text-gray-600">Subtotal: ${(Math.round((item.price * item.quantity) * 100)/ 100).toFixed(2)}</div>
								</div>
							</Link>
							<div className="right-hand-opts flex justify-center gap-10">
								<div className="flex items-center space-x-4">
									<button type="button" onClick={() => subtractQuantity(item.id)} className="text-gray-600 hover:text-gray-800 focus:outline-none">
										-
									</button>
									<input onChange={(e) => handleQuantityChange(e, item.id)} className="w-16 text-center border border-gray-400" value={quantities[item.id] || 0} />
									<button type="button" onClick={() => addQuantity(item.id)} className="text-gray-600 hover:text-gray-800 focus:outline-none">
										+
									</button>
								</div>
								<button className="border border-gray-30 px-5 rounded-md hover:bg-gray-100" type="button" onClick={() => deleteItem(item.id)}>
									Remove
								</button>
							</div>
						</div>
					))
				) : (
					<div className="text-center">
						<p>Your shopping cart is empty.</p>
						<Link to="/shop" className="block mt-8 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
							Shop Now
						</Link>
					</div>
				)}

				{cartItems.length > 0 && (
					<div className="mt-8">
						<div className="bg-gray-100 p-4 rounded-md">
							<h2 className="font-semibold">TOTAL AMOUNT</h2>
							<div className="text-lg">$ {cartItems.reduce((acc, item) =>  acc + Math.round((item.price * item.quantity) * 100)/ 100, 0).toFixed(2)}</div>
						</div>
						<div className="mt-4 space-y-2">
							<Link to="/shop" className="block px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
								Continue Shopping
							</Link>
							<a href="#" className="block px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600" onClick={() => alert("Demo complete. You have successfully checked out!")}>
								Checkout
							</a>
						</div>
					</div>
				)}
			</div>
			<Footer />
		</>
	);
}

export default Checkout;
