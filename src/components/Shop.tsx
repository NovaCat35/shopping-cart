import { useParams } from "react-router-dom";
import Item from "./Item";
import Navigation from "./Navigation";

function Shop() {
	const { id } = useParams<{ id?: string }>();
	return (
		<div>
			<Navigation />
			<h1>Shop</h1>
			{id ? <Item itemId={id} /> : <div>list of items</div>}
		</div>
	);
}

export default Shop;
