import "./SearchDefinitions.css"
import {useState} from "react"
import PropTypes from 'prop-types';
import { useTheme } from "../../contexts/ThemeContext";

function SearchDefinitions({handleSearch}) {
  const [searchedWord, setSearchedWord] = useState("")
  const { isDarkMode } = useTheme();

  const handleSubmit = (event) => {
    event.preventDefault()
    handleSearch(searchedWord)
  }


  return (
    <div className={`search-container ${isDarkMode ? "dark" : "light"}`}>
      <form className="form-input" onSubmit={handleSubmit}>
        <input 
        className={`search-input ${isDarkMode ? "dark-bg" : "light-bg"}`}
        type="text"
        name="word-search"
        placeholder="Search for a word..."
        value={searchedWord}
        onChange={(event) => setSearchedWord(event.target.value)}
        />
        <button className="btn btn-active btn-neutral submit-search dark:text-white" data-theme="nord" disabled={!searchedWord} >Submit</button>
      </form>
    </div>
  )
}

export default SearchDefinitions

SearchDefinitions.propTypes = { 
  handleSearch: PropTypes.func.isRequired,
}