import { useParams } from "react-router-dom";
import Item from "./Item";

function Shop() {
	const { id } = useParams<{ id?: string }>();
	return (
		<div>
			<h1>Shop</h1>
         {id ? (
            <Item itemId={id} />
         ) : (
            <div>list of items</div>
         )}
		</div>
	);
}

export default Shop;
