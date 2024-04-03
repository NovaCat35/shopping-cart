import PropTypes from "prop-types";
import { useContext, useState, useEffect } from "react";
import { ItemContext } from "../contexts/itemContext";
import { CartContext } from "../contexts/cartContext";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";

interface ItemProps {
	itemId: string;
}

function Item({ itemId }: ItemProps) {
	const { items } = useContext(ItemContext);
	const { addItemToCart } = useContext(CartContext);
	const [quantity, setQuantity] = useState(1);
	const navigate = useNavigate();

	useEffect(() => {
		// We want to make sure items is loaded up first (e.g. we refresh that page), so then we can check if item is found
		if (items.length > 0 && !items.find((item) => item.id.toString() === itemId)) {
			throw new Error("Item not found"); // Navigate to ERROR PAGE if item is not found
		}
	}, [itemId, items]);

	const item = items.find((item) => item.id.toString() === itemId);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (item) {
			addItemToCart({ newItem: item, newQuantity: quantity });
		}
		navigate("/checkout");
	};

	const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(e.target.value);
		setQuantity(value);
	};

	return (
		<div className="p-10 ">
			{item && (
				<div className="md:flex md:gap-y-8 md:justify-center">
					<div className="ml-10 w-[400px] mb-4 hidden md:block mr-20 overflow-hidden">
						<img className="max-w-full h-full object-contain" src={item.image} alt="item picture" />
					</div>
					<div className="w-full md:mr-10">
						<h1 className="text-2xl font-bold mt-10 mb-4">{item.title}</h1>
						<img className="w-40 mb-4  md:hidden" src={item.image} alt="item picture" />
						<StarRating rating={item.rating.rate} count={item.rating.count} />
						<p className="mb-4 font-bold text-3xl text-[]">${item.price}</p>
						<div className="w-90 h-[3px] bg-[#1ca1ba] mb-3 mt-3"></div>
						<p className="mb-4">{item.description}</p>
						<form onSubmit={handleSubmit}>
							<input type="number" onChange={handleQuantityChange} value={quantity} min="1" className="w-20 border border-gray-400 rounded-md py-2 px-3 mr-2" />
							<button type="submit" className="bg-[#1ea0ba] hover:bg-[#0c5e9c] text-white font-bold py-2 px-4 rounded-md transition duration-300">
								Add to Cart
							</button>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}

Item.propTypes = {
	itemId: PropTypes.string.isRequired,
};

export default Item;
