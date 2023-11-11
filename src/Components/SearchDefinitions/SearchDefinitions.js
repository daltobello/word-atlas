import "./SearchDefinitions.css"
import {useState, useEffect} from "react"

function SearchDefinitions({handleSearch}) {
  const [searchedWord, setSearchedWord] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    handleSearch(searchedWord, "dictionary")
  }


  return (
    <div className="search-container">
      <form className="form-input" onSubmit={handleSubmit}>
        <input className="search-input"
        type="text"
        name="word-search"
        placeholder="Search for a word..."
        value={searchedWord}
        onChange={(event) => setSearchedWord(event.target.value)}
        />
        <button className="submit-search" disabled={!searchedWord} >Submit</button>
      </form>
    </div>
  )
}

export default SearchDefinitions