import { useState, useEffect, useRef, createContext } from "react";

export type Product = {
	id: number;
	title: string;
	price: number;
	image: string;
	description: string;
	quantity: number;
	rating: { rate: number; count: number };
};

type ItemContextType = {
	items: Product[];
	loading: boolean;
	searchItem: (query: string) => Product[];
	filterItems: (filterCondition: string, currItems: Product[]) => Product[];
};

export const ItemContext = createContext<ItemContextType>({
	items: [],
	loading: true,
	searchItem: () => [],
	filterItems: () => [],
});

function ItemProvider({ children }: { children: React.ReactNode }) {
	const [items, setItems] = useState<Product[]>([]);
	const filterList = useRef<Product[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products/", { mode: "cors" })
			.then((response) => {
				if (response.status >= 400) {
					throw new Error("server error");
				}
				return response.json();
			})
			.then((response) => {
				// Format prices with double decimals
				const formattedItems = response.map((item: Product) => ({
					...item,
					price: (Math.round(item.price * 100) / 100).toFixed(2),
				}));
				setItems(formattedItems);
				console.log(formattedItems);
			})
			.catch((error) => {
				throw error; // Throw the error to be handled by the route
			})
			.finally(() => setLoading(false));
	}, []);

	const searchItem = (query: string): Product[] => {
		const filteredItems = items.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()) || item.description.toLowerCase().includes(query.toLowerCase()));

		console.log("Filtered Items:", filteredItems);
		filterList.current = filteredItems;
		return filterList.current;
	};

	const filterItems = (filterCondition: string, currItems: Product[]) => {
		switch (filterCondition) {
			case "Popularity": {
				console.log("Popularity");
				// Sort by rating count in descending order
				const sortedRate = currItems.sort((item1, item2) => item2.rating.rate - item1.rating.rate);
				return sortedRate;
			}
			case "LTH": {
				console.log("LTH");
				// Sort by price: Low to High
				const sortedPrice = currItems.sort((item1, item2) => item1.price - item2.price);
				console.log(sortedPrice);
				return sortedPrice;
			}
			case "HTL": {
				console.log("HTL");
				// Sort by price: High to Low
				const sortedPrice = currItems.sort((item1, item2) => item2.price - item1.price);
				console.log(sortedPrice);

				return sortedPrice;
			}
			case "Alphabetical": {
				// Sort by alphabetical order
				const sortedAlpha = currItems.sort((item1, item2) => (item1.title > item2.title) ? 1 : (item2.title > item1.title) ? -1 : 0);
				return sortedAlpha;
			}
			case "ReverseAlpha": {
				const sortedAlpha = currItems.sort((item1, item2) => (item1.title < item2.title) ? 1 : (item2.title < item1.title) ? -1 : 0);
				return sortedAlpha;
			}
			default:
				return items;
		}
	};

	return <ItemContext.Provider value={{ items, loading, searchItem, filterItems }}>{children}</ItemContext.Provider>;
}

export default ItemProvider;
