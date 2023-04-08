import { React, useState } from "react";
import PropTypes from 'prop-types';
import { BiSearch } from 'react-icons/bi';
import css from "./Searchbar.module.css";


const Searchbar = ({ onSubmit }) => {
    const [searchWord, setSearchWord] = useState("")

    const handleInputChange = evt => { 
        const searchWord = evt.target.value.toLowerCase()
        setSearchWord(searchWord)
    }  
    
    const handleSubmit = evt => { 
        evt.preventDefault();

        if (searchWord.trim() === '') { 
            alert("Write a search word")
            return;
        }
        onSubmit(searchWord);
        setSearchWord("")
    }

    return (
        <header className={css.searchBar}>
            <form onSubmit={handleSubmit} className={css.searchForm}>
                <button type="submit" className={css.searchFormBtn}>
                    <BiSearch size={20}/>
                </button>
                <input
                    className={css.searchFormInput}
                    type="text"
                    name="searchWord"
                    placeholder="Search images and photos"
                    value={searchWord}
                    onChange={handleInputChange}
                />
            </form>
        </header>)
}

export default Searchbar


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};