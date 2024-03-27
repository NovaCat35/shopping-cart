import Navigation from "./Navigation";
import shopBanner from "../assets/shop-banner.jpeg";
import Footer from "./Footer";

function Home() {
	return (
		<div className="text-center">
			<Navigation />
			<h1 className="text-5xl font-bold  mt-8 mb-4">AHOLA AWESOME STORE</h1>
			<p className="text-lg text-center mb-8">Where awesome finds its place.</p>
			<img className="w-full h-auto" src={shopBanner} alt="shop banner" />
			<Footer />
		</div>
	);
}

export default Home;
