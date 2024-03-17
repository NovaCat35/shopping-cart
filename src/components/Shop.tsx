import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Item from "./Item";
import Navigation from "./Navigation";
import styles from "../styles/shop.module.scss";

interface Product {
	id: number;
	title: string;
	price: number;
	image: string;
}

function Shop() {
	const [items, setItems] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	const { id } = useParams<{ id?: string }>();

	useEffect(() => {
		fetch("https://fakestoreapi.com/products/", { mode: "cors" })
			.then((response) => {
				if (response.status >= 400) {
					throw new Error("server error");
				}
				return response.json();
			})
			.then((response) => {
				console.log(response);
				setItems(response);
			})
			.catch((error) => {
				throw error; // Throw the error to be handled by the route
			})
			.finally(() => setLoading(false));
	}, []);

	return (
		<div className="main-container">
			<Navigation />
			<h1 className="text-center text-3xl">Shop</h1>
			{id ? (
				<Item itemId={id} />
			) : loading ? (
				<p>Loading...</p>
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
