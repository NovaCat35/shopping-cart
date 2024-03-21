import PropTypes from "prop-types";
import { useContext } from "react";
import { ItemContext } from "../contexts/itemContext";

interface ItemProps {
	itemId: string;
}

function Item({ itemId }: ItemProps) {
	const { items } = useContext(ItemContext);
	const item = items.find((item) => item.id.toString() == itemId);

	const handleSubmit = () => {
		// Add item to cart with its quantity amount
		
	}

	return (
		<div>
			{item && (
				<>
					<h1>{item.title}</h1>
					<img className="w-40" src={item.image} alt="item picture" />
					<p>{item.price}</p>
					<form action="" onSubmit={handleSubmit}>
						<input type="number" value="1" />
						<button type="submit">Add to Cart</button>
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
