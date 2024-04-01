import React from "react";
import searchIcon from "../assets/search.svg";

interface ModalProps {
	handleToggleModal: () => void;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onClick: (e: React.FormEvent<HTMLFormElement>) => void;
}

function Modal({ handleToggleModal, onChange, onClick }: ModalProps) {
	return (
		<div className={`fixed inset-0 z-50 h-screen w-screen flex justify-center items-center bg-gray-900 bg-opacity-50`}>
			<div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
				<div className="flex justify-between items-center mb-4">
					<h3 className="text-lg font-semibold">Search</h3>
					<button className="px-3 py-1 bg-gray-900 text-white rounded-md" onClick={handleToggleModal}>
						Close
					</button>
				</div>
				<form onSubmit={onClick}>
					<div className="flex items-center mb-4">
						<img src={searchIcon} alt="search icon" className="w-6 h-6 mr-2" />
						<input type="text" onChange={onChange} placeholder="Search..." className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none w-full" />
					</div>
					<button type="submit" className="px-4 py-2 bg-gray-900 text-white rounded-md w-full">
						GO
					</button>
				</form>
			</div>
		</div>
	);
}

export default Modal;
