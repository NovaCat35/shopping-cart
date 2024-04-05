import Navigation from "./Navigation";
import errorImg from "../assets/dungeon-meshi.png";
import Footer from "./Footer";

function ErrorPage() {
	return (
		<div>
			<Navigation />
			<div className="banner bg-[#f5ad42] w-full h-5 -mt-3 border-b-4 border-[#d1800f]"></div>
			<div className="flex flex-col items-center bg-gray-100 -mb-10">
				<h1 className="text-3xl font-bold text-[#e86241] mt-8 mb-5">404: YOLO!</h1>
				<div className="w-[600px] h-[350px] overflow-hidden rounded-lg border-[#e86241] border-8">
					<img src={errorImg} alt="Dog wearing clothes" className="w-full h-full object-cover" />
				</div>
				<p className="text-lg text-gray-700 mt-4 max-w-md text-center">Aw Shucks, looks like what you're looking for doesn't exist. Try one of the links below!</p>
				<div className="flex gap-5 mt-5 mb-5">
					<a href="/" className="border-[#e86241] text-xl border-2 rounded-md px-10 py-2 text-[#e86241] hover:underline">
						Home
					</a>
					<a href="/shop" className="border-[#e86241] text-xl border-2 rounded-md px-10 py-2 text-[#e86241] hover:underline">
						Shop
					</a>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default ErrorPage;
