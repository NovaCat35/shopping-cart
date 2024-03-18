import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Item from "./Item";
import Navigation from "./Navigation";
import styles from "../styles/shop.module.scss";
import {ItemContext} from "../contexts/itemContext";

// interface Product {
// 	id: number;
// 	title: string;
// 	price: number;
// 	image: string;
// }

function Shop() {
	const {items, loading} = useContext(ItemContext);
	const { id } = useParams<{ id?: string }>();

	return (
		<div className="main-container">
			<Navigation />
			<h1 className="text-center text-3xl">Shop</h1>
			{id ? (
				<Item itemId={id} />
			) : loading ? (
				<p className="text-center">Loading...</p>
			) : (
				<main className={styles.itemList}>
					{items.length > 0 ? (
						<>
							{items.map((item) => (
								<Link className="border-2 px-5 py-10" key={item.id} to={`/shop/${item.id}`}>
									<h2>{item.title}</h2>
									<p>{item.price}</p>
									<img className="w-40" src={item.image} alt="item picture" />
								</Link>
							))}
						</>
					) : (
						<p>No items available</p>
					)}
				</main>
			)}
		</div>
	);
}

export default Shop;
