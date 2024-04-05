import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import {Product} from '../contexts/itemContext'
import styles from "../styles/shop.module.scss";

interface ItemListProp {
   displayedItems: Product[];
}

function ItemList({displayedItems} : ItemListProp) {
	return (
		<div className={`${styles.itemList}`}>
			{displayedItems.map((item) => (
				<Link className="relative text-center border-8 px-5 py-10 rounded-md overflow-hidden hover:shadow-lg transition duration-300 hover:border-[#10a7de]" key={item.id} to={`/shop/${item.id}`}>
					<div className="flex items-center justify-center mb-2">
						<img className="w-40 object-cover" src={item.image} alt="item picture" />
					</div>{" "}
					<h2 className="text-xl font-semibold mb-3">{item.title}</h2>
					<p className="text-xl text-gray-700 absolute bottom-3 left-0 right-0 bg-slate-50 bg-opacity-80 px-3 py-1">${item.price}</p>
					<StarRating rating={item.rating.rate} count={item.rating.count} />
				</Link>
			))}
		</div>
	);
}

export default ItemList;
