import "@testing-library/jest-dom";
import { vi } from "vitest";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ItemProvider, { ItemContext } from "../../contexts/itemContext";
import Shop from "../Shop";

// Mock data for items
const mockItems = [
	{ id: 1, title: "Product 1", price: 10, image: "image1.jpg", description: "Description 1", category: "Electronics", quantity: 1, rating: { rate: 4, count: 100 } },
	{ id: 2, title: "Product 2", price: 20, image: "image2.jpg", description: "Description 2", category: "Men's Clothing", quantity: 2, rating: { rate: 4.5, count: 150 } },
	{ id: 3, title: "Product 3", price: 30, image: "image3.jpg", description: "Description 3", category: "Women's Clothing", quantity: 3, rating: { rate: 5, count: 200 } },
	{ id: 4, title: "Product 4", price: 40, image: "image4.jpg", description: "Description 4", category: "Jewelry", quantity: 4, rating: { rate: 4.2, count: 120 } },
];

// Mock loading state as false
const mockLoading = false;

// Mock the ItemProvider component to provide the desired context value
const MockedItemProvider = ({ children }: { children: React.ReactNode }) => (
	<ItemContext.Provider
		value={{
			items: mockItems,
			loading: mockLoading,
			searchItem: vi.fn((query) => mockItems.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()) || item.description.toLowerCase().includes(query.toLowerCase()))),
			searchCategory: vi.fn((category) => mockItems.filter((item) => item.category === category)),
			filterItems: vi.fn((filterCondition, currItems) => {
				switch (filterCondition) {
					case "Popularity":
						return currItems.sort((item1, item2) => item2.rating.rate - item1.rating.rate);
					case "LTH":
						return currItems.sort((item1, item2) => item1.price - item2.price);
					case "HTL":
						return currItems.sort((item1, item2) => item2.price - item1.price);
					case "Alphabetical":
						return currItems.sort((item1, item2) => (item1.title > item2.title ? 1 : item2.title > item1.title ? -1 : 0));
					case "ReverseAlpha":
						return currItems.sort((item1, item2) => (item1.title < item2.title ? 1 : item2.title < item1.title ? -1 : 0));
					default:
						return currItems;
				}
			}),
		}}
	>
		{children}
	</ItemContext.Provider>
);

describe("Shop Component", () => {
	it("renders loading screen", () => {
		render(
			<BrowserRouter>
				<ItemProvider>
					<Shop />
				</ItemProvider>
			</BrowserRouter>
		);

		const headerElement = screen.getByText(/loading.../i);
		expect(headerElement).toBeInTheDocument();
	});

	it("renders Shop component", () => {
		// Render the Shop component within the mocked context provider
		render(
			<BrowserRouter>
				<MockedItemProvider>
					<Shop />
				</MockedItemProvider>
			</BrowserRouter>
		);

		// Assert that the loading message is not displayed
		const loadingMessage = screen.queryByText("Loading . . .");
		expect(loadingMessage).not.toBeInTheDocument();

		// Assert that the component (category: all) renders without errors
		const headerElement = screen.getByText(/Our Products/i);
		expect(headerElement).toBeInTheDocument();

		// Assert that the displayed items section is rendered
		const displayedItemsSection = screen.getByTestId("displayed-items-section");
		expect(displayedItemsSection).toBeInTheDocument();
	});

	it("shows categories", () => {
		// Render the Shop component within the mocked context provider
		render(
			<BrowserRouter>
				<MockedItemProvider>
					<Shop />
				</MockedItemProvider>
			</BrowserRouter>
		);

		// Assert that the categories are rendered
		expect(screen.getByText("ALL PRODUCTS")).toBeInTheDocument();
		expect(screen.getByText("ELECTRONICS")).toBeInTheDocument();
		expect(screen.getByText("MEN'S CLOTHING")).toBeInTheDocument();
		expect(screen.getByText("WOMEN'S CLOTHING")).toBeInTheDocument();
		expect(screen.getByText("JEWELRY")).toBeInTheDocument();
	});

	it("renders items", () => {
		// Render the Shop component within the mocked context provider
		render(
			<BrowserRouter>
				<MockedItemProvider>
					<Shop />
				</MockedItemProvider>
			</BrowserRouter>
		);

		// Assert that items MUST be available
		expect(screen.queryByText("No items available")).not.toBeInTheDocument();
		// Assert at least one product is found (query by product's title)
		expect(screen.getByText("Product 1")).toBeInTheDocument();
	});
});
