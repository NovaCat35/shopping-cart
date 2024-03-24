import { useState, createContext } from "react";
import { Product } from "./itemContext";

interface CartProp {
	newItem: Product;
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

	const addItemToCart = ({ newItem, newQuantity }: CartProp) => {
		const existingItemIndex = cartItems.findIndex((item) => item.id === newItem.id);

		// check if item already exist in cart, update quantity if so. Otherwise add to cart
		if (existingItemIndex !== -1) {
			const updatedCartItems = [...cartItems];
			updatedCartItems[existingItemIndex].quantity += newQuantity;
			setCartItems(updatedCartItems);
		} else {
			setCartItems([...cartItems, { ...newItem, quantity: newQuantity }]);
		}
	};

	return <CartContext.Provider value={{ cartItems, addItemToCart }}>{children}</CartContext.Provider>;
}

export default CartProvider;
