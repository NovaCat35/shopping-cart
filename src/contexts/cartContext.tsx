import { useState, createContext } from "react";
import { Product } from "./itemContext";

interface CartProp {
	itemId: number;
	newQuantity: number;
}

interface CartContextType {
	cartItems: Product[];
	addItemToCart: (props: CartProp) => void;
}

export const CartContext = createContext<CartContextType>({
	cartItems: [],
	addItemToCart: () => {},
});

// Shopping cart will contain information on the quantity of a product, alongside a product info itself
function CartProvider({ children }: { children: React.ReactNode }) {
	const [cartItems, setCartItems] = useState<Product[]>([]);

	const addItemToCart = ({ itemId, newQuantity }: CartProp) => {
		const productsWithQuantity = cartItems.map((item) => {
			if (itemId == item.id) {
				return { ...item, quantity: newQuantity };
			} else {
				return item;
			}
		});

		setCartItems(productsWithQuantity);
	};

	return <CartContext.Provider value={{ cartItems, addItemToCart }}>{children}</CartContext.Provider>;
}

export default CartProvider;
