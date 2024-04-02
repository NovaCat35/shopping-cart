interface StarRatingProps {
	rating: number;
	count: number;
}

function StarRating({ rating, count }: StarRatingProps) {
	// Round to nearest half (e.g. 3.6 becomes 3.5)
	const roundedRating = Math.round(rating * 2) / 2;
	const stars = [];

	// Append all the filled whole stars
	for (let i = roundedRating; i >= 1; i--) {
		stars.push(<i className="fa fa-star" aria-hidden="true" style={{ color: "gold" }} key={i}></i>);
	}

	// If there is a half a star, append it
	if (roundedRating % 1 !== 0) {
		stars.push(<i className="fa fa-star-half-o" aria-hidden="true" style={{ color: "gold" }} key="half"></i>);
	}

	// Fill the empty stars
	for (let i = 5 - roundedRating; i >= 1; i--) {
		stars.push(<i className="fa fa-star-o" aria-hidden="true" style={{ color: "gold" }} key={`empty-${i}`}></i>);
	}

	return (
		<div className="mb-5">
			{stars} <span className="text-[#566b84]">({count})</span>
		</div>
	);
}

export default StarRating;
