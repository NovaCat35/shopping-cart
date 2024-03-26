import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { ItemContext } from "../contexts/itemContext";
import { CartContext } from "../contexts/cartContext";
import { useNavigate } from "react-router-dom";

interface ItemProps {
	itemId: string;
}

function Item({ itemId }: ItemProps) {
	const { items } = useContext(ItemContext);
	const { addItemToCart } = useContext(CartContext);
	const [quantity, setQuantity] = useState(1);
	const navigate = useNavigate();

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
		<div className="mx-auto max-w-md">
			{item && (
				<>
					<h1 className="text-2xl font-bold mt-10 mb-4">{item.title}</h1>
					<img className="w-40 mb-4" src={item.image} alt="item picture" />
					<p className="mb-4">{item.description}</p>
					<p className="mb-4">${item.price}</p>
					<form onSubmit={handleSubmit}>
						<input type="number" onChange={handleQuantityChange} value={quantity} min="1" className="w-20 border border-gray-400 rounded-md py-2 px-3 mr-2" />
						<button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
							Add to Cart
						</button>
					</form>
				</>
			)}
		</div>
	);
}

Item.propTypes = {
	itemId: PropTypes.string.isRequired,
};

export default Item;
