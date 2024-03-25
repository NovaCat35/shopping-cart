import React, { useReducer, createContext } from "react";
import { Product } from "./itemContext";

interface CartProp {
	newItem: Product;
	newQuantity: number;
}

interface CartContextType {
	cartItems: Product[];
	addItemToCart: (props: CartProp) => void;
	addQuantity: (props: number) => void;
	subtractQuantity: (props: number) => void;
	deleteItem: (props: number) => void;
}

export const CartContext = createContext<CartContextType>({
	cartItems: [],
	addItemToCart: () => {},
	addQuantity: () => {},
	subtractQuantity: () => {},
	deleteItem: () => {},
});

type Action = { type: "addQuantity"; itemId: number } | { type: "subtractQuantity"; itemId: number } | { type: "setQuantity"; newItem: Product; newQuantity: number } | { type: "deleteItem"; itemId: number };

function cartReducer(cartItems: Product[], action: Action) {
	switch (action.type) {
		case "addQuantity": {
			const existingItem = cartItems.find((item) => item.id === action.itemId);
			if (!existingItem) {
				return cartItems; // Item not found, no need to update state
			}
			const updatedCart = cartItems.map((item) => (item.id === action.itemId ? { ...item, quantity: item.quantity + 1 } : item));
			return updatedCart;
		}
		case "subtractQuantity": {
			const existingItem = cartItems.find((item) => item.id === action.itemId);
			if (!existingItem || existingItem.quantity <= 0) {
				return cartItems; // Item not found or quantity already 0, no need to update state
			}
			const updatedCart = cartItems.map((item) => (item.id === action.itemId ? { ...item, quantity: item.quantity - 1 } : item));
			return updatedCart;
		}
		case "setQuantity": {
			const existingItemIndex = cartItems.findIndex((item) => item.id === action.newItem.id);
			const updatedCart = [...cartItems];
			if (existingItemIndex !== -1) {
				// Item already in cart, update the quantity of existing item
				const updatedItem = { ...updatedCart[existingItemIndex], quantity: updatedCart[existingItemIndex].quantity + action.newQuantity };
				updatedCart[existingItemIndex] = updatedItem;
			} else {
				const newItemWithQuantity = { ...action.newItem, quantity: action.newQuantity };
				updatedCart.push(newItemWithQuantity);
			}
			return updatedCart;
		}

		case "deleteItem": {
			const updatedCart = cartItems.filter((item) => item.id !== action.itemId);
			return updatedCart;
		}
		default:
			return cartItems;
	}
}

function CartProvider({ children }: { children: React.ReactNode }) {
	const [cartItems, dispatch] = useReducer(cartReducer, []);

	const addItemToCart = ({ newItem, newQuantity }: CartProp) => {
		dispatch({ type: "setQuantity", newItem, newQuantity });
	};

	const subtractQuantity = (itemId: number) => {
		dispatch({ type: "subtractQuantity", itemId });
	};

	const addQuantity = (itemId: number) => {
		dispatch({ type: "addQuantity", itemId });
	};

	const deleteItem = (itemId: number) => {
		dispatch({ type: "deleteItem", itemId });
	};

	return <CartContext.Provider value={{ cartItems, addItemToCart, subtractQuantity, addQuantity, deleteItem }}>{children}</CartContext.Provider>;
}

export default CartProvider;
