import Navigation from "./Navigation";
import manShopping from "../assets/shop-banner.jpeg";
import dogImg from "../assets/dog-clothes.jpeg";
import ladyShoppingImg from "../assets/lady-shopping.jpeg";
import ladyYellowBgImg from "../assets/lady-yellow-bg.jpeg";
import flowerImg from "../assets/red_hibiscus.png";
import turtleImg from "../assets/turtle.avif";
import waterColorBg from "../assets/stacked-waves-haikei.svg";
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
			<div className="banner bg-[#5bb6c8] w-full h-10 -mt-3 "></div>
			<div className={`${styles.intro_container} bg-[#265fb6] flex relative justify-between pt-7 pb-[70px]`}>
				<img loading="lazy" className="absolute left-1/2 transform -translate-x-1/2 w-full" src={waterColorBg} alt="watercolor background" />
				<div className={`relative pl-10`}>
					<div className={`${styles.welcome_image1} z-10 bg-[#fef733] absolute top-[85px] left-[280px] w-[320px] h-[320px] overflow-hidden rounded-full shadow-lg`} style={{ boxShadow: "3px 4px 10px 3px rgba(251, 198, 12, 0.5)" }}>
						<img loading="lazy" className="w-full h-full object-cover" src={ladyYellowBgImg} alt="girl yellow background" />
					</div>
					<div className={`${styles.welcome_image2} bg-[#4493b9] w-[350px] h-[350px] overflow-hidden rounded-full shadow-lg`} style={{ boxShadow: "2px 4px 6px 5px rgba(73, 161, 227, 0.5)" }}>
						<img loading="lazy" className="z-20 w-full h-auto object-cover mb-20" src={dogImg} alt="dog clothing" />
					</div>
				</div>

				<div className={`${styles.welcome_banner} z-10`}>
					<div className={`${styles.main_title} mt-2 mb-4`}>
						<h1 className={`${styles.text_shadow} ${styles.text_animation} font-bold text-7xl md:text-8xl lg:text-9xl`}>
							<div className="letter-a">A</div>
							<div className="letter-h">L</div>
							<div className="letter-o">O</div>
							<div className="letter-l">H</div>
							<div className="letter-a2">A</div>
							<div className="letter-exclamation">!</div>
						</h1>
						<div className={`${styles.sub_title_texts} ${styles.text_shadow2} text-[#0e1d29]`}>
							<p className="tracking-widest text-5xl md:text-6xl font-medium">
								AWESOME<span className="">&nbsp;</span>
							</p>
							<p className="tracking-widest text-5xl md:text-6xl font-light">STORE</p>
						</div>
					</div>

					<div className="w-full flex justify-center">
						<div className={`${styles.welcome_image3} bg-[#4493b9] mb-5 w-[270px] h-[270px] overflow-hidden rounded-full `}>
							<img loading="lazy" className="z-10 w-full h-auto object-cover mb-10" src={dogImg} alt="dog clothing" />
						</div>
					</div>
					<p className={`${fontStyles.header_font} text-3xl mb-12 text-white`}>Where awesome finds its place.</p>
					<Link to="/shop" className={`${styles.shadow_skyblue} text-white text-2xl rounded-md border-2 border-[#d13f57] bg-[#e34b64] px-6 py-3 hover:bg-[#39a0db] hover:border-[#3494ca] font-bold transition ease-in-out duration-300`}>
						Shop Now
					</Link>
				</div>
			</div>
			<div className="banner relative bg-[#ec6e46] top-[-25px] h-20 pt-16"></div>

			<main className="mb-10">
				<div className="relative">
					<div className="cards-container flex justify-center gap-10 flex-wrap pt-[120px] py-20 px-15 bg-[#f7f7f9]">
						<Link to="/shop?category=electronics" className="card z-10 w-[300px] h-[350px] relative overflow-hidden rounded-lg">
							<img loading="lazy" src={electronicImg} className="w-full h-full object-cover transform scale-100 transition duration-300 ease-in-out hover:scale-105" alt="electronic background" />
							<h2 className={`text-white text-2xl absolute left-[50%] bottom-5 transform -translate-x-1/2 translate-y-[-50%] flex justify-center items-center bg-black bg-opacity-50 p-2 w-full ${fontStyles.typewriter_font}`}>ELECTRONICS</h2>
						</Link>
						<Link to="/shop?category=men's clothing" className="card z-10 w-[300px] h-[350px] relative overflow-hidden rounded-lg">
							<img loading="lazy" src={mensWearImg} className="w-full h-full object-cover transform scale-100 transition duration-300 ease-in-out hover:scale-105" alt="men's clothing background" />
							<h2 className={`text-white text-2xl absolute left-[50%] bottom-5 transform -translate-x-1/2 translate-y-[-50%] flex justify-center items-center bg-black bg-opacity-50 p-2 w-full ${fontStyles.typewriter_font}`}>MEN'S CLOTHING</h2>
						</Link>
						<Link to="/shop?category=women's clothing" className="card z-10 w-[300px] h-[350px] relative overflow-hidden rounded-lg">
							<img loading="lazy" src={womensWearImg} className="w-full h-full object-cover transform scale-100 transition duration-300 ease-in-out hover:scale-105" alt="women's clothing background" />
							<h2 className={`text-white text-2xl absolute left-[50%] bottom-5 transform -translate-x-1/2 translate-y-[-50%] flex justify-center items-center bg-black bg-opacity-50 p-2 w-full ${fontStyles.typewriter_font}`}>WOMEN'S CLOTHING</h2>
						</Link>
						<Link to="/shop?category=jewelery" className="card z-10 w-[300px] h-[350px] relative overflow-hidden rounded-lg">
							<img loading="lazy" src={jewelryImg} className="w-full h-full object-cover transform scale-100 transition duration-300 ease-in-out hover:scale-105" alt="jewelry background" />
							<h2 className={`text-white text-2xl absolute left-[50%] bottom-5 transform -translate-x-1/2 translate-y-[-50%] flex justify-center items-center bg-black bg-opacity-50 p-2 w-full ${fontStyles.typewriter_font}`}>JEWELRY</h2>
						</Link>
					</div>

					<svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
						<path fill="#5bb6c8" fill-opacity="1" d="M0,160L30,149.3C60,139,120,117,180,128C240,139,300,181,360,181.3C420,181,480,139,540,144C600,149,660,203,720,186.7C780,171,840,85,900,85.3C960,85,1020,171,1080,192C1140,213,1200,171,1260,149.3C1320,128,1380,128,1410,128L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
					</svg>
				</div>

				<div className={`${styles.customer_info} justify-evenly bg-white relative flex p-10`}>
					<div className="relative w-[100vw] md:w-[730px] h-[500px] ">
						<div className="absolute hidden md:block w-full h-full bg-[#e0afaf] transform rotate-3 shadow-md"></div>
						<img loading="lazy" className="absolute w-full h-full mr-[5px] object-cover" src={ladyShoppingImg} alt="lady shopping" />
					</div>
					<div className="flex flex-col items-center h-full md:pl-10">
						<h2 className="text-3xl font-bold mt-10 mb-4">Latest Fashion Trends</h2>
						<p className={`${fontStyles.description_font} text-left text-lg max-w-[530px]`}>Welcome to our fantastic store, where fashion dreams come true! Discover the latest trends and stylish outfits that turn heads, along with accessories that make bold statements. Dive into our curated collection, offering everything from casual chic to glamorous evening wear. Explore designer pieces, must-have essentials, and unique accessories to add magic to your look. Our friendly team is here to guide you every step of the way, making your shopping experience delightful. Join us on this exciting fashion journey at our fabulous store!</p>
						<img loading="lazy" className="mt-5 w-[200px] rotate-45" src={flowerImg} alt="flower img" />
						<Link to="/shop" className="mt-5 w-[90%] md:w-[30rem] text-white text-xl rounded-md border-4 border-[#687820] bg-[#89a02c] px-5 py-3 hover:bg-[#557820] hover:text-white font-bold transition ease-in-out duration-300 inline-block">
							Browse Products
						</Link>
					</div>
				</div>

				<div className={`${styles.customer_info} justify-evenly bg-white relative flex p-10`}>
					<div className="flex flex-col items-center h-full lg:pr-10">
						<h2 className="text-3xl font-bold mb-4">Artisanal Creations</h2>
						<p className={`${fontStyles.description_font} text-left text-lg max-w-[530px]`}>Dive into a world of artisanal excellence only at "Aloha! Awesome Store." Discover handcrafted treasures that blend tradition with innovation, from bespoke clothing to unique accessories. Our curated collection celebrates the artistry of skilled craftsmen, offering one-of-a-kind pieces that tell stories and inspire individuality. Embrace the beauty of craftsmanship and make a statement with every piece you choose.</p>
						<img loading="lazy" className="mt-5 w-[250px]" src={turtleImg} alt="turtle img" />
						<Link to="/shop" className="mt-5 mb-10 w-[90%] md:w-[30rem] text-white text-xl rounded-md border-4 border-[#f22033] bg-[#eb4034] px-5 py-3 hover:bg-[#e8624a] hover:text-white font-bold transition ease-in-out duration-300 inline-block">
							Check Artist Crafts
						</Link>
					</div>
					<div className="relative w-[100vw] md:w-[730px] h-[500px]">
						<div className="absolute hidden md:block w-full h-full bg-[#4493b9] transform -rotate-3 shadow-md"></div>
						<img loading="lazy" className="absolute w-full h-full mr-[5px] object-cover" src={manShopping} alt="man shopping" />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default Home;
