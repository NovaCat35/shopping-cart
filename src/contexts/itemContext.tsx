import { useState, useEffect, useRef, createContext } from "react";

export type Product = {
	id: number;
	title: string;
	price: number;
	image: string;
	description: string;
	category: string;
	quantity: number;
	rating: { rate: number; count: number };
};

type ItemContextType = {
	items: Product[];
	loading: boolean;
	searchItem: (query: string) => Product[];
	searchCategory: (query: string) => Product[];
	filterItems: (filterCondition: string, currItems: Product[]) => Product[];
};

export const ItemContext = createContext<ItemContextType>({
	items: [],
	loading: true,
	searchItem: () => [],
	searchCategory: () => [],
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

		filterList.current = filteredItems;
		return filterList.current;
	};

	const searchCategory = (category: string): Product[] => {
		const filteredItems = items.filter((item) => item.category == category);
		filterList.current = filteredItems;
		return filteredItems
	}

	const filterItems = (filterCondition: string, currItems: Product[]) => {
		// Set default filter condition to "Popularity" if filterCondition is not provided or is null/empty
		if (!filterCondition) {
			filterCondition = "Popularity";
		}

		switch (filterCondition) {
			case "Popularity": {
				// Sort by rating count in descending order
				const sortedRate = currItems.sort((item1, item2) => item2.rating.rate - item1.rating.rate);
				return sortedRate;
			}
			case "LTH": {
				// Sort by price: Low to High
				const sortedPrice = currItems.sort((item1, item2) => item1.price - item2.price);
				console.log(sortedPrice);
				return sortedPrice;
			}
			case "HTL": {
				// Sort by price: High to Low
				const sortedPrice = currItems.sort((item1, item2) => item2.price - item1.price);
				return sortedPrice;
			}
			case "Alphabetical": {
				// Sort by alphabetical order
				const sortedAlpha = currItems.sort((item1, item2) => (item1.title > item2.title ? 1 : item2.title > item1.title ? -1 : 0));
				return sortedAlpha;
			}
			case "ReverseAlpha": {
				// Sort by reverse alphabetical order
				const sortedAlpha = currItems.sort((item1, item2) => (item1.title < item2.title ? 1 : item2.title < item1.title ? -1 : 0));
				return sortedAlpha;
			}
			default:
				return items;
		}
	};

	return <ItemContext.Provider value={{ items, loading, searchItem, searchCategory, filterItems }}>{children}</ItemContext.Provider>;
}

export default ItemProvider;
