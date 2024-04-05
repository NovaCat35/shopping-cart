import { useState } from "react";
import { Product } from "../contexts/itemContext";
import ItemList from "./ItemList";
import ReactPaginate from "react-paginate";
import "../styles/Pagination.scss";

interface ItemListProp {
	displayedItems: Product[];
}

function PaginatedItems({ displayedItems }: ItemListProp) {
	const itemsPerPage = 8;
	const [itemOffset, setItemOffset] = useState(0);

	interface PageChangeEvent {
		selected: number;
	}

	const endOffset = itemOffset + itemsPerPage;
	console.log(`Loading items from ${itemOffset} to ${endOffset}`);
	const currentItems = displayedItems.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(displayedItems.length / itemsPerPage);

	// Invoke when user click to request another page.
	const handlePageClick = (event: PageChangeEvent) => {
		const newOffset = (event.selected * itemsPerPage) % displayedItems.length;
		console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
		setItemOffset(newOffset);
	};

	return (
		<>
			<ItemList displayedItems={currentItems} />
			<ReactPaginate className="pagination" breakLabel="..." nextLabel="NEXT >" onPageChange={handlePageClick} pageRangeDisplayed={5} pageCount={pageCount} previousLabel="< PREV" renderOnZeroPageCount={null} />
		</>
	);
}

export default PaginatedItems;
