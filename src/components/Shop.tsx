import { useContext, useState, useEffect, useRef } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import Item from "./Item";
import Navigation from "./Navigation";
import styles from "../styles/shop.module.scss";
import fontStyles from "../styles/fonts.module.scss";
import beachImg from "../assets/beach.jpeg";
import { ItemContext } from "../contexts/itemContext";
import Footer from "./Footer";
import PaginatedItems from "./PaginatedItems";

function Shop() {
	const { items, loading, searchItem, searchCategory, filterItems } = useContext(ItemContext);
	const { id } = useParams<{ id?: string }>(); //captures the specific item ID from route /shop/:id
	const [searchParams] = useSearchParams();
	const searchQuery = searchParams.get("search") || searchParams.get("category") || "";
	const [displayedItems, setDisplayedItems] = useState(items);
	const selectedCategory = useRef<string>(searchParams.get("category") || "");
	const selectedFilterRef = useRef<string>(""); // Create a ref for selectedFilter
	const categories = Array.from(new Set(items.map((item) => item.category)));

	/**
	 * We want to allow all search/category query (immediately after opening shop page)
	 * to generate new filtered list based on the type of query.
	 * Next, further sort that list base on filtered options.
	 */
	useEffect(() => {
		// Update displayedItems when items or loading state changes
		if (!loading) {
			let filteredItems = items;
			selectedCategory.current = "";

			const categoryType = searchParams.get("category");
			if (searchParams.get("search")) {
				filteredItems = searchItem(searchQuery);
			} else if (categoryType) {
				filteredItems = searchCategory(searchQuery);
				selectedCategory.current = categoryType;
			}
			const filteredItemsWithSelectedFilter = filterItems(selectedFilterRef.current, filteredItems);
			setDisplayedItems(filteredItemsWithSelectedFilter);
		}
	}, [loading, items, searchItem, searchCategory, filterItems, searchQuery, searchParams]);

	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedFilter = e.target.value;
		selectedFilterRef.current = selectedFilter; // Update the ref value
		const filteredItems = filterItems(selectedFilterRef.current, displayedItems); // Use ref value in filterItems
		setDisplayedItems([...filteredItems]); // No need for a function here
	};

	return (
		<div className="main-container">
			<Navigation />
			<div className="banner bg-[#81b4c5] w-full h-5 -mt-3 border-b-4 border-[#2c8c99]"></div>
			<>
				{id ? (
					<Item itemId={id} />
				) : loading ? (
					<p className="text-center text-4xl mt-10">Loading . . .</p>
				) : (
					<>
						<header className="bg-[#f2efee]">
							<div className={`${styles.header} relative flex`}>
								<div className="img-container w-[100vw] lg:w-[600px] h-[400px] lg:h-[500px] overflow-hidden">
									<img className="w-full h-full mr-[5px] object-cover" src={beachImg} alt="lady shopping" />
								</div>
								<div className="flex flex-col flex-grow items-center h-full p-10 text-[#423c3a]">
									<h2 className="text-3xl font-bold mt-10 mb-4">Our Products</h2>
									<p className={`${fontStyles.typewriter_font} text-left text-lg max-w-[530px]`}>Discover our signature collection, inspired by the vibrant pulse of island living. Each piece embodies the dynamic essence of archipelago life, celebrating creativity, energy, and excitement. Designed for both style and functionality, our collection brings together comfort and island flair in every product.</p>
								</div>
							</div>
						</header>
						<main className={`${styles.main}`}>
							<div className=" side-nav pl-5 pr-10 py-10">
								<ul className="flex flex-col gap-5">
									<li>
										<Link to="/shop" className={`flex border-4 px-3 py-1 ${fontStyles.typewriter_font} ${selectedCategory.current === "" ? "border-[orange]" : ""}`}>
											ALL PRODUCTS
										</Link>
									</li>
									{categories.map((category, index) => (
										<li key={index}>
											<Link to={`/shop?category=${category}`} className={`flex border-4 px-3 py-1 ${fontStyles.typewriter_font} ${selectedCategory.current === category ? "border-[orange]" : ""}`}>
												{category.toUpperCase()}
											</Link>
										</li>
									))}
								</ul>
							</div>
							<div className="main-content w-full">
								<div className="filter-options">
									<h1 className="text-left text-3xl font-bold mt-10 mb-8 text-[#423c3a]">Shop to your heart content!</h1>
									<div className="info-section flex justify-between items-center mb-5">
										<p className="font-bold text-[#566b84]">{displayedItems.length} Items</p>
										<select onChange={handleSelect} className="block border border-gray-400 border-2 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" name="filter" id="filter">
											<option value="Popularity">Popularity</option>
											<option value="LTH">Price: Low to High</option>
											<option value="HTL">Price: High to Low</option>
											<option value="Alphabetical">Order: A-Z</option>
											<option value="ReverseAlpha">Order: Z-A</option>
										</select>
									</div>
								</div>
								<div data-testid="displayed-items-section" className="displayed-items flex flex-col">{displayedItems.length > 0 ? <PaginatedItems displayedItems={displayedItems} /> : <p>No items available</p>}</div>
							</div>
						</main>
					</>
				)}
			</>
			<Footer />
		</div>
	);
}

export default Shop;
