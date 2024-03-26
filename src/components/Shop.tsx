import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Item from "./Item";
import Navigation from "./Navigation";
import styles from "../styles/shop.module.scss";
import { ItemContext } from "../contexts/itemContext";

function Shop() {
	const { items, loading } = useContext(ItemContext);
	const { id } = useParams<{ id?: string }>();

	return (
		<div className="main-container">
			<Navigation />
			<main className={styles.main}>
				{id ? (
					<Item itemId={id} />
				) : loading ? (
					<p className="text-center text-4xl ">Loading . . .</p>
				) : (
					<>
						<h1 className="text-center text-3xl font-bold mt-5 mb-8">Shop</h1>
						<div className={styles.itemList}>
							{items.length > 0 ? (
								<>
									{items.map((item) => (
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
		</div>
	);
}

export default Shop;
