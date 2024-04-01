import Navigation from "./Navigation";
import manShopping from "../assets/shop-banner.jpeg";
import dogImg from "../assets/dog-clothes.jpeg";
import ladyShoppingImg from "../assets/lady-shopping.jpeg";
import ladyYellowBgImg from "../assets/lady-yellow-bg.jpeg";
import flowerImg from "../assets/red_hibiscus.png";
import waterColorBg from "../assets/water-color-bg.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import styles from "../styles/home.module.scss";
import fontStyles from "../styles/fonts.module.scss";

function Home() {
	return (
		<div className="text-center">
			<Navigation />
			<div className={`${styles.intro_container} flex relative`}>
				<img className="absolute left-1/2 transform -translate-x-1/2 z-[-40]" src={waterColorBg} alt="watercolor background" />
				<div className={` relative md:w-1/2 pl-10`}>
					<div className={`${styles.welcome_image1} absolute top-[85px] left-[280px] w-[320px] h-[320px] overflow-hidden rounded-full`}>
						<img className="w-full h-full object-cover" src={ladyYellowBgImg} alt="girl yellow background" />
					</div>
					<div className={`${styles.welcome_image2}  top-0 left-10 w-[350px] h-[350px] overflow-hidden rounded-full `}>
						<img className="z-10 w-full h-auto object-cover mb-20" src={dogImg} alt="dog clothing" />
					</div>
				</div>
				<div className={`${styles.welcome_banner} md:w-1/2 `}>
					<h1 className=" mt-2 mb-4">
						<span className="font-bold text-7xl md:text-8xl lg:text-9xl">AHOLA!</span> <br />
						<span className="tracking-widest text-5xl md:text-6xl lg:text-6xl">AWESOME </span>
						<span className="font-thin tracking-widest text-5xl md:text-6xl lg:text-6xl">STORE</span>
					</h1>

					<div className="w-full flex justify-center">
						<div className={`${styles.welcome_image3} mb-5 w-[270px] h-[270px] overflow-hidden rounded-full `}>
							<img className="z-10 w-full h-auto object-cover mb-10" src={dogImg} alt="dog clothing" />
						</div>
					</div>
					<p className={`${fontStyles.header_font} text-3xl mb-8`}>Where awesome finds its place.</p>
					<Link to="/shop" className="text-black text-xl rounded-md border-4 border-gray-600 bg-gray-200 px-6 py-3 hover:bg-gray-500 hover:text-white font-bold transition ease-in-out duration-300">
						Shop Now
					</Link>
				</div>
			</div>

			<main className="bg-gray-100 mt-[30px] pt-20">
				<div className="bg-white customer-info relative flex p-10">
					<div className="w-[600px] md:w-[730px] h-[500px] overflow-hidden">
						<img className="w-full h-full mr-[5px] object-cover" src={ladyShoppingImg} alt="lady shopping" />
					</div>
					<div className="flex flex-col flex-grow items-center h-full pl-10">
						<h2 className="text-3xl font-bold mb-4">Latest Fashion Trends</h2>
						<p className={`${fontStyles.description_font} text-left text-lg max-w-[530px]`}>Welcome to our fantastic store, where fashion dreams come true! Discover the latest trends and stylish outfits that turn heads, along with accessories that make bold statements. Dive into our curated collection, offering everything from casual chic to glamorous evening wear. Explore designer pieces, must-have essentials, and unique accessories to add magic to your look. Our friendly team is here to guide you every step of the way, making your shopping experience delightful. Join us on this exciting fashion journey at our fabulous store!</p>
						<Link to="/shop" className="mt-5 w-full text-white text-xl rounded-md border border-black bg-black px-5 py-3 hover:bg-gray-500 hover:text-white font-bold transition ease-in-out duration-300 inline-block">
							Browse Products
						</Link>
					</div>
				</div>

				<div className="bg-white customer-info relative flex p-10">
					<div className="flex flex-col flex-grow items-center h-full pr-10">
						<h2 className="text-3xl font-bold mb-4">Artisanal Creations</h2>
						<p className={`${fontStyles.description_font} text-left text-lg max-w-[530px]`}>Dive into a world of artisanal excellence only at "Ahola! Awesome Store." Discover handcrafted treasures that blend tradition with innovation, from bespoke clothing to unique accessories. Our curated collection celebrates the artistry of skilled craftsmen, offering one-of-a-kind pieces that tell stories and inspire individuality. Embrace the beauty of craftsmanship and make a statement with every piece you choose.</p>
						<Link to="/shop" className="mt-5 w-full text-white text-xl rounded-md border border-black bg-black px-5 py-3 hover:bg-gray-500 hover:text-white font-bold transition ease-in-out duration-300 inline-block">
							View
						</Link>
					</div>
					<div className="w-[600px] md:w-[730px] h-[500px] overflow-hidden">
						<img className="w-full h-full mr-[5px] object-cover" src={manShopping} alt="lady shopping" />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default Home;
