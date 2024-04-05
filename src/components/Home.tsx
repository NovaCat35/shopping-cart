import Navigation from "./Navigation";
import manShopping from "../assets/shop-banner.jpeg";
import dogImg from "../assets/dog-clothes.jpeg";
import ladyShoppingImg from "../assets/lady-shopping.jpeg";
import ladyYellowBgImg from "../assets/lady-yellow-bg.jpeg";
import flowerImg from "../assets/red_hibiscus.png";
import turtleImg from "../assets/turtle.avif";
import waterColorBg from "../assets/water-color-bg.png";
import mensWearImg from "../assets/menswear.jpeg";
import womensWearImg from "../assets/womenswear.jpeg";
import electronicImg from "../assets/electronics.jpeg";
import jewelryImg from "../assets/jewelry.avif";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import styles from "../styles/home.module.scss";
import fontStyles from "../styles/fonts.module.scss";

function Home() {
	return (
		<div className="text-center">
			<Navigation />
			<div className="banner bg-[#e2f1f4] w-full h-10 -mt-3 "></div>
			<div className={`${styles.intro_container} flex relative mt-7`}>
				<img className="absolute left-1/2 transform -translate-x-1/2 z-[-40]" src={waterColorBg} alt="watercolor background" />
				<div className={`relative md:w-1/2 pl-10`}>
					<div className={`${styles.welcome_image1} bg-[#fef733] absolute top-[85px] left-[280px] w-[320px] h-[320px] overflow-hidden rounded-full shadow-lg`} style={{ boxShadow: "3px 4px 10px 3px rgba(251, 198, 12, 0.5)" }}>
						<img className="w-full h-full object-cover" src={ladyYellowBgImg} alt="girl yellow background" />
					</div>
					<div className={`${styles.welcome_image2} bg-[#4493b9] top-0 left-10 w-[350px] h-[350px] overflow-hidden rounded-full shadow-lg`} style={{ boxShadow: "2px 4px 6px 5px rgba(73, 161, 227, 0.5)" }}>
						<img className="z-10 w-full h-auto object-cover mb-20" src={dogImg} alt="dog clothing" />
					</div>
				</div>

				<div className={`${styles.welcome_banner} md:w-1/2 `}>
					<h1 className=" mt-2 mb-4">
						<span className={`${styles.text_shadow} font-bold text-7xl md:text-8xl lg:text-9xl`}>AHOLA!</span> <br />
						<span className="tracking-widest text-5xl md:text-6xl lg:text-6xl">AWESOME </span>
						<span className="font-thin tracking-widest text-5xl md:text-6xl lg:text-6xl">STORE</span>
					</h1>

					<div className="w-full flex justify-center">
						<div className={`${styles.welcome_image3} bg-[#4493b9] mb-5 w-[270px] h-[270px] overflow-hidden rounded-full `}>
							<img className="z-10 w-full h-auto object-cover mb-10" src={dogImg} alt="dog clothing" />
						</div>
					</div>
					<p className={`${fontStyles.header_font} text-3xl mb-8`}>Where awesome finds its place.</p>
					<Link to="/shop" className={`${styles.shadow_skyblue} text-white text-xl rounded-md border-2 border-[#d13f57] bg-[#e34b64] px-6 py-3 hover:bg-[#39a0db] hover:border-[#3494ca] font-bold transition ease-in-out duration-300`}>
						Shop Now
					</Link>
				</div>
			</div>

			<main className="bg-[#ffe3e3] mt-[30px] pt-20">
				<div className="cards-container flex justify-center gap-8 flex-wrap p-10 bg-gray-100">
					<Link to="/shop?category=electronics" className="card w-[300px] h-[350px] relative overflow-hidden rounded-lg">
						<img src={electronicImg} className="w-full h-full object-cover transform scale-100 transition duration-300 ease-in-out hover:scale-105" alt="electronic background" />
						<h2 className={`text-white text-2xl absolute left-[50%] bottom-5 transform -translate-x-1/2 translate-y-[-50%] flex justify-center items-center bg-black bg-opacity-50 p-2 w-full ${fontStyles.typewriter_font}`}>ELECTRONICS</h2>
					</Link>
					<Link to="/shop?category=men's clothing" className="card w-[300px] h-[350px] relative overflow-hidden rounded-lg">
						<img src={mensWearImg} className="w-full h-full object-cover transform scale-100 transition duration-300 ease-in-out hover:scale-105" alt="men's clothing background" />
						<h2 className={`text-white text-2xl absolute left-[50%] bottom-5 transform -translate-x-1/2 translate-y-[-50%] flex justify-center items-center bg-black bg-opacity-50 p-2 w-full ${fontStyles.typewriter_font}`}>MEN'S CLOTHING</h2>
					</Link>
					<Link to="/shop?category=women's clothing" className="card w-[300px] h-[350px] relative overflow-hidden rounded-lg">
						<img src={womensWearImg} className="w-full h-full object-cover transform scale-100 transition duration-300 ease-in-out hover:scale-105" alt="women's clothing background" />
						<h2 className={`text-white text-2xl absolute left-[50%] bottom-5 transform -translate-x-1/2 translate-y-[-50%] flex justify-center items-center bg-black bg-opacity-50 p-2 w-full ${fontStyles.typewriter_font}`}>WOMEN'S CLOTHING</h2>
					</Link>
					<Link to="/shop?category=jewelery" className="card w-[300px] h-[350px] relative overflow-hidden rounded-lg">
						<img src={jewelryImg} className="w-full h-full object-cover transform scale-100 transition duration-300 ease-in-out hover:scale-105" alt="jewelry background" />
						<h2 className={`text-white text-2xl absolute left-[50%] bottom-5 transform -translate-x-1/2 translate-y-[-50%] flex justify-center items-center bg-black bg-opacity-50 p-2 w-full ${fontStyles.typewriter_font}`}>JEWELRY</h2>
					</Link>
				</div>

				<div className={`${styles.customer_info} bg-white relative flex p-10`}>
					<div className="w-[100vw] md:w-[730px] h-[500px] overflow-hidden">
						<img className="w-full h-full mr-[5px] object-cover" src={ladyShoppingImg} alt="lady shopping" />
					</div>
					<div className="flex flex-col flex-grow items-center h-full md:pl-10">
						<h2 className="text-3xl font-bold mt-10 mb-4">Latest Fashion Trends</h2>
						<p className={`${fontStyles.description_font} text-left text-lg max-w-[530px]`}>Welcome to our fantastic store, where fashion dreams come true! Discover the latest trends and stylish outfits that turn heads, along with accessories that make bold statements. Dive into our curated collection, offering everything from casual chic to glamorous evening wear. Explore designer pieces, must-have essentials, and unique accessories to add magic to your look. Our friendly team is here to guide you every step of the way, making your shopping experience delightful. Join us on this exciting fashion journey at our fabulous store!</p>
						<img className="mt-5 w-[200px] rotate-45" src={flowerImg} alt="flower img" />
						<Link to="/shop" className="mt-5 w-[90%] text-white text-xl rounded-md border-4 border-[#687820] bg-[#89a02c] px-5 py-3 hover:bg-[#557820] hover:text-white font-bold transition ease-in-out duration-300 inline-block">
							Browse Products
						</Link>
					</div>
				</div>

				<div className={`${styles.customer_info} bg-white relative flex p-10`}>
					<div className="flex flex-col flex-grow items-center h-full lg:pr-10">
						<h2 className="text-3xl font-bold mb-4">Artisanal Creations</h2>
						<p className={`${fontStyles.description_font} text-left text-lg max-w-[530px]`}>Dive into a world of artisanal excellence only at "Ahola! Awesome Store." Discover handcrafted treasures that blend tradition with innovation, from bespoke clothing to unique accessories. Our curated collection celebrates the artistry of skilled craftsmen, offering one-of-a-kind pieces that tell stories and inspire individuality. Embrace the beauty of craftsmanship and make a statement with every piece you choose.</p>
						<img className="mt-5 w-[250px]" src={turtleImg} alt="turtle img" />
						<Link to="/shop" className="mt-5 mb-10 w-[90%] text-white text-xl rounded-md border-4 border-[#f22033] bg-[#eb4034] px-5 py-3 hover:bg-[#e8624a] hover:text-white font-bold transition ease-in-out duration-300 inline-block">
							Check Artist Crafts
						</Link>
					</div>
					<div className="w-[100vw] md:w-[730px] h-[500px] overflow-hidden">
						<img className="w-full h-full mr-[5px] object-cover" src={manShopping} alt="lady shopping" />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default Home;
