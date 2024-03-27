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
};

export const ItemContext = createContext<ItemContextType>({
	items: [],
	loading: true,
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
				console.log(typeof response[0].price)
				const formattedItems = response.map((item: Product) => ({
					...item,
					price: (Math.round(item.price * 100)/ 100).toFixed(2),
				}));
				console.log(formattedItems);
				setItems(formattedItems);
			})
			.catch((error) => {
				throw error; // Throw the error to be handled by the route
			})
			.finally(() => setLoading(false));
	}, []);

	return <ItemContext.Provider value={{ items, loading }}>{children}</ItemContext.Provider>;
}

export default ItemProvider;
