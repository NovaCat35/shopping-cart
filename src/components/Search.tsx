import React from 'react'
import search from "../assets/search.svg";
import styleImg from '../styles/img.module.scss';

function Search() {
  return (
   <img className={`${styleImg.filterImg}`} src={search} alt="search icon" />
   )
}

export default Search