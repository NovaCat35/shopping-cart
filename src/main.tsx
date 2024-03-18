import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router/router";
import "./styles/tailwind.css";
import ItemProvider from "./contexts/itemContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ItemProvider>
			<Router />
		</ItemProvider>
	</React.StrictMode>
);
