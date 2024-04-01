import { useContext, useState, useEffect, useRef } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import Item from "./Item";
import Navigation from "./Navigation";
import styles from "../styles/shop.module.scss";
import { ItemContext } from "../contexts/itemContext";
import Footer from "./Footer";

function Shop() {
	const { items, loading, searchItem, filterItems } = useContext(ItemContext);
	const { id } = useParams<{ id?: string }>(); //captures the specific item ID from route /shop/:id
	const [searchParams] = useSearchParams();
	const searchQuery = searchParams.get("search") || "";
	const [displayedItems, setDisplayedItems] = useState(items);
	const selectedFilterRef = useRef<string>(""); // Create a ref for selectedFilter

	// Allow search query to generate new list base on search query and filter setting
	useEffect(() => {
		const filteredItems = searchItem(searchQuery);
		const filteredItemsWithSelectedFilter = filterItems(selectedFilterRef.current, filteredItems);
		setDisplayedItems(filteredItemsWithSelectedFilter);
	}, [searchQuery, items, searchItem, filterItems]);

	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedFilter = e.target.value;
		selectedFilterRef.current = selectedFilter; // Update the ref value
		const filteredItems = filterItems(selectedFilterRef.current, displayedItems); // Use ref value in filterItems
		setDisplayedItems(() => [...filteredItems]);
	};

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
						<header>
							<h1 className="text-center text-3xl font-bold mt-10 mb-8">Shop to your heart content!</h1>
							<div className="info-section flex justify-between items-center mb-5">
								<p>{displayedItems.length} Items</p>
								<select onChange={handleSelect} className="block border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" name="filter" id="filter">
									<option value="Popularity">Popularity</option>
									<option value="LTH">Price: Low to High</option>
									<option value="HTL">Price: High to Low</option>
									<option value="Alphabetical">A-Z</option>
									<option value="ReverseAlpha">Z-A</option>
								</select>
							</div>
						</header>
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
											<p>Rating: {item.rating.rate}</p>
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
