import { useContext } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import Item from "./Item";
import Navigation from "./Navigation";
import styles from "../styles/shop.module.scss";
import { ItemContext } from "../contexts/itemContext";
import Footer from "./Footer";

function Shop() {
	const { items, loading, searchItem } = useContext(ItemContext);
	const { id } = useParams<{ id?: string }>(); //captures the specific item ID from route /shop/:id
	const [searchParams] = useSearchParams();
	const searchQuery = searchParams.get("search") || "";

	// Check to see if we display all items or we have an existing search query
	let displayedItems = items;
	if (searchQuery) {
		displayedItems = searchItem(searchQuery);
	}

	return (
		<div className="main-container">
			<Navigation />
			<main className={styles.main}>
				{id ? (
					<Item itemId={id} />
				) : loading ? (
					<p className="text-center text-4xl mt-10">Loading . . .</p>
				) : (
					<>
						<h1 className="text-center text-3xl font-bold mt-10 mb-8">Shop to your heart content!</h1>
						<div className={styles.itemList}>
							{displayedItems.length > 0 ? (
								<>
									{displayedItems.map((item) => (
										<Link className="relative text-center border-4 px-5 py-10 rounded-md overflow-hidden hover:shadow-lg transition duration-300 hover:border-[#10a7de]" key={item.id} to={`/shop/${item.id}`}>
											<div className="flex items-center justify-center mb-2">
												<img className="w-40 object-cover" src={item.image} alt="item picture" />
											</div>{" "}
											<h2 className="text-xl font-semibold mb-5">{item.title}</h2>
											<p className="text-xl text-gray-700 absolute bottom-3 left-0 right-0 bg-slate-50 bg-opacity-80 px-3 py-1">${item.price}</p>
										</Link>
									))}
								</>
							) : (
								<p>No items available</p>
							)}
						</div>
					</>
				)}
			</main>
			<Footer />
		</div>
	);
}

export default Shop;
