import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import searchIcon from "../assets/search.svg";
import styleImg from "../styles/img.module.scss";
import Modal from "./Modal";

interface SearchProp {
	setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function Search({ setModalActive }: SearchProp) {
	const [showModal, setShowModal] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();
	const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
	const navigate = useNavigate();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
	};

	const handleToggleModal = () => {
		setShowModal(!showModal);
		setModalActive(!showModal);
	};

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setShowModal(false); // Close the modal if it's open
		setSearchParams({ search: searchQuery });
		navigate(`/shop?search=${searchQuery}`);
	};

	return (
		<>
			{/* Search bar with icon for larger screens */}
			<form className="commentForm" onSubmit={handleSearch}>
				<div className="hidden md:flex items-center relative">
					<input type="text" onChange={handleChange} value={searchQuery} placeholder="Search..." className="w-80 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none" />
					<button type="submit" className="flex items-center justify-center bg-[#02afe6] rounded-r-md w-12 h-[42px]">
						<img src={searchIcon} alt="Search icon" className={`${styleImg.filter_img_white}`} />
					</button>
				</div>
			</form>

			{/* Search icon for smaller screens */}
			<div className="md:hidden flex items-center justify-center">
				<button onClick={handleToggleModal} className="flex items-center justify-center bg-[#02afe6] text-gray-600 rounded-md w-10 h-10" type="button">
					<img src={searchIcon} alt="Search icon" className={`${styleImg.filter_img_white}`} />
				</button>
			</div>

			{/* Modal for search input on smaller screens */}
			{showModal && <Modal onClick={handleSearch} handleToggleModal={handleToggleModal} onChange={handleChange} />}
		</>
	);
}

export default Search;
