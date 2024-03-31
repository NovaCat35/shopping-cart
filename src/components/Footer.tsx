import githubSvg from "../assets/github.svg";
import footerStyle from "../styles/fonts.module.scss";

function Footer() {
	return (
		<footer className="text-center bg-gray-900 text-white py-8 px-4 mt-10">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
				{/* Company */}
				<div>
					<h3 className="text-lg font-bold mb-4">COMPANY</h3>
					<ul className={`space-y-2 ${footerStyle.link_font}`}>
						<li>
							<a href="#" className="hover:text-gray-300 hover:underline">
								Our Story
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-gray-300 hover:underline">
								Shop Locations
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-gray-300 hover:underline">
								Mission
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-gray-300 hover:underline">
								Philanthropy
							</a>
						</li>
					</ul>
				</div>

				{/* Brand */}
				<div>
					<h3 className="text-lg font-semibold mb-4">BRAND</h3>
					<ul className={`space-y-2 ${footerStyle.link_font}`}>
						<li>
							<a href="#" className="hover:text-gray-300 hover:underline">
								Style & Fit
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-gray-300 hover:underline">
								Craftsmanship
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-gray-300 hover:underline">
								Reviews
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-gray-300 hover:underline">
								Blog
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-gray-300 hover:underline">
								Press
							</a>
						</li>
					</ul>
				</div>

				{/* Help */}
				<div>
					<h3 className="text-lg font-semibold mb-4">HELP</h3>
					<ul className={`space-y-2 ${footerStyle.link_font}`}>
						<li>
							<a href="#" className="hover:text-gray-300 hover:underline">
								Shipping & Returns
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-gray-300 hover:underline">
								Repairs
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-gray-300 hover:underline">
								Warranty
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-gray-300 hover:underline">
								FAQ
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-gray-300 hover:underline">
								Contact Us
							</a>
						</li>
					</ul>
				</div>
			</div>

			{/* Contact Info */}
			<div className="max-w-7xl mx-auto mt-8 border-t border-gray-700 pt-4">
				<div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-5">
					<a href="#" className="text-white border border-white rounded px-3 py-1 hover:border-gray-300 hover:text-gray-300">
						<i className="fas fa-phone-alt"></i> (000)-AHOLA
					</a>
					<a href="mailto:support@ahola.xyz" className="text-white border border-white rounded px-3 py-1 hover:border-gray-300 hover:text-gray-300">
						<i className="fas fa-envelope"></i> support@AHOLA.org
					</a>
					<a href="#" className="text-white border border-white rounded px-3 py-1 hover:border-gray-300 hover:text-gray-300">
						<i className="fas fa-comments"></i> Chat with Us
					</a>
				</div>
			</div>

			{/* Legal */}
			<div className="max-w-7xl mx-auto mt-8 flex items-center justify-center">
				<div className={`flex items-center justify-center space-x-8 flex-wrap ${footerStyle.links}`}>
					<a href="#" className={`text-white hover:text-gray-300 hover:underline ${footerStyle.typewriter_font}`}>
						Privacy
					</a>
					<a href="#" className={`text-white hover:text-gray-300 hover:underline ${footerStyle.typewriter_font}`}>
						Accessibility
					</a>
					<a href="#" className={`text-white hover:text-gray-300 hover:underline ${footerStyle.typewriter_font}`}>
						Terms of Service
					</a>
					<a href="#" className={`text-white hover:text-gray-300 hover:underline ${footerStyle.typewriter_font}`}>
						Refund Policy
					</a>
					<a href="#" className={`text-white hover:text-gray-300 hover:underline ${footerStyle.typewriter_font}`}>
						Conformity
					</a>
				</div>
			</div>

			{/* Developer Info */}
			<div className="max-w-7xl mx-auto mt-8 flex flex-col items-center">
				<a href="https://github.com/NovaCat35/shopping-cart" className="flex items-center justify-center space-x-2">
					<img src={githubSvg} alt="github logo" className="h-8 w-auto transform hover:rotate-[360deg] transition-transform duration-700 ease-in-out" />
					<p className="text-gray-500">Developed by NovaCat35</p>
				</a>
				<div className="mt-4 text-gray-500">&copy; 2024 Ahola Awesome Store. All rights reserved.</div>
			</div>
		</footer>
	);
}

export default Footer;
