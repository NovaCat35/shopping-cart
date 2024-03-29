import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import shopLogo from "../assets/ahola-logo.webp";
import Search from "./Search";

function Navigation() {
	const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [modalActive, setModalActive] = useState(false); // disable navbar disappear scroll action when modal active

	useEffect(() => {
		const controlNavbar = () => {
			if (typeof window !== "undefined") {
				if (window.scrollY > lastScrollY && !modalActive) { // we can't hide navbar if modal is active
					// if scrolling down, hide the navbar
					setShow(false);
				} else {
					// if scrolling up, show the navbar
					setShow(true);
				}
				// remember the current page location for the next move
				setLastScrollY(window.scrollY);
			}
		};

		if (typeof window !== "undefined") {
			window.addEventListener("scroll", controlNavbar);

			// cleanup function
			return () => {
				window.removeEventListener("scroll", controlNavbar);
			};
		}
	}, [lastScrollY]);

	return (
		<nav className={`bg-gray-900 px-3 py-3 flex justify-between items-center sticky top-0 z-10 transition-transform duration-300 transform ${show ? "translate-y-0" : "-translate-y-full"}`}>
			<div className="left-side flex justify-center items-center gap-5">
				<img className="w-20" src={shopLogo} alt="shop logo" />
			</div>
			<div className="right-side flex items-center gap-3">
				<Link to="/" className="text-white px-4 py-2 hover:bg-gray-700">
					Home
				</Link>
				<Link to="/shop" className="text-white px-4 py-2 hover:bg-gray-700">
					Shop
				</Link>
				<div className="divider h-6 w-px bg-white mr-3"></div>
				<Search setModalActive={setModalActive}/>
				<ShoppingCart />
			</div>
		</nav>
	);
}

export default Navigation;
