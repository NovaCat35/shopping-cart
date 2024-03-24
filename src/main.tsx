import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router/router";
import "./styles/tailwind.css";
import ItemProvider from "./contexts/itemContext";
import CartProvider from "./contexts/cartContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<CartProvider>
			<ItemProvider>
				<Router />
			</ItemProvider>
		</CartProvider>
	</React.StrictMode>
);
