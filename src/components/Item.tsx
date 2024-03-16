import PropTypes from "prop-types";

interface ItemProps {
	itemId: string;
}

function Item({ itemId }: ItemProps) {
	return (
		<div>
			<h1>{itemId}</h1>
		</div>
	);
}

Item.propTypes = {
	itemId: PropTypes.string.isRequired,
};

export default Item;
