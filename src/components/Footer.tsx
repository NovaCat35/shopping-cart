import githubSvg from "../assets/github.svg";
import chatSvg from "../assets/chat.svg";
import phoneSvg from "../assets/phone.svg";
import emailSvg from "../assets/email.svg";
import style from "../styles/fonts.module.scss";
import "../styles/footer.scss";
import imgStyle from "../styles/img.module.scss";

function Footer() {
	return (
		<footer className="text-center bg-[#1b73a8] text-white">
			<div className="py-8 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
				{/* Company */}
				<div>
					<h3 className="text-lg font-bold mb-4 underline-offset-4 underline">COMPANY</h3>
					<ul className={`space-y-2 ${style.link_font}`}>
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
					<h3 className="text-lg font-semibold mb-4 underline-offset-4 underline">BRAND</h3>
					<ul className={`space-y-2 ${style.link_font}`}>
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
					<h3 className="text-lg font-semibold mb-4 underline-offset-4 underline">SUPPORT</h3>
					<ul className={`space-y-2 ${style.link_font}`}>
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

			<div className="bg-[#5bb6c8] pt-5 pb-8 px-4">
				{/* Contact Info */}
				<div className="max-w-7xl mx-auto mt-8 border-t border-gray-700 pt-4">
					<div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-5">
						<a href="/yolo" className="text-black bg-[#f0c033] border-2 border-white rounded px-3 py-1 flex items-center justify-center gap-x-2 hover:border-[#ec6e46] hover:text-white">
							<img src={phoneSvg} alt="phone svg" className={`w-4 h-4 ${imgStyle.filter_img_white}`} />
							(000)-ALOHA
						</a>
						<a href="mailto:support@aloha.xyz" className="text-black bg-[#f0c033] border-2 border-white rounded px-3 py-1 flex items-center justify-center gap-x-2 hover:border-[#ec6e46] hover:text-white">
							<img src={emailSvg} alt="email svg" className={`w-4 h-4 ${imgStyle.filter_img_white}`} />
							support@ALOHA.org
						</a>
						<a href="/yolo" className="text-black bg-[#f0c033] border-2 border-white rounded px-3 py-1 flex items-center justify-center gap-x-2 hover:border-[#ec6e46] hover:text-white">
							<img src={chatSvg} alt="chat svg" className={`w-4 h-4 ${imgStyle.filter_img_white}`} />
							Chat with Us
						</a>
					</div>
				</div>
				{/* Legal */}
				<div className="max-w-7xl mx-auto mt-8 flex items-center justify-center">
					<div className={`flex items-center justify-center space-x-8 flex-wrap ${style.links}`}>
						<a href="#" className={` hover:text-white hover:underline ${style.typewriter_font}`}>
							Privacy
						</a>
						<a href="#" className={`text-white underline-offset-4 hover:underline ${style.typewriter_font}`}>
							Accessibility
						</a>
						<a href="#" className={`text-white underline-offset-4  hover:underline ${style.typewriter_font}`}>
							Terms of Service
						</a>
						<a href="#" className={`text-white underline-offset-4  hover:underline ${style.typewriter_font}`}>
							Refund Policy
						</a>
						<a href="#" className={`text-white underline-offset-4  hover:underline ${style.typewriter_font}`}>
							Conformity
						</a>
					</div>
				</div>
				{/* Developer Info */}
				<div className="max-w-7xl mx-auto mt-8 flex flex-col items-center">
					<a href="https://github.com/NovaCat35/shopping-cart" className="footerStyle w-80 flex items-center justify-center space-x-2 rounded-md bg-[#f6fffe] p-2" target="blank">
						<img src={githubSvg} alt="github logo" className="h-8 w-auto" />
						<p className="text-gray-600">Developed by NovaCat35</p>
					</a>
					<div className="mt-4 font-semibold text-[#1c73a8]">&copy; 2024 Aloha Awesome Store. All rights reserved.</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
