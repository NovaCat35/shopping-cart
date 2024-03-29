import { useState } from "react";
import searchIcon from "../assets/search.svg";
import styleImg from "../styles/img.module.scss";
import Modal from "./Modal";

interface SearchProp {
   setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function Search({setModalActive} : SearchProp) {
	const [showModal, setShowModal] = useState(false);
	const [searchValue, setSearchValue] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const handleToggleModal = () => {
		setShowModal(!showModal);
      setModalActive(!showModal);
	};

	const searchQuery = () => {
		
	};

	return (
		<>
			{/* Search bar with icon for larger screens */}
			<div className="hidden md:flex items-center relative">
				<input type="text" onChange={handleChange} value={searchValue} placeholder="Search..." className="w-80 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none" />
				<button onClick={searchQuery} className="flex items-center justify-center bg-[#02afe6] rounded-r-md w-12 h-[42px]" type="button">
					<img src={searchIcon} alt="Search icon" className={`${styleImg.filterImg}`} />
				</button>
			</div>

			{/* Search icon for smaller screens */}
			<div className="md:hidden flex items-center justify-center">
				<button onClick={handleToggleModal} className="flex items-center justify-center bg-[#02afe6] text-gray-600 rounded-md w-10 h-10" type="button">
					<img src={searchIcon} alt="Search icon" className={`${styleImg.filterImg}`} />
				</button>
			</div>

			{/* Modal for search input on smaller screens */}
			{showModal && <Modal onClick={searchQuery} handleToggleModal={handleToggleModal} onChange={handleChange} />}
		</>
	);
}

export default Search;
