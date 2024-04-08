import "@testing-library/jest-dom";
import { vi } from "vitest";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CartProvider, { CartContext } from "../../contexts/cartContext";
import Checkout from "../Checkout";

// Mock data for items
const mockCartItems = [
	{ id: 1, title: "Product 1", price: 10, image: "image1.jpg", description: "Description 1", category: "Electronics", quantity: 1, rating: { rate: 4, count: 100 } },
	{ id: 2, title: "Product 2", price: 20, image: "image2.jpg", description: "Description 2", category: "Men's Clothing", quantity: 2, rating: { rate: 4.5, count: 150 } },
];

describe("Cart Checkout", () => {
	it("shows empty cart", () => {
		render(
			<BrowserRouter>
				<CartProvider>
					<Checkout />
				</CartProvider>
			</BrowserRouter>
		);
		// Assert that the component renders without errors
		expect(screen.queryByText("Your shopping cart is empty.")).toBeInTheDocument();
	});
});

describe("Cart Checkout", () => {
	it("shows total price on filled cart", () => {
		// Mock the CartProvider component with cartItems set to mockCartItems
		const MockedCartProvider = ({ children }: { children: React.ReactNode }) => (
			<CartContext.Provider
				value={{
					cartItems: mockCartItems,
					addItemToCart: vi.fn(),
					subtractQuantity: vi.fn(),
					addQuantity: vi.fn(),
					deleteItem: vi.fn(),
				}}
			>
				{children}
			</CartContext.Provider>
		);

		render(
			<BrowserRouter>
				<MockedCartProvider>
					<Checkout />
				</MockedCartProvider>
			</BrowserRouter>
		);

      // Assert cart is not empty
		expect(screen.queryByText("Your shopping cart is empty.")).not.toBeInTheDocument();

      // Calculate the total
      const totalPriceElement = screen.getByTestId('total-price');
      const totalPriceText = totalPriceElement.textContent;
      expect(totalPriceText).toBe('$ 50.00')
	});
});
