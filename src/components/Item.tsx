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

	const item = items.find((item) => item.id.toString() == itemId);

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
		<div>
			{item && (
				<>
					<h1>{item.title}</h1>
					<img className="w-40" src={item.image} alt="item picture" />
					<p>{item.price}</p>
					<form action="" onSubmit={handleSubmit}>
						<input type="number" onChange={handleQuantityChange} value={quantity} min="1"/>
						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
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
