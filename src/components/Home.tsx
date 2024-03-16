import Navigation from "./Navigation";
import shopBanner from "../assets/shop-banner.jpeg";

function Home() {
	return (
		<div>
			<Navigation />
			<h1 className="text-3xl font-bold underline text-center">Chic Parisian Threads</h1>
			<p className="text-center">Where fashion finds home</p>
			<img className="" src={shopBanner} alt="shop banner" />
		</div>
	);
}

export default Home;
