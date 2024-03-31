import { useState, useEffect, createContext } from "react";

export type Product = {
	id: number;
	title: string;
	price: number;
	image: string;
	description: string;
	quantity: number;
};

type ItemContextType = {
	items: Product[];
	loading: boolean;
	searchItem: (query: string) => Product[];
};

export const ItemContext = createContext<ItemContextType>({
	items: [],
	loading: true,
	searchItem: () => [],
});

function ItemProvider({ children }: { children: React.ReactNode }) {
	const [items, setItems] = useState<Product[]>([]);
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
			})
			.catch((error) => {
				throw error; // Throw the error to be handled by the route
			})
			.finally(() => setLoading(false));
	}, []);

	const searchItem = (query: string): Product[] => {
		const filteredItems = items.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()) || item.description.toLowerCase().includes(query.toLowerCase()));

		console.log("Filtered Items:", filteredItems);
		return filteredItems;
	};

	return <ItemContext.Provider value={{ items, loading, searchItem }}>{children}</ItemContext.Provider>;
}

export default ItemProvider;
